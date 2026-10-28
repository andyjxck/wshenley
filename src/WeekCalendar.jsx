import React from 'react'
import { events } from './content.js'
import { useEventsFeed, happensOn, timeLabel } from './useEventsFeed.js'
import { Edit, useTextValue, useSite } from './site.jsx'

// Shows the current week, Monday to Sunday. Events come from Firestore (public/events, the
// staff app's "show on website" events). Until that loads, or if it can't, content.js is used.
const KEYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

function thisWeek(feed, today = new Date()) {
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7)) // back to Monday
  return KEYS.map((key, i) => {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    const list = feed
      ? feed.filter((e) => happensOn(e, d)).map((e) => ({ title: e.title, time: timeLabel(e), note: e.description }))
      : [
          ...events.weekly.filter((e) => e.day === key),
          ...events.oneOff.filter((e) => e.date === iso(d)),
        ]
    return { d, key, list, today: iso(d) === iso(today) }
  })
}

const fmt = (d, o) => d.toLocaleDateString('en-GB', o)

export default function WeekCalendar() {
  const feed = useEventsFeed()
  const { editor } = useSite()
  const todayWord = useTextValue('week.today', 'Today')
  const noneWord = useTextValue('week.none', 'Nothing on')
  const days = thisWeek(feed)
  const first = days[0].d, last = days[6].d
  const range = first.getMonth() === last.getMonth()
    ? `${first.getDate()} to ${fmt(last, { day: 'numeric', month: 'long' })}`
    : `${fmt(first, { day: 'numeric', month: 'short' })} to ${fmt(last, { day: 'numeric', month: 'short' })}`

  return (
    <div className="week reveal" aria-label={`What's on this week, ${range}`}>
      <div className="week-head">
        <Edit k="week.title" as="span" plain>This week</Edit>
        <span>{range}</span>
      </div>
      <ol className="week-days">
        {days.map(({ d, key, list, today }) => (
          <li key={key} className={`week-day${today ? ' is-today' : ''}${list.length ? ' has-events' : ''}`}>
            <div className="week-date">
              <b>{fmt(d, { weekday: 'short' })}</b>
              <span>{d.getDate()}</span>
              {today && (editor && editor.editing ? <Edit k="week.today" as="em" plain>Today</Edit> : <em>{todayWord}</em>)}
            </div>
            <div className="week-events">
              {list.length ? list.map((e, i) => (
                <div className="week-event" key={i}>
                  <strong>{e.title}</strong>
                  {(e.note || e.time) && <small>{[e.note, e.time].filter(Boolean).join(' · ')}</small>}
                </div>
              )) : (editor && editor.editing ? <Edit k="week.none" as="span" className="week-none" plain>Nothing on</Edit> : <span className="week-none">{noneWord}</span>)}
            </div>
          </li>
        ))}
      </ol>
      {editor && editor.editing && <p className="ed-week-note">These events come from the pub's events calendar (events set to show on the website), so change them there rather than here.</p>}
    </div>
  )
}
