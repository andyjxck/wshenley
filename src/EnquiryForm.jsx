import { useState } from 'react'
import { sendEnquiry } from './firebase.js'
import { titleCase } from './titleCase.js'
import { Edit, useTextValue, useSite, useList, ListEditButton } from './site.jsx'
import { useContact, OCCASIONS_SPEC } from './editables.js'

// Every word of the form can be changed in the website editor. Where enquiries go does not change:
// they are still sent by sendEnquiry (firebase.js) to the Staff Hub.
const blank = { name: '', email: '', phone: '', occasion: '', date: '', guests: '', message: '', website: '' }

export const ENQ_WORDS = [
  { k: 'enq.send', label: 'Send button', fallback: 'Send enquiry' },
  { k: 'enq.sending', label: 'Send button while sending', fallback: 'Sending…' },
  { k: 'enq.placeholder', label: 'Hint inside the message box', fallback: 'Food, drinks, music, timings…' },
  { k: 'enq.thanks.title', label: 'After sending: heading', fallback: 'Thanks, we’ve got it' },
  { k: 'enq.thanks.text', label: 'After sending: message (the phone number follows)', fallback: 'Someone from the team will be in touch soon. If it’s urgent, call' },
  { k: 'enq.another', label: 'After sending: button', fallback: 'Send another' },
  { k: 'enq.err.name', label: 'If the name is missing', fallback: 'Please add your name.' },
  { k: 'enq.err.email', label: 'If the email looks wrong', fallback: 'Please check your email address.' },
  { k: 'enq.err.message', label: 'If the message is empty', fallback: 'Tell us a little about what you have in mind.' },
  { k: 'enq.err.send', label: 'If it does not send (the phone number follows)', fallback: 'Sorry, that didn’t send. Please try again or call us on' },
]
const SPEC = { ...OCCASIONS_SPEC, extras: ENQ_WORDS, extrasTitle: 'Buttons and messages' }

// While editing, labels are plain boxes so clicking their words edits them instead of jumping to the field.
function Lbl({ e, children }) {
  return e ? <div className="enq-lbl">{children}</div> : <label>{children}</label>
}

export default function EnquiryForm() {
  const { editor } = useSite()
  const editing = !!(editor && editor.editing)
  const contact = useContact()
  const occ = useList('hire.occasions', OCCASIONS_SPEC.fallback, OCCASIONS_SPEC.fields)
  const occasions = occ.items.map((o) => o.text.trim()).filter(Boolean)
  const w = Object.fromEntries(ENQ_WORDS.map((x) => [x.k, useTextValue(x.k, x.fallback)])) // eslint-disable-line react-hooks/rules-of-hooks
  const [f, setF] = useState(blank)
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const [err, setErr] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const today = new Date().toISOString().slice(0, 10)
  const occasion = occasions.includes(f.occasion) ? f.occasion : (occasions[0] || 'Other')

  async function submit(e) {
    e.preventDefault()
    if (editing) return // the editor never sends enquiries
    setErr('')
    if (f.website) { setState('sent'); return } // bot filled the hidden field
    if (f.name.trim().length < 2) return setErr(w['enq.err.name'])
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.trim())) return setErr(w['enq.err.email'])
    if (!f.message.trim()) return setErr(w['enq.err.message'])
    setState('sending')
    try {
      await sendEnquiry({ ...f, occasion })
      setState('sent')
      setF(blank)
    } catch (e2) {
      console.error(e2)
      setState('error')
      if (e2 && (e2.code === 'invalid-argument' || e2.code === 'resource-exhausted') && e2.message) setErr(e2.message)
      else setErr(`${w['enq.err.send']} ${contact.phone}.`)
    }
  }

  if (state === 'sent' && !editing) {
    return (
      <div className="enquiry sent" role="status">
        <h3>{titleCase(w['enq.thanks.title'])}</h3>
        <p>{w['enq.thanks.text']} {contact.phone}.</p>
        <button type="button" className="pill dark" onClick={() => setState('idle')}>{w['enq.another']}</button>
      </div>
    )
  }
  return (
    <form className="enquiry" onSubmit={submit} noValidate>
      <Edit k="enq.title" as="h3" heading>Enquire about private hire</Edit>
      <ListEditButton spec={SPEC} label="Edit form choices, buttons and messages" />
      <div className="enq-grid">
        <Lbl e={editing}><Edit k="enq.l.name" as="span" plain>Your name</Edit><input value={f.name} onChange={set('name')} autoComplete="name" maxLength={100} required /></Lbl>
        <Lbl e={editing}><Edit k="enq.l.email" as="span" plain>Email</Edit><input type="email" value={f.email} onChange={set('email')} autoComplete="email" maxLength={150} required /></Lbl>
        <Lbl e={editing}><span><Edit k="enq.l.phone" as="span" plain>Phone</Edit> <Edit k="enq.l.phone.opt" as="span" className="opt" plain>(optional)</Edit></span><input type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" maxLength={40} /></Lbl>
        <Lbl e={editing}><Edit k="enq.l.occasion" as="span" plain>Occasion</Edit>
          <select value={occasion} onChange={set('occasion')}>
            {occasions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Lbl>
        <Lbl e={editing}><span><Edit k="enq.l.date" as="span" plain>Date</Edit> <Edit k="enq.l.date.opt" as="span" className="opt" plain>(if you know it)</Edit></span><input type="date" min={today} value={f.date} onChange={set('date')} /></Lbl>
        <Lbl e={editing}><Edit k="enq.l.guests" as="span" plain>Number of guests</Edit><input type="number" min="1" max="1000" inputMode="numeric" value={f.guests} onChange={set('guests')} /></Lbl>
      </div>
      <Lbl e={editing}><Edit k="enq.l.message" as="span" plain>What do you have in mind?</Edit><textarea rows="4" value={f.message} onChange={set('message')} maxLength={3000} placeholder={w['enq.placeholder']} required /></Lbl>
      <label className="hp" aria-hidden="true">Leave this empty<input tabIndex="-1" autoComplete="off" value={f.website} onChange={set('website')} /></label>
      {err && <p className="enq-err" role="alert">{err}</p>}
      <div className="enq-actions">
        <button className="pill dark" disabled={state === 'sending' || editing} title={editing ? 'Change these words with the button above the form' : undefined}>{state === 'sending' ? w['enq.sending'] : w['enq.send']}</button>
        <span className="enq-or"><Edit k="enq.or" as="span" plain>or call</Edit> <a href={contact.phoneHref}>{contact.phone}</a></span>
      </div>
      <Edit k="enq.small" className="enq-small" plain>We only use your details to reply to this enquiry.</Edit>
    </form>
  )
}
