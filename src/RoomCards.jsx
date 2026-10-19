import React, { useState } from 'react'
import { rooms, seekda } from './content.js'

// Simple line icons. Each has a label for screen readers and a tooltip on hover.
const I = (d) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
)
const ICONS = {
  double: ['Double bed', I(<><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" /><path d="M3 15h18" /><path d="M5 10V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" /><rect x="7" y="8" width="4" height="2" rx=".5" /><rect x="13" y="8" width="4" height="2" rx=".5" /></>)],
  king: ['King size bed', I(<><path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" /><path d="M2 15h20" /><path d="M4 10V6.5h16V10" /><path d="M8 4l1.5 1.2L12 3.5l2.5 1.7L16 4" /></>)],
  single: ['Single bed', I(<><path d="M7 18v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6" /><path d="M7 15h10" /><path d="M8 10V7h8v3" /><rect x="10" y="8" width="4" height="2" rx=".5" /></>)],
  shower: ['Shower', I(<><path d="M5 21V6a3 3 0 0 1 3-3 3 3 0 0 1 3 3" /><path d="M8 9h6" /><path d="M9.5 12v.5M12 12v.5M14.5 12v.5M9.5 15v.5M12 15v.5M14.5 15v.5" /></>)],
  bath: ['Bath', I(<><path d="M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2z" /><path d="M6 12V5a2 2 0 0 1 4 0" /><path d="M7 19l-1 2M17 19l1 2" /></>)],
  tv: ['Television', I(<><rect x="3" y="5" width="18" height="12" rx="1.5" /><path d="M8 21h8M12 17v4" /></>)],
  kettle: ['Tea and coffee', I(<><path d="M6 20h11l-1-9H7l-1 9z" /><path d="M7 11a5 5 0 0 1 9 0" /><path d="M16 13h2a2 2 0 0 1 0 4h-1.5" /><path d="M10 6h3" /></>)],
  heating: ['Heating', I(<><path d="M4 20h16" /><path d="M6 20V9M10 20V9M14 20V9M18 20V9" /><path d="M5 9h14" /><path d="M8 6c0-1 1-1 1-2M12 6c0-1 1-1 1-2M16 6c0-1 1-1 1-2" /></>)],
  hairdryer: ['Hairdryer', I(<><path d="M14 7H7a3 3 0 0 0 0 6h7l5 2V5l-5 2z" /><path d="M9 13l1 7h3l-1-7" /></>)],
  towels: ['Towels', I(<><path d="M4 5h16" /><path d="M6 5v14h9V5" /><path d="M15 5v10h3V5" /><path d="M6 15h9" /></>)],
  bedding: ['Extra bedding available', I(<><path d="M4 8h16v4H4z" /><path d="M4 12h16v4H4z" /><path d="M18 4v4M16 6h4" /></>)],
  historic: ['Historic room', I(<><path d="M3 20h18" /><path d="M4 10l8-6 8 6" /><path d="M6 10v10M10 10v10M14 10v10M18 10v10" /></>)],
}

const bookUrl = (code, sleeps) =>
  `https://${seekda.propertyCode.toLowerCase()}.officialbookings.com/room/${code}?adult_room1=${sleeps}&skd-currency-code=GBP&skd-language-code=en`

function RoomCard({ room }) {
  const [flipped, setFlipped] = useState(false)
  const flip = () => setFlipped((f) => !f)
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip() }
  }
  return (
    <div className={`flip-card reveal${flipped ? ' flipped' : ''}`}>
      <div className="flip-inner">
        <div className="flip-face flip-front" role="button" tabIndex={flipped ? -1 : 0} aria-label={`${room.name}, show details`} onClick={flip} onKeyDown={onKey} aria-hidden={flipped}>
          {room.image
            ? <img src={room.image} alt={room.name} loading="lazy" />
            : <div className="flip-noimg"><span>Photo coming soon</span></div>}
          <div className="flip-name">
            <h3>{room.name}</h3>
            <span className="flip-hint">Tap for details</span>
          </div>
        </div>
        <div className="flip-face flip-back" aria-hidden={!flipped} onClick={flip}>
          <div className="flip-back-top">
            <h3>{room.name}</h3>
            <p className="flip-sleeps">Sleeps {room.sleeps}</p>
          </div>
          <p className="flip-text">{room.text}</p>
          <ul className="flip-icons">
            {room.icons.filter((k) => ICONS[k]).map((k) => (
              <li key={k} title={ICONS[k][0]} aria-label={ICONS[k][0]}>{ICONS[k][1]}</li>
            ))}
          </ul>
          <div className="flip-actions">
            <a className="pill dark" href={bookUrl(room.code, room.sleeps)} target="_blank" rel="noreferrer" tabIndex={flipped ? 0 : -1} onClick={(e) => e.stopPropagation()}>Book Room</a>
            <button className="flip-back-btn" tabIndex={flipped ? 0 : -1} onClick={(e) => { e.stopPropagation(); flip() }}>Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RoomCards() {
  return (
    <div className="flip-grid">
      {rooms.list.map((r) => <RoomCard key={r.code} room={r} />)}
    </div>
  )
}
