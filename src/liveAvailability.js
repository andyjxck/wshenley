import { useEffect, useRef, useState } from 'react'
import { rooms, seekda } from './content.js'

// Live room availability for the dates picked in the Seekda "Check dates" bar.
//
// How it works: the Seekda search bar is ordinary page HTML, so we watch its
// Check In / Check Out boxes and the guests line. As soon as the guest has picked
// both dates, we ask Seekda's own booking API (the same one the hotel's booking
// page at s006498.officialbookings.com uses) which rooms are free for that stay.
// Seekda allows these calls from this website (CORS), so no server or key is needed.
//
// Nothing is guessed: if a call fails, every room stays as it is and booking works
// as normal. A room only goes grey when Seekda says it has no rate for those dates,
// or when it sleeps fewer people than the guest picked.

const API = 'https://hbe-api.seekda.com'
const BAR = '.kbe-bar'

let ipPromise = null
// Seekda's offers call needs the visitor's IP address. Its own widget gets it from
// this "channels" call, which echoes it back, so we do exactly the same.
function getChannel() {
  if (!ipPromise) {
    ipPromise = fetch(`${API}/channels`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        domain: `${seekda.propertyCode.toLowerCase()}.officialbookings.com`,
        user: { userAgent: navigator.userAgent },
        source: 'widget',
      }),
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`channels ${r.status}`))))
      .then((d) => {
        const cs = d && d.channelSettings
        if (!cs || !cs.ipAddress) throw new Error('no channel')
        return cs
      })
    ipPromise.catch(() => { ipPromise = null })
  }
  return ipPromise
}

