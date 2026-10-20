import { useEffect, useState } from 'react'
import { loadEventsFeed } from './firebase.js'

// Shared, cached fetch of the public events feed. null = still loading / unavailable.
let cache = null
let pending = null

export function useEventsFeed() {
  const [events, setEvents] = useState(cache)
  useEffect(() => {
    if (cache) return undefined
    let live = true
    pending = pending || loadEventsFeed().then((e) => { cache = e; return e })
    pending.then((e) => live && setEvents(e)).catch(() => { pending = null })
    return () => { live = false }
  }, [])
  return events
}

export function ymdLocal(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// Does a feed event happen on this date?
export function happensOn(e, date) {
  const key = ymdLocal(date)
  if (e.repeat === 'weekly') return key >= e.date && date.getDay() === e.weekday
  return e.date === key
}

export function timeLabel(e) {
  const t = (s) => {
    if (!s) return ''
    const [h, m] = s.split(':').map(Number)
    const hr = h % 12 || 12
    return m ? `${hr}:${String(m).padStart(2, '0')}${h < 12 ? 'am' : 'pm'}` : `${hr}${h < 12 ? 'am' : 'pm'}`
  }
  return e.start ? (e.end ? `${t(e.start)}–${t(e.end)}` : t(e.start)) : ''
}
