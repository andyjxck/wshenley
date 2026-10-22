import React, { useRef, useState } from 'react'

// Before-and-after slider. The "after" photo is the base layer; the "before" photo sits on top
// and is clipped to the left of the handle. A native range input covers the whole picture, so it
// works with a mouse, a finger, and the keyboard (arrow keys) without extra code.
export default function BeforeAfter({ before, after, beforeAlt, afterAlt, beforeLabel = 'Then', afterLabel = 'Now', beforeFilter, width, height }) {
  const [pos, setPos] = useState(50)
  const ref = useRef(null)
  return (
    <div className="ba" ref={ref} style={{ '--pos': `${pos}%`, aspectRatio: width && height ? `${width} / ${height}` : undefined }}>
      <img className="ba-img ba-after" src={after} alt={afterAlt} loading="lazy" width={width} height={height} draggable="false" />
      <img className="ba-img ba-before" src={before} alt={beforeAlt} loading="lazy" width={width} height={height} draggable="false" style={beforeFilter ? { filter: beforeFilter } : undefined} />
      <span className="ba-label ba-label-before" aria-hidden="true">{beforeLabel}</span>
      <span className="ba-label ba-label-after" aria-hidden="true">{afterLabel}</span>
      <span className="ba-handle" aria-hidden="true"><span className="ba-knob"><svg viewBox="0 0 24 24"><path d="M9 6 3 12l6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span></span>
      <input
        className="ba-range"
        type="range"
        min="0"
        max="100"
        step="0.5"
        value={pos}
        onChange={(ev) => setPos(Number(ev.target.value))}
        aria-label={`Compare ${beforeLabel.toLowerCase()} and ${afterLabel.toLowerCase()}: slide left to see more of ${afterLabel.toLowerCase()}, right to see more of ${beforeLabel.toLowerCase()}`}
      />
    </div>
  )
}
