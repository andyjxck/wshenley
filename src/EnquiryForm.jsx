import { useState } from 'react'
import { sendEnquiry } from './firebase.js'
import { contact } from './content.js'

const OCCASIONS = ['Birthday', 'Wedding or engagement', 'Christening', 'Wake', 'Work do', 'Christmas party', 'Other']
const blank = { name: '', email: '', phone: '', occasion: 'Birthday', date: '', guests: '', message: '', website: '' }

export default function EnquiryForm() {
  const [f, setF] = useState(blank)
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const [err, setErr] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const today = new Date().toISOString().slice(0, 10)

  async function submit(e) {
    e.preventDefault()
    setErr('')
    if (f.website) { setState('sent'); return } // bot filled the hidden field
    if (f.name.trim().length < 2) return setErr('Please add your name.')
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.trim())) return setErr('Please check your email address.')
    if (!f.message.trim()) return setErr('Tell us a little about what you have in mind.')
    setState('sending')
    try {
      await sendEnquiry(f)
      setState('sent')
      setF(blank)
    } catch (e2) {
      console.error(e2)
      setState('error')
      if (e2 && (e2.code === 'invalid-argument' || e2.code === 'resource-exhausted') && e2.message) setErr(e2.message)
      else setErr(`Sorry, that didn’t send. Please try again or call us on ${contact.phone}.`)
    }
  }

  if (state === 'sent') {
    return (
      <div className="enquiry sent" role="status">
        <h3>Thanks, we’ve got it</h3>
        <p>Someone from the team will be in touch soon. If it’s urgent, call {contact.phone}.</p>
        <button type="button" className="pill dark" onClick={() => setState('idle')}>Send another</button>
      </div>
    )
  }
  return (
    <form className="enquiry" onSubmit={submit} noValidate>
      <h3>Enquire about private hire</h3>
      <div className="enq-grid">
        <label>Your name<input value={f.name} onChange={set('name')} autoComplete="name" maxLength={100} required /></label>
        <label>Email<input type="email" value={f.email} onChange={set('email')} autoComplete="email" maxLength={150} required /></label>
        <label>Phone <span className="opt">(optional)</span><input type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" maxLength={40} /></label>
        <label>Occasion
          <select value={f.occasion} onChange={set('occasion')}>
            {OCCASIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>
        <label>Date <span className="opt">(if you know it)</span><input type="date" min={today} value={f.date} onChange={set('date')} /></label>
        <label>Number of guests<input type="number" min="1" max="1000" inputMode="numeric" value={f.guests} onChange={set('guests')} /></label>
      </div>
      <label>What do you have in mind?<textarea rows="4" value={f.message} onChange={set('message')} maxLength={3000} placeholder="Food, drinks, music, timings…" required /></label>
      <label className="hp" aria-hidden="true">Leave this empty<input tabIndex="-1" autoComplete="off" value={f.website} onChange={set('website')} /></label>
      {err && <p className="enq-err" role="alert">{err}</p>}
      <div className="enq-actions">
        <button className="pill dark" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send enquiry'}</button>
        <span className="enq-or">or call <a href={contact.phoneHref}>{contact.phone}</a></span>
      </div>
      <p className="enq-small">We only use your details to reply to this enquiry.</p>
    </form>
  )
}
