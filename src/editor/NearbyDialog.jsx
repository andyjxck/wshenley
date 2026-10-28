// The Nearby box: a map of the places listed under Nearby, with a search bar.
//  - Search for a place (or tap the map), check it, then "Add to Nearby". Its name, where it is, its website
//    (when OpenStreetMap knows it) and the distance from the White Swan are filled in for you.
//  - Every place on the list has a numbered pin. Tap a pin or a name to open that place's details. The
//    open place's pin can be dragged to the right spot.
//  - Everything can still be done from the list alone (keyboard, or if the map won't load).
//
// Outside services (all free, no keys, all OpenStreetMap-based). Used only here, by signed-in editors:
//  - Map pictures: tile.openstreetmap.org. Credit shown on the map, as its tile policy asks.
//  - Search and "what's here": Nominatim (nominatim.openstreetmap.org). Its policy: at most one request a
//    second and no search-as-you-type, so searches only run when Search is pressed, one at a time.
//  - Distances: OSRM routing (router.project-osrm.org for driving, routing.openstreetmap.de for walking),
//    one request per place added. If routing fails, a straight-line distance is offered instead.
// Stored in the same list as before (list:home.nearby), with two extra fields per place: lat and lng.
import React, { useEffect, useMemo, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Dialog, Icon, FieldInput } from './Editor.jsx'
import { parseList, safeLinkHref } from '../site.jsx'
import { swanLocation } from '../content.js'

const TILES = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const OSM_CREDIT = '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
const NOMINATIM = 'https://nominatim.openstreetmap.org'
const DRIVE = 'https://router.project-osrm.org/route/v1/driving/'
const WALK = 'https://routing.openstreetmap.de/routed-foot/route/v1/driving/'
const SWAN = swanLocation