async function fetchOffers({ checkIn, checkOut, adults }, signal) {
  const cs = await getChannel()
  const r = await fetch(`${API}/offers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal,
    body: JSON.stringify({
      channelId: cs.id || 'ibe',
      propertyCode: seekda.propertyCode,
      checkIn,
      checkOut,
      occupancy: { adults, children: [] },
      promotionalCode: '',
      currency: 'GBP',
      user: { ipAddress: cs.ipAddress, userAgent: navigator.userAgent, language: 'en' },
      priceDisplayMode: cs.priceDisplayMode || 'stay',
      priceCalcMode: cs.priceCalcMode || 'asInPricelist',
      includeWaitingLists: false,
      sortOrder: cs.offersSorting || 'PriceAsc',
    }),
  })
  if (!r.ok) throw new Error(`offers ${r.status}`)
  const d = await r.json()
  if (!d || !Array.isArray(d.roomOffers)) throw new Error('bad offers')
  return d.roomOffers
}

// The bar's date boxes follow the visitor's browser: "06/11/2026" in the UK,
// "11/06/2026" in the US. The open calendar marks the chosen days with their exact
// date, so we use that first, and only read the boxes when it isn't there.
let order = null // 'dmy' or 'mdy', learnt from the page
const guessOrder = () => {
  try {
    const parts = new Intl.DateTimeFormat(navigator.language).formatToParts(new Date(2026, 10, 6))
    const types = parts.map((p) => p.type).filter((t) => t === 'day' || t === 'month')
    return types[0] === 'day' ? 'dmy' : 'mdy'
  } catch { return 'dmy' }
}
const mkIso = (y, mo, d) => {
  const iso = `${y}-${String(mo).padStart(2, '0')}-${String(d).padStart(2, '0')}`
  const t = new Date(`${iso}T12:00:00`)
  return !Number.isNaN(t.getTime()) && t.getMonth() + 1 === Number(mo) && t.getDate() === Number(d) ? iso : null
}
function parseBox(v) {
  const m = /^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})$/.exec((v || '').trim())
  if (!m) return null
  const a = Number(m[1]), b = Number(m[2]), y = m[3]
  return { dmy: mkIso(y, b, a), mdy: mkIso(y, a, b) }
}
function learn(box, iso) {
  if (!box || !iso) return
  if (box.dmy === iso && box.mdy !== iso) order = 'dmy'
  else if (box.mdy === iso && box.dmy !== iso) order = 'mdy'
}
function pick(box) {
  if (!box) return null
  if (box.dmy && !box.mdy) { order = order || 'dmy'; return box.dmy }
  if (box.mdy && !box.dmy) { order = order || 'mdy'; return box.mdy }
  return box[order || guessOrder()]
}
const dayIn = (sel) => {
  const el = document.querySelector(`td.${sel} [data-calendar-day]`)
  return el ? el.getAttribute('data-calendar-day') : null
}

function readBar() {
  const bar = document.querySelector(BAR)
  if (!bar) return null
  const inEl = bar.querySelector('input[name="startDate"]')
  const outEl = bar.querySelector('input[name="endDate"]')
  if (!inEl || !outEl) return null
  const inBox = parseBox(inEl.value)
  const outBox = parseBox(outEl.value)
  const calIn = dayIn('CalendarDay__selected_start')
  const calOut = dayIn('CalendarDay__selected_end')
  learn(inBox, calIn)
  learn(outBox, calOut)
  let checkIn = pick(inBox)
  let checkOut = pick(outBox)
  // Trust the calendar's own dates when they agree with what the boxes say.
  if (calIn && inBox && (inBox.dmy === calIn || inBox.mdy === calIn)) checkIn = calIn
  if (calOut && outBox && (outBox.dmy === calOut || outBox.mdy === calOut)) checkOut = calOut
  // While the calendar waits for the check-out click, the old check-out is still
  // showing, so don't search until the guest has finished picking.
  const picking = !!document.querySelector('[id^="bf-calendar-panel"].picking-checkout')
  const occ = (bar.querySelector('.kbe-dropdown-details') || {}).textContent || ''
  const num = (re, dflt) => { const m = re.exec(occ); return m ? Number(m[1]) : dflt }
  const roomsN = Math.max(1, num(/(\d+)\s*room/i, 1))
  const adults = num(/(\d+)\s*adult/i, 2)
  const children = num(/(\d+)\s*child/i, 0)
  return { checkIn, checkOut, picking, roomsN, adults, children }
}

const nightsBetween = (a, b) => Math.round((new Date(`${b}T12:00:00`) - new Date(`${a}T12:00:00`)) / 86400000)

// Returns { status: 'idle' | 'loading' | 'ok' | 'error', stay, byCode }
// byCode[roomCode] = { state: 'free', total } | { state: 'off', reason: 'dates' | 'size' }
// A room missing from byCode is left as normal.
// listRef (optional): ref to the rooms as currently shown (the website editor can change them).
export function useLiveAvailability(listRef) {
  const [res, setRes] = useState({ status: 'idle', stay: null, byCode: {} })
  const touched = useRef(false)
  const lastKey = useRef('')
  const seq = useRef(0)

  useEffect(() => {
    // Only react once the guest has actually used the date picker or the guests
    // box, not to the dates Seekda pre-fills on page load.
    const onUse = (e) => {
      const t = e.target
      if (t && t.closest && (t.closest('[data-calendar-day]') || t.closest(BAR) || t.closest('[id^="bf-calendar-panel"]'))) touched.current = true
    }
    document.addEventListener('click', onUse, true)
    document.addEventListener('keydown', onUse, true)

    let timer = null
    let ctrl = null
    const tick = () => {
      if (!touched.current) return
      const s = readBar()
      if (!s || s.picking || !s.checkIn || !s.checkOut) return
      const nights = nightsBetween(s.checkIn, s.checkOut)
      if (nights < 1 || nights > 60) return
      // Children count towards how many people a room must sleep. Their prices can
      // differ, so we don't show a price when children are included.
      const guests = Math.ceil((s.adults + s.children) / s.roomsN)
      const key = `${s.checkIn}|${s.checkOut}|${guests}|${s.children > 0}`
      if (key === lastKey.current) return
      lastKey.current = key
      const stay = { checkIn: s.checkIn, checkOut: s.checkOut, nights, guests, withChildren: s.children > 0, rooms: s.roomsN }
      const id = ++seq.current
      if (ctrl) ctrl.abort()
      ctrl = new AbortController()
      const myCtrl = ctrl
      const giveUp = setTimeout(() => myCtrl.abort(), 15000)
      setRes((r) => ({ status: 'loading', stay, byCode: r.byCode }))
      fetchOffers({ checkIn: s.checkIn, checkOut: s.checkOut, adults: guests }, myCtrl.signal)
        .then((offers) => {
          if (id !== seq.current) return
          const byCode = {}
          for (const room of ((listRef && listRef.current) || rooms.list)) {
            const o = offers.find((x) => x.code === room.code)
            if (o) {
              const totals = (o.rates || []).map((x) => Number(x.total)).filter((n) => Number.isFinite(n) && n > 0)
              if (totals.length) byCode[room.code] = { state: 'free', total: stay.withChildren ? null : Math.min(...totals) }
              else byCode[room.code] = { state: 'off', reason: 'dates' }
            } else if (room.sleeps < guests) {
              byCode[room.code] = { state: 'off', reason: 'size' }
            }
          }
          setRes({ status: 'ok', stay, byCode })
        })
        .catch(() => {
          if (id !== seq.current) return
          setRes({ status: 'error', stay, byCode: {} })
        })
        .finally(() => clearTimeout(giveUp))
    }
    timer = setInterval(tick, 400)
    return () => {
      clearInterval(timer)
      if (ctrl) ctrl.abort()
      document.removeEventListener('click', onUse, true)
      document.removeEventListener('keydown', onUse, true)
    }
  }, [])

  return res
}

export const money = (n) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }).format(n)

export function shortDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
}
