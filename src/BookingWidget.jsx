import React, { useEffect, useRef, useState } from 'react'
import { seekda, contact } from './content.js'

// Loads the same Seekda booking engine the current site uses (property S006498).
// If it can't load (blocked, offline, or the domain isn't allowed by Seekda),
// guests still get a phone number and a fallback link.
export default function BookingWidget() {
  const bar = useRef(null)
  const [state, setState] = useState('loading')

  useEffect(() => {
    const w = window
    if (!w.__KBE) {
      ;(function (t, e, n, s) {
        t['kbe-widgets'] = s
        t[s] = t[s] || new Proxy({ q: [] }, {
          get: (o, k) => (k in o ? o[k] : function (a) { t[s].q.push([k, a]) }),
        })
        const el = e.createElement(n)
        const first = e.getElementsByTagName(n)[0]
        el.id = s
        el.src = 'https://widget-bf.seekda.com/loader.js'
        el.async = 1
        first ? first.parentNode.insertBefore(el, first) : e.head.appendChild(el)
      })(w, document, 'script', '__KBE')
    }
    w.__KBE.settings({ id: seekda.widgetId, propertyCode: seekda.propertyCode })
    w.__KBE.searchbar({ id: seekda.widgetId })
    w.__KBE.rates({ id: seekda.widgetId })

    const node = bar.current
    const check = () => node && (node.childElementCount > 0 || node.shadowRoot)
    const mo = new MutationObserver(() => { if (check()) setState('ok') })
    if (node) mo.observe(node, { childList: true, subtree: true })
    const t = setTimeout(() => setState((s) => (s === 'ok' || check() ? 'ok' : 'fallback')), 10000)
    return () => { mo.disconnect(); clearTimeout(t) }
  }, [])

  return (
    <div className={`booking booking-${state}`}>
      <div className="kbe-bar" ref={bar} data-kbe-searchbar={seekda.widgetId} />
      {state === 'loading' && <p className="muted booking-wait">Loading live availability…</p>}
      {state === 'fallback' && (
        <div className="booking-fallback">
          <p>Live availability didn’t load. Call us and we’ll book you in.</p>
          <div className="btn-row">
            <a className="pill dark" href={contact.phoneHref}>Call {contact.phone}</a>
            <a className="pill ghost-dark" href={`mailto:${contact.email}?subject=Room%20booking`}>Email us</a>
          </div>
        </div>
      )}
    </div>
  )
}

// Seekda's room-by-room list with live rates. It is long, so it starts folded.
export function LiveRooms() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`live-rooms${open ? ' open' : ''}`}>
      <div className="kbe-rates" data-kbe-rates={seekda.widgetId} />
      {!open && <div className="live-fade" />}
      <button className="pill ghost-dark live-toggle" onClick={() => setOpen(!open)}>
        {open ? 'Show fewer rooms' : 'Show every room'}
      </button>
    </div>
  )
}