// ------------------------------------------------------------------ helpers
const num = (v) => { const n = Number(String(v == null ? '' : v).trim()); return String(v == null ? '' : v).trim() !== '' && Number.isFinite(n) ? n : null }
export function pinOf(it) {
  const lat = num(it && it.lat)
  const lng = num(it && it.lng)
  if (lat == null || lng == null || Math.abs(lat) > 90 || Math.abs(lng) > 180) return null
  return { lat, lng }
}
const fix6 = (n) => String(Math.round(n * 1e6) / 1e6)
const norm = (s) => String(s || '').toLowerCase().replace(/<[^>]*>/g, '').replace(/[’'`]/g, '').replace(/[^a-z0-9]+/g, ' ').trim()
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Lists saved before the map existed have no pins: give the built-in places their pins back by name.
export function withPins(items, builtIn) {
  return items.map((it) => {
    if (pinOf(it)) return it
    const b = builtIn.find((x) => pinOf(x) && norm(x.name) && norm(x.name) === norm(it.name))
    return b ? { ...it, lat: b.lat, lng: b.lng } : it
  })
}

function crowMiles(a, b) {
  const R = 3958.8
  const rad = (d) => (d * Math.PI) / 180
  const dLat = rad(b.lat - a.lat)
  const dLng = rad(b.lng - a.lng)
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(h))
}
// Same style as the built-in list: "6 miles · 11 min drive", "0.2 miles · 3 min walk"
export function formatMiles(mi) {
  if (mi < 1) { const v = Math.max(0.1, Math.round(mi * 10) / 10); return `${v} miles` }
  const v = Math.round(mi)
  return `${v} mile${v === 1 ? '' : 's'}`
}
export function formatTrip(mi, minutes, how) {
  return `${formatMiles(mi)} · ${Math.max(1, Math.round(minutes))} min ${how}`
}

// Nominatim asks for no more than one request a second from each user.
let nextSlot = 0
async function politeJson(url, signal) {
  const now = Date.now()
  const wait = Math.max(0, nextSlot - now)
  nextSlot = Math.max(now, nextSlot) + 1100
  if (wait) await sleep(wait)
  const r = await fetch(url, { headers: { Accept: 'application/json' }, referrerPolicy: 'strict-origin-when-cross-origin', signal })
  if (!r.ok) throw new Error(`HTTP ${r.status}`)
  return r.json()
}
async function plainJson(url, signal) {
  const r = await fetch(url, { headers: { Accept: 'application/json' }, referrerPolicy: 'strict-origin-when-cross-origin', signal })
  if (!r.ok) throw new Error(`HTTP ${r.status}`)
  return r.json()
}

const firstOf = (o, keys) => { for (const k of keys) if (o && o[k]) return o[k]; return '' }
function websiteOf(tags) {
  const w = firstOf(tags, ['website', 'contact:website', 'url'])
  if (!w) return ''
  const v = /^https?:\/\//i.test(w) ? w : `https://${w}`
  return safeLinkHref(v) && /^https?:\/\//i.test(v) ? v.slice(0, 600) : ''
}
// A Nominatim result as a Nearby place: { name, place, href, lat, lng, label }
export function placeFromResult(r) {
  const a = r.address || {}
  // smallest named place first ("Wilmcote", not the district "Stratford-on-Avon"); " CP" = civil parish
  const town = firstOf(a, ['village', 'town', 'hamlet', 'suburb', 'city', 'municipality', 'county']).replace(/ CP$/, '')
  const road = firstOf(a, ['road', 'pedestrian', 'square', 'neighbourhood'])
  const parts0 = String(r.display_name || '').split(',').map((s) => s.trim().replace(/ CP$/, '')).filter(Boolean)
  const name = (r.name || firstOf(a, ['tourism', 'amenity', 'historic', 'leisure', 'shop', 'building']) || parts0[0] || 'New place').slice(0, 100)
  const where = [road && norm(road) !== norm(name) ? road : '', town && norm(town) !== norm(name) ? town : ''].filter(Boolean).join(', ')
  return {
    name,
    place: (where || parts0.slice(1, 3).join(', ')).slice(0, 100),
    href: websiteOf(r.extratags),
    lat: fix6(Number(r.lat)),
    lng: fix6(Number(r.lon)),
    label: parts0.slice(0, 4).join(', '),
  }
}

async function searchPlaces(q, signal) {
  const d = 0.6
  const p = new URLSearchParams({
    q, format: 'jsonv2', limit: '6', addressdetails: '1', extratags: '1', countrycodes: 'gb', 'accept-language': 'en-GB',
    viewbox: [SWAN.lng - d, SWAN.lat + d * 0.6, SWAN.lng + d, SWAN.lat - d * 0.6].join(','), bounded: '0',
  })
  const list = await politeJson(`${NOMINATIM}/search?${p}`, signal)
  return (Array.isArray(list) ? list : []).filter((r) => r && r.lat && r.lon).map(placeFromResult)
}
async function whatsHere(at, signal) {
  const p = new URLSearchParams({ lat: String(at.lat), lon: String(at.lng), format: 'jsonv2', zoom: '18', addressdetails: '1', extratags: '1', 'accept-language': 'en-GB' })
  const r = await politeJson(`${NOMINATIM}/reverse?${p}`, signal)
  if (!r || r.error) return { name: 'New place', place: '', href: '', lat: fix6(at.lat), lng: fix6(at.lng), label: 'A spot you picked on the map' }
  return { ...placeFromResult(r), lat: fix6(at.lat), lng: fix6(at.lng) }
}

// Road distance and time from the White Swan. Close places (under a mile by road) get walking instead.
// Falls back to a straight-line distance if routing is unavailable.
export async function tripFromSwan(to, signal) {
  const path = `${SWAN.lng},${SWAN.lat};${to.lng},${to.lat}?overview=false`
  try {
    const d = await plainJson(DRIVE + path, signal)
    const r = d && d.code === 'Ok' && d.routes && d.routes[0]
    if (!r) throw new Error('no route')
    const mi = r.distance / 1609.344
    if (mi < 1) {
      try {
        const w = await plainJson(WALK + path, signal)
        const wr = w && w.code === 'Ok' && w.routes && w.routes[0]
        if (wr) return { text: formatTrip(wr.distance / 1609.344, wr.duration / 60, 'walk'), exact: true }
      } catch (e) { if (signal && signal.aborted) throw e }
    }
    return { text: formatTrip(mi, r.duration / 60, 'drive'), exact: true }
  } catch (e) {
    if (signal && signal.aborted) throw e
    return { text: `About ${formatMiles(crowMiles(SWAN, to))} away`, exact: false }
  }
}

// ------------------------------------------------------------------ the map
const pinIcon = (cls, label) => L.divIcon({ className: `ed-pin ${cls}`, html: `<span><i>${label}</i></span>`, iconSize: [32, 40], iconAnchor: [16, 38] })

function NearbyMap({ items, selected, candidate, onPick, onSelect, onMovePin, focusRef }) {
  const elRef = useRef(null)
  const mapRef = useRef(null)
  const layerRef = useRef(null)
  const latest = useRef({ onPick, onSelect, onMovePin })
  latest.current = { onPick, onSelect, onMovePin }
  const [tiles, setTiles] = useState('loading') // loading | ok | failed

  useEffect(() => {
    const map = L.map(elRef.current, { zoomControl: true, keyboard: true, scrollWheelZoom: true, worldCopyJump: false })
    map.attributionControl.setPrefix('<a href="https://leafletjs.com" target="_blank" rel="noopener">Leaflet</a>')
    let ok = 0
    let bad = 0
    L.tileLayer(TILES, { maxZoom: 19, attribution: OSM_CREDIT, crossOrigin: false })
      .on('tileload', () => { ok += 1; setTiles('ok') })
      .on('tileerror', () => { bad += 1; if (!ok && bad >= 4) setTiles('failed') })
      .addTo(map)
    map.setView([SWAN.lat, SWAN.lng], 10)
    map.on('click', (e) => latest.current.onPick({ lat: e.latlng.lat, lng: e.latlng.lng }))
    layerRef.current = L.layerGroup().addTo(map)
    mapRef.current = map
    focusRef.current = {
      fitAll: (pins) => {
        const pts = [[SWAN.lat, SWAN.lng], ...pins.map((p) => [p.lat, p.lng])]
        if (pts.length > 1) map.fitBounds(L.latLngBounds(pts), { padding: [36, 36], maxZoom: 13 })
        else map.setView(pts[0], 12)
      },
      show: (p, zoom) => map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), zoom || 12), { duration: 0.5 }),
    }
    // the box changes size on phones (keyboard, rotation): keep the map filling its space
    let ro
    if (typeof ResizeObserver !== 'undefined') { ro = new ResizeObserver(() => map.invalidateSize()); ro.observe(elRef.current) }
    const t = setTimeout(() => map.invalidateSize(), 250)
    return () => { clearTimeout(t); if (ro) ro.disconnect(); map.remove(); mapRef.current = null; focusRef.current = null }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Pins: the White Swan, every listed place (numbered), and the place being added.
  useEffect(() => {
    const layer = layerRef.current
    if (!layer) return
    layer.clearLayers()
    const swan = L.marker([SWAN.lat, SWAN.lng], { icon: pinIcon('swan', 'WS'), keyboard: false, interactive: false, zIndexOffset: -100 })
    swan.addTo(layer)
    const se = swan.getElement()
    if (se) { se.setAttribute('aria-hidden', 'true'); se.title = 'The White Swan' }
    items.forEach((it, i) => {
      const p = pinOf(it)
      if (!p) return
      const on = i === selected
      const name = (it.name || '').replace(/<[^>]*>/g, '') || `Place ${i + 1}`
      const m = L.marker([p.lat, p.lng], { icon: pinIcon(on ? 'on' : '', String(i + 1)), keyboard: true, title: name, draggable: on, autoPan: true, zIndexOffset: on ? 1000 : 0 })
      m.on('click', () => latest.current.onSelect(i, false))
      m.on('dragend', () => { const ll = m.getLatLng(); latest.current.onMovePin(i, { lat: ll.lat, lng: ll.lng }) })
      m.addTo(layer)
      const el = m.getElement()
      if (el) { el.setAttribute('role', 'button'); el.setAttribute('aria-label', `${i + 1}. ${name}${on ? ' (open, drag to move)' : ''}`) }
    })
    const cp = candidate && pinOf(candidate)
    if (cp) {
      const m = L.marker([cp.lat, cp.lng], { icon: pinIcon('new', '+'), keyboard: false, zIndexOffset: 2000 })
      m.addTo(layer)
      const el = m.getElement()
      if (el) { el.setAttribute('aria-hidden', 'true'); el.title = 'The place you are adding' }
    }
  }, [items, selected, candidate])

  return (
    <div className="ed-nb-mapwrap">
      <div className="ed-nb-map" ref={elRef} role="region" aria-label="Map of nearby places. Click or tap the map to add the place there. Arrow keys move the map, plus and minus zoom." />
      <button type="button" className="ed-nb-all" onClick={() => focusRef.current && focusRef.current.fitAll(items.map(pinOf).filter(Boolean))}>Show all places</button>
      {tiles === 'failed' && (
        <p className="ed-nb-mapfail" role="status">The map pictures couldn’t load just now. Search and the list below still work.</p>
      )}
    </div>
  )
}

// ------------------------------------------------------------------ the box
export default function NearbyDialog({ spec, text, setText, onClose }) {
  const { key, fields, fallback, title, itemName = 'place', max = 30 } = spec
  const raw = text[key]
  const changed = raw != null && raw !== ''
  const items = useMemo(() => withPins(parseList(raw, fields, false) || fallback, fallback), [raw, fields, fallback])
  const itemsRef = useRef(items)
  itemsRef.current = items
  const visible = fields.filter((f) => !f.hidden)
  const fieldByName = Object.fromEntries(fields.map((f) => [f.name, f]))

  const clean = (list) => list.map((it) => {
    const o = {}
    for (const f of fields) o[f.name] = it[f.name] == null ? '' : String(it[f.name])
    return o
  })
  const write = (next) => setText(key, JSON.stringify(clean(next)))
  const update = (i, patch) => write(itemsRef.current.map((x, j) => (j === i ? { ...x, ...patch } : x)))

  const [selected, setSelected] = useState(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(null) // null = no search yet
  const [searchState, setSearchState] = useState('idle') // idle | busy | error
  const [searchFor, setSearchFor] = useState(null) // null = adding a new place, or the index of a place being put on the map
  const [candidate, setCandidate] = useState(null) // { name, place, href, lat, lng, label, distance, distState }
  const [note, setNote] = useState('')
  const [busyRow, setBusyRow] = useState(null)
  const mapApi = useRef(null)
  const listRef = useRef(null)
  const searchRef = useRef(null)
  const aborter = useRef(null)
  const pendingAdd = useRef(null)

  useEffect(() => () => { if (aborter.current) aborter.current.abort() }, [])
  // show every pin when the box opens
  useEffect(() => {
    const t = setTimeout(() => { if (mapApi.current) mapApi.current.fitAll(items.map(pinOf).filter(Boolean)) }, 60)
    return () => clearTimeout(t)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const fresh = () => { if (aborter.current) aborter.current.abort(); aborter.current = new AbortController(); return aborter.current.signal }

  function scrollToRow(i) {
    setTimeout(() => {
      const row = listRef.current && listRef.current.querySelectorAll(':scope > li')[i]
      if (row) row.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }, 30)
  }
  function select(i, toggle = true) {
    const next = toggle && selected === i ? null : i
    setSelected(next)
    if (next != null) {
      const p = pinOf(itemsRef.current[next])
      if (p && mapApi.current) mapApi.current.show(p, 12)
      scrollToRow(next)
    }
  }

  async function runSearch(e) {
    if (e) e.preventDefault()
    const q = query.trim()
    if (!q || searchState === 'busy') return
    setSearchState('busy')
    setNote('')
    try {
      const found = await searchPlaces(q, fresh())
      setResults(found)
      setSearchState('idle')
    } catch (err) {
      if (err && err.name === 'AbortError') return
      setResults(null)
      setSearchState('error')
    }
  }

  // a search result or a spot on the map, waiting for "Add to Nearby"
  function propose(place) {
    setCandidate({ ...place, distance: '', distState: 'busy' })
    if (mapApi.current) mapApi.current.show(place, 14)
    const signal = fresh()
    tripFromSwan(pinOf(place), signal).then((t) => {
      setCandidate((c) => (c && c.lat === place.lat && c.lng === place.lng ? { ...c, distance: t.text, distState: t.exact ? 'ok' : 'rough' } : c))
      const pend = pendingAdd.current
      if (pend && pend.lat === place.lat && pend.lng === place.lng) {
        pendingAdd.current = null
        const i = itemsRef.current.findIndex((x) => x.lat === place.lat && x.lng === place.lng && !x.distance)
        if (i >= 0) update(i, { distance: t.text })
      }
    }).catch(() => {})
  }

  function chooseResult(r) {
    if (searchFor != null) {
      // putting an existing place on the map: only its pin changes
      const i = searchFor
      update(i, { lat: r.lat, lng: r.lng })
      setSearchFor(null)
      setResults(null)
      setQuery('')
      setSelected(i)
      if (mapApi.current) mapApi.current.show(r, 13)
      setNote(`Pin set for “${(itemsRef.current[i] && itemsRef.current[i].name) || 'the place'}”. Check “How far” is still right.`)
      scrollToRow(i)
      return
    }
    propose(r)
  }

  async function pickOnMap(at) {
    if (searchFor != null) {
      const i = searchFor
      update(i, { lat: fix6(at.lat), lng: fix6(at.lng) })
      setSearchFor(null)
      setResults(null)
      setSelected(i)
      setNote(`Pin set for “${(itemsRef.current[i] && itemsRef.current[i].name) || 'the place'}”.`)
      return
    }
    const spot = { name: 'Finding what’s here…', place: '', href: '', lat: fix6(at.lat), lng: fix6(at.lng), label: '' }
    setCandidate({ ...spot, distance: '', distState: 'busy', looking: true })
    try {
      const found = await whatsHere(at, fresh())
      propose(found)
    } catch (err) {
      if (err && err.name === 'AbortError') return
      propose({ ...spot, name: 'New place', label: 'A spot you picked on the map' })
    }
  }

  function addCandidate() {
    const c = candidate
    if (!c || itemsRef.current.length >= max) return
    const it = { name: c.name, place: c.place, distance: c.distance || '', href: c.href || '', lat: c.lat, lng: c.lng }
    if (c.distState === 'busy') pendingAdd.current = { lat: c.lat, lng: c.lng }
    const next = [...itemsRef.current, it]
    write(next)
    setCandidate(null)
    setResults(null)
    setQuery('')
    setSelected(next.length - 1)
    setNote(`Added “${c.name}” as number ${next.length}. Check its details below.`)
    scrollToRow(next.length - 1)
  }

  function findOnMap(i) {
    const it = itemsRef.current[i]
    const q = [it.name, it.place].map((s) => String(s || '').replace(/<[^>]*>/g, '').replace(/\(.*?\)/g, '').trim()).filter(Boolean).join(', ')
    setSearchFor(i)
    setCandidate(null)
    setQuery(q)
    setResults(null)
    setNote('')
    setTimeout(() => { if (searchRef.current) { searchRef.current.focus(); searchRef.current.scrollIntoView({ block: 'nearest' }) } }, 30)
  }

  async function redoDistance(i) {
    const p = pinOf(itemsRef.current[i])
    if (!p) return
    setBusyRow(i)
    try {
      const t = await tripFromSwan(p, fresh())
      const cur = itemsRef.current[i]
      if (cur && pinOf(cur) && pinOf(cur).lat === p.lat && pinOf(cur).lng === p.lng) update(i, { distance: t.text })
      setNote(t.exact ? '' : 'Couldn’t work out the road distance just now, so that’s a straight-line distance.')
    } catch { /* closed or replaced */ }
    setBusyRow(null)
  }

  const move = (i, d) => {
    const n = itemsRef.current.slice()
    const [x] = n.splice(i, 1)
    n.splice(i + d, 0, x)
    write(n)
    if (selected === i) setSelected(i + d)
    else if (selected === i + d) setSelected(i)
  }
  const remove = (i) => {
    write(itemsRef.current.filter((_, j) => j !== i))
    if (selected === i) setSelected(null)
    else if (selected != null && selected > i) setSelected(selected - 1)
    if (searchFor === i) setSearchFor(null)
  }
  const addByHand = () => {
    const next = [...itemsRef.current, { name: 'New place', place: '', distance: '', href: '', lat: '', lng: '' }]
    write(next)
    setSelected(next.length - 1)
    scrollToRow(next.length - 1)
  }
  const movePin = (i, at) => {
    update(i, { lat: fix6(at.lat), lng: fix6(at.lng) })
    setNote('Pin moved. Press “Work it out” if the distance needs updating.')
  }

  const anyBad = items.some((it) => (it.href || '').trim() && !safeLinkHref(it.href))
  const close = () => { if (!anyBad) onClose() }
  const full = items.length >= max
  const plain = (s) => String(s || '').replace(/<[^>]*>/g, '')

  return (
    <Dialog
      name="nearby"
      wide
      kicker={`Map · ${items.length} ${itemName}${items.length === 1 ? '' : 's'}`}
      title={title}
      intro="Search for a place, or tap the map, then add it. Numbered pins are the places on the page now, in order."
      onClose={close}
      closeDisabled={anyBad}
      initialFocus="#ed-nb-q"
      footer={(
        <>
          {changed && <button type="button" className="ed-btn ghost" onClick={() => { setText(key, ''); setSelected(null); setCandidate(null) }}>Back to original list</button>}
          <button type="button" className="ed-btn primary" onClick={close} disabled={anyBad}>Done</button>
        </>
      )}
    >
      <div className="ed-nb">
        <div className="ed-nb-mapcol">
          <form className="ed-nb-search" onSubmit={runSearch} role="search">
            <label className="ed-flabel" htmlFor="ed-nb-q">{searchFor != null ? `Find “${plain(items[searchFor] && items[searchFor].name) || 'this place'}” on the map` : 'Find a place to add'}</label>
            <div className="ed-nb-searchrow">
              <input
                id="ed-nb-q"
                ref={searchRef}
                type="search"
                value={query}
                maxLength={160}
                placeholder="e.g. Mary Arden’s Farm"
                autoComplete="off"
                enterKeyHint="search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className="ed-btn primary" disabled={!query.trim() || searchState === 'busy'}>{searchState === 'busy' ? 'Searching…' : 'Search'}</button>
            </div>
            {searchFor != null && (
              <p className="ed-nb-hint">Pick the right result, or tap its spot on the map. <button type="button" className="ed-linkbtn" onClick={() => { setSearchFor(null); setResults(null); setQuery('') }}>Cancel</button></p>
            )}
          </form>
          <div className="ed-nb-status" aria-live="polite">
            {searchState === 'error' && <p className="ed-error">Search isn’t working right now. Check the connection and try again, or add the place by hand.</p>}
            {results && results.length === 0 && <p className="ed-nb-hint">Nothing found for “{query.trim()}”. Try adding the town, like “Mary Arden’s Farm, Wilmcote”, or tap the spot on the map.</p>}
            {results && results.length > 0 && <span className="ed-sr">{results.length} result{results.length === 1 ? '' : 's'} found</span>}
          </div>
          {results && results.length > 0 && (
            <ol className="ed-nb-results" aria-label="Search results">
              {results.map((r, j) => (
                <li key={`${r.lat},${r.lng},${j}`}>
                  <button type="button" onClick={() => chooseResult(r)}>
                    <b>{r.name}</b>
                    <small>{r.label}</small>
                  </button>
                </li>
              ))}
            </ol>
          )}
          <NearbyMap items={items} selected={selected} candidate={candidate} onPick={pickOnMap} onSelect={select} onMovePin={movePin} focusRef={mapApi} />
          <p className="ed-nb-credit">Map, search and distances use OpenStreetMap data (© OpenStreetMap contributors), Nominatim search and OSRM routing. WS is the White Swan.</p>
          {candidate && (
            <div className="ed-nb-cand" role="group" aria-label="Place to add">
              <span className="ed-kicker">{candidate.looking ? 'Looking up this spot' : 'Add this place?'}</span>
              <b className="ed-nb-cand-name">{candidate.name}</b>
              {candidate.label && <span className="ed-nb-cand-where">{candidate.label}</span>}
              <span className="ed-nb-cand-dist">
                {candidate.distState === 'busy' ? 'Working out the distance from the White Swan…' : candidate.distance}
                {candidate.distState === 'rough' && ' (straight line; road routing wasn’t available)'}
              </span>
              {candidate.href && <span className="ed-nb-cand-web">Website: {candidate.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</span>}
              <span className="ed-nb-cand-btns">
                <button type="button" onClick={() => setCandidate(null)}>Cancel</button>
                <button type="button" className="primary" onClick={addCandidate} disabled={full || candidate.looking}>Add to Nearby</button>
              </span>
              {full && <span className="ed-error">The list is full ({max} places). Remove one first.</span>}
            </div>
          )}
        </div>

        <div className="ed-nb-listcol">
          <div className="ed-nb-listhead">
            <h3>On the page</h3>
            <span className="ed-nb-hint">Top to bottom, as visitors see it</span>
          </div>
          {note && <p className="ed-nb-note" role="status">{note}</p>}
          <ol className="ed-nb-list" ref={listRef}>
            {items.map((it, i) => {
              const open = selected === i
              const p = pinOf(it)
              const name = plain(it.name) || `New ${itemName}`
              return (
                <li key={i} className={`ed-nb-item${open ? ' open' : ''}`}>
                  <div className="ed-nb-row">
                    <button type="button" className="ed-nb-open" aria-expanded={open} aria-controls={`ed-nb-d-${i}`} onClick={() => select(i)}>
                      <span className={`ed-nb-num${p ? '' : ' nopin'}`} aria-hidden="true">{i + 1}</span>
                      <span className="ed-nb-txt">
                        <b>{name}</b>
                        <small>{[plain(it.place), it.distance].filter(Boolean).join(' · ') || 'No details yet'}</small>
                      </span>
                    </button>
                    <span className="ed-tools">
                      <button type="button" className="ed-tool" onClick={() => move(i, -1)} disabled={i === 0} aria-label={`Move ${name} up`} title="Move up">{Icon.up}</button>
                      <button type="button" className="ed-tool" onClick={() => move(i, 1)} disabled={i === items.length - 1} aria-label={`Move ${name} down`} title="Move down">{Icon.down}</button>
                      <button type="button" className="ed-tool danger" onClick={() => remove(i)} aria-label={`Remove ${name}`} title="Remove">{Icon.remove}</button>
                    </span>
                  </div>
                  {!p && (
                    <p className="ed-nb-nopin">Not on the map yet. <button type="button" className="ed-linkbtn" onClick={() => findOnMap(i)}>Find it on the map</button></p>
                  )}
                  {open && (
                    <div className="ed-nb-details" id={`ed-nb-d-${i}`}>
                      {visible.map((f) => (
                        <div key={f.name} className={f.name === 'distance' ? 'ed-nb-distrow' : undefined}>
                          <FieldInput f={{ ...fieldByName[f.name], _row: i }} value={it[f.name] || ''} onChange={(v) => update(i, { [f.name]: v })} />
                          {f.name === 'distance' && p && (
                            <button type="button" className="ed-nb-calc" onClick={() => redoDistance(i)} disabled={busyRow === i}>{busyRow === i ? 'Working…' : 'Work it out'}</button>
                          )}
                        </div>
                      ))}
                      {p && <p className="ed-nb-hint">Wrong spot? Drag pin {i + 1} on the map, or <button type="button" className="ed-linkbtn" onClick={() => findOnMap(i)}>search for it again</button>.</p>}
                    </div>
                  )}
                </li>
              )
            })}
            {!items.length && <li className="ed-none">No places yet. Search above to add one.</li>}
          </ol>
          {!full && <button type="button" className="ed-addrow ed-nb-byhand" onClick={addByHand}><span aria-hidden="true">+</span> Add a place by hand</button>}
          {anyBad && <p className="ed-error" role="alert">One of the website links isn’t allowed. Fix it before closing.</p>}
        </div>
      </div>
    </Dialog>
  )
}
