// The website editor. Loaded only when someone opens the site with #admin (see EditorGate in site.jsx).
//
// Who can edit: only approved accounts. The check is done by the Firestore and Storage security rules
// (see firebase/ in this repo), not by this code: an account that isn't approved simply can't read the
// draft or write anything, and this screen then says so.
//
// How it works:
//  - Sign in with your Staff Hub email and password.
//  - The page you're on becomes editable: click any outlined heading or paragraph and type. Paragraphs
//    have a small toolbar for bold, italic, links and lists. Photo spots get an "Edit photos" button.
//  - What you see is the live preview. "Preview" hides the outlines so it looks exactly like the site.
//  - "Save draft" keeps your changes privately (only editors can see the draft). "Publish" puts the
//    draft on the live site for everyone.
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  getAuth, connectAuthEmulator, signInWithEmailAndPassword, signOut, onAuthStateChanged,
  getMultiFactorResolver, TotpMultiFactorGenerator,
} from 'firebase/auth'
import { getStorage, connectStorageEmulator, ref as sref, uploadBytes, getBlob, getMetadata } from 'firebase/storage'
import { doc, getDoc, writeBatch, collection, serverTimestamp } from 'firebase/firestore/lite'
import { app, db, EMULATORS, EMU, BUCKET } from '../firebase.js'
import { useSite, cleanContent, HOME_SECTIONS, SECTION_NAMES, safeLinkHref, parseList, parseRecord, splitLines } from '../site.jsx'
import { safeHref } from '../richText.js'
import './editor.css'

// The Nearby box has a map. It (and the map code) only downloads when someone opens it.
const NearbyDialog = React.lazy(() => import('./NearbyDialog.jsx'))
// If the map box can't load (no connection when it's opened), the plain list box is used instead.
class NearbyFallback extends React.Component {
  constructor(props) { super(props); this.state = { failed: false } }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? this.props.fallback : this.props.children }
}

const auth = getAuth(app)
const storage = getStorage(app)
if (EMULATORS) {
  connectAuthEmulator(auth, `http://127.0.0.1:${EMU.auth}`, { disableWarnings: true })
  connectStorageEmulator(storage, '127.0.0.1', EMU.storage)
}

const ON_HISTORY = document.documentElement.dataset.page === 'history'
const BLANK = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
const publicUrl = (path) => EMULATORS
  ? `http://127.0.0.1:${EMU.storage}/v0/b/${BUCKET}/o/${encodeURIComponent(path)}?alt=media`
  : `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${encodeURIComponent(path)}?alt=media`
const randomName = () => {
  const a = new Uint8Array(12)
  crypto.getRandomValues(a)
  return `${Array.from(a, (b) => b.toString(16).padStart(2, '0')).join('')}.jpg`
}
const empty = () => ({ text: {}, photos: {}, order: null })
// Firestore refuses undefined values ("Unsupported field value: undefined"). After a publish, photo entries read back
// through cleanContent() can carry url/src/path = undefined, which used to stop Save draft working. Drop them here.
const forStore = (c) => JSON.parse(JSON.stringify({ text: c.text || {}, photos: c.photos || {}, order: c.order || HOME_SECTIONS }))
const same = (a, b) => JSON.stringify(forStore(a)) === JSON.stringify(forStore(b))

// Photos are made a sensible size in the browser before upload (longest side 2400px, JPEG).
async function shrink(file) {
  if (!/^image\/(jpeg|png|webp)$/.test(file.type)) throw new Error('Please choose a JPEG, PNG or WebP photo.')
  const bmp = await createImageBitmap(file)
  const scale = Math.min(1, 2400 / Math.max(bmp.width, bmp.height))
  const w = Math.round(bmp.width * scale)
  const h = Math.round(bmp.height * scale)
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  const g = c.getContext('2d')
  g.fillStyle = '#fff'; g.fillRect(0, 0, w, h)
  g.drawImage(bmp, 0, 0, w, h)
  const blob = await new Promise((res) => c.toBlob(res, 'image/jpeg', 0.86))
  if (!blob) throw new Error('That photo couldn’t be read.')
  if (blob.size > 8 * 1024 * 1024) throw new Error('That photo is too large even after resizing.')
  return blob
}

const errText = (e) => {
  const c = (e && e.code) || ''
  if (c.includes('invalid-credential') || c.includes('wrong-password') || c.includes('user-not-found') || c.includes('invalid-email')) return 'That email and password don’t match an account.'
  if (c.includes('too-many-requests')) return 'Too many attempts. Wait a few minutes and try again.'
  if (c.includes('network')) return 'No connection. Check the internet and try again.'
  if (c.includes('invalid-verification-code')) return 'That code isn’t right. Try the latest code from your authenticator app.'
  if (c.includes('permission-denied') || c.includes('unauthorized')) return 'This account isn’t allowed to do that.'
  return (e && e.message) || 'Something went wrong.'
}

export default function Editor({ onClose }) {
  const { published, setEditor } = useSite()
  const [user, setUser] = useState(undefined)
  const [status, setStatus] = useState('starting') // starting | signin | checking | denied | ready
  const [draft, setDraft] = useState(null)
  const [saved, setSaved] = useState(null) // the last saved draft
  const [lastPublished, setLastPublished] = useState(null)
  const [editing, setEditing] = useState(true)
  const [revision, setRevision] = useState(0)
  const [busy, setBusy] = useState('')
  const [note, setNote] = useState('')
  const [dialog, setDialog] = useState(null) // { type: 'photos' | 'sections' | 'publish' | 'discard' }
  const [field, setField] = useState(null) // the focused editable box
  const [blobs, setBlobs] = useState({})
  const loading = useRef(new Set())
  const draftRef = useRef(draft)
  draftRef.current = draft

  useEffect(() => onAuthStateChanged(auth, (u) => setUser(u)), [])

  // Signed in: check this account may edit by reading the private draft. The security rules decide.
  useEffect(() => {
    if (user === undefined) return
    if (!user) { setStatus('signin'); setDraft(null); return }
    let live = true
    setStatus('checking')
    ;(async () => {
      try {
        const [d, p] = await Promise.all([
          getDoc(doc(db, 'siteContent', 'draft')),
          getDoc(doc(db, 'siteContent', 'published')),
        ])
        if (!live) return
        const pub = cleanContent(p.exists() ? p.data() : null)
        const dr = d.exists() ? cleanContent(d.data()) : pub
        setLastPublished(pub)
        setSaved(dr)
        setDraft(dr)
        setRevision((r) => r + 1)
        setStatus('ready')
      } catch (e) {
        if (!live) return
        setStatus((e && e.code === 'permission-denied') ? 'denied' : 'signin')
        if (!(e && e.code === 'permission-denied')) setNote(errText(e))
      }
    })()
    return () => { live = false }
  }, [user])

  const dirty = !!(draft && saved && !same(draft, saved))
  const unpublished = !!(draft && lastPublished && !same(draft, lastPublished))

  useEffect(() => {
    const warn = (e) => { if (dirty) { e.preventDefault(); e.returnValue = '' } }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [dirty])

  useEffect(() => {
    document.body.classList.toggle('ws-editor-on', status === 'ready')
    document.body.classList.toggle('ws-editing', status === 'ready' && editing)
    return () => { document.body.classList.remove('ws-editor-on', 'ws-editing') }
  }, [status, editing])

  const setText = useCallback((k, v) => {
    setDraft((d) => {
      if (!d) return d
      const text = { ...d.text }
      if (v === '' || v == null) delete text[k]; else text[k] = v
      return { ...d, text }
    })
  }, [])

  const setPhotos = useCallback((k, list) => {
    setDraft((d) => {
      const photos = { ...d.photos }
      if (!list) delete photos[k]; else photos[k] = list
      return { ...d, photos }
    })
  }, [])

  // Draft uploads are private, so they're shown from a downloaded copy, not a public link.
  const photoUrl = useCallback((path) => {
    if (blobs[path]) return blobs[path]
    if (!loading.current.has(path)) {
      loading.current.add(path)
      getBlob(sref(storage, path))
        .then((b) => setBlobs((m) => ({ ...m, [path]: URL.createObjectURL(b) })))
        .catch(() => { loading.current.delete(path) })
    }
    return BLANK
  }, [blobs])

  const openPhotos = useCallback((k, fallback, opts) => setDialog({ type: 'photos', k, fallback, opts }), [])
  const openLink = useCallback((spec) => { setField(null); setDialog({ type: 'link', ...spec }) }, [])
  const openList = useCallback((spec) => { setField(null); setDialog({ type: 'list', spec }) }, [])
  // Closing a box that changed words shown on the page refreshes the editable boxes from the draft.
  const closeDialog = useCallback(() => { setDialog(null); setRevision((r) => r + 1) }, [])

  // Keep the page's own content clear of the editor bar (it is taller on phones, where it wraps).
  useEffect(() => {
    if (status !== 'ready') return undefined
    const bar = document.querySelector('.ed-bar')
    if (!bar || typeof ResizeObserver === 'undefined') return undefined
    const ro = new ResizeObserver(() => document.documentElement.style.setProperty('--ed-bar-h', `${bar.offsetHeight}px`))
    ro.observe(bar)
    return () => { ro.disconnect(); document.documentElement.style.removeProperty('--ed-bar-h') }
  }, [status])

  // While editing, links and buttons on the page don't go anywhere and forms don't send, so clicking
  // into words inside a link or a form just edits them.
  useEffect(() => {
    if (status !== 'ready' || !editing) return undefined
    const inEditor = (t) => t && t.closest && t.closest('.ed-bar, .ed-modal, .ed-toolbar, .ed-reset')
    const onClick = (e) => {
      const t = e.target
      if (inEditor(t)) return
      if (t && t.closest && t.closest('a[href]')) e.preventDefault()
    }
    const onSubmit = (e) => { if (!inEditor(e.target)) e.preventDefault() }
    document.addEventListener('click', onClick, true)
    document.addEventListener('submit', onSubmit, true)
    return () => { document.removeEventListener('click', onClick, true); document.removeEventListener('submit', onSubmit, true) }
  }, [status, editing])
  const onFocusField = useCallback((el, info) => setField({ el, ...info }), [])
  const onBlurField = useCallback(() => setTimeout(() => {
    if (!document.activeElement || !document.activeElement.closest('.ed-field, .ed-toolbar')) setField(null)
  }, 150), [])

  const ctx = useMemo(() => (status === 'ready' && draft ? {
    draft, editing, revision, setText, photoUrl, openPhotos, openLink, openList, onFocusField, onBlurField,
  } : null), [status, draft, editing, revision, setText, photoUrl, openPhotos, openLink, openList, onFocusField, onBlurField])
  useEffect(() => { setEditor(ctx) }, [ctx, setEditor])
  useEffect(() => () => setEditor(null), [setEditor])

  const flash = (t) => { setNote(t); setTimeout(() => setNote((n) => (n === t ? '' : n)), 5000) }

  const stamp = () => ({ updatedAt: serverTimestamp(), updatedBy: auth.currentUser.uid, updatedByName: (auth.currentUser.email || '').slice(0, 120) })

  async function saveDraft() {
    setBusy('Saving draft…')
    try {
      const d = forStore(draftRef.current)
      const b = writeBatch(db)
      b.set(doc(db, 'siteContent', 'draft'), { ...d, ...stamp() })
      await b.commit()
      setSaved(cleanContent(d))
      flash('Draft saved. Only editors can see it.')
    } catch (e) { flash(`Couldn’t save: ${errText(e)}`) }
    setBusy('')
  }

  async function publish() {
    setDialog(null)
    setBusy('Publishing…')
    try {
      // 1. Copy any new photos from the private draft folder to the public one.
      const cur = draftRef.current
      const photos = {}
      for (const [k, list] of Object.entries(cur.photos)) {
        photos[k] = []
        for (const p of list) {
          if (p.path && p.path.startsWith('site-draft/')) {
            const name = p.path.slice('site-draft/'.length)
            const pubRef = sref(storage, `site/${name}`)
            let exists = false
            try { await getMetadata(pubRef); exists = true } catch { /* not copied yet */ }
            if (!exists) {
              const blob = await getBlob(sref(storage, p.path))
              await uploadBytes(pubRef, blob, { contentType: 'image/jpeg', cacheControl: 'public, max-age=31536000, immutable' })
            }
            photos[k].push({ url: publicUrl(`site/${name}`), alt: p.alt || '', credit: p.credit || '', creditHref: p.creditHref || '' })
          } else {
            const { path, ...rest } = p // eslint-disable-line no-unused-vars
            photos[k].push({ ...(p.url ? { url: p.url } : { src: p.src || '' }), alt: rest.alt || '', credit: rest.credit || '', creditHref: rest.creditHref || '' })
          }
        }
      }
      // 2. Publish, keep the draft in step, and keep a copy in the history.
      const out = forStore({ ...cur, photos })
      const b = writeBatch(db)
      b.set(doc(db, 'siteContent', 'published'), { ...out, ...stamp() })
      b.set(doc(db, 'siteContent', 'draft'), { ...out, ...stamp() })
      b.set(doc(collection(db, 'siteContentHistory')), { ...out, ...stamp() })
      await b.commit()
      const c = cleanContent(out)
      setDraft(c); setSaved(c); setLastPublished(c)
      try { localStorage.setItem('ws-site-published-v1', JSON.stringify(c)) } catch { /* */ }
      flash('Published. The live site now shows these changes.')
    } catch (e) { flash(`Couldn’t publish: ${errText(e)}`) }
    setBusy('')
  }

  function discard() {
    setDialog(null)
    setDraft(saved)
    setRevision((r) => r + 1)
    flash('Unsaved changes discarded.')
  }

  function close() {
    if (dirty && !window.confirm('You have unsaved changes. Close the editor and lose them?')) return
    setEditor(null)
    onClose()
  }

  if (status === 'starting') return null
  if (status === 'signin' || status === 'checking' || status === 'denied') {
    return <SignIn status={status} user={user} note={note} onClose={close} />
  }

  const changes = draft ? countChanges(draft, lastPublished || empty()) : 0
  return (
    <>
      {editing && field && field.el && field.el.isConnected && !field.heading && <TextToolbar field={field} />}
      {editing && field && field.el && field.el.isConnected && <ResetField field={field} draft={draft} onReset={(k) => { setText(k, ''); setRevision((r) => r + 1); setField(null) }} />}
      <div className="ed-bar" role="region" aria-label="Website editor">
        <div className="ed-bar-state">
          <b>Website editor</b>
          <span aria-live="polite">
            {busy || note || (dirty ? 'Unsaved changes' : unpublished ? 'Draft saved, not published yet' : 'Up to date with the live site')}
          </span>
        </div>
        <div className="ed-bar-actions">
          <button type="button" className={editing ? 'on' : ''} aria-pressed={editing} onClick={() => setEditing(true)}>Edit</button>
          <button type="button" className={!editing ? 'on' : ''} aria-pressed={!editing} onClick={() => { setEditing(false); setField(null) }}>Preview</button>
          {!ON_HISTORY && <button type="button" onClick={() => setDialog({ type: 'sections' })}>Sections</button>}
          <button type="button" onClick={saveDraft} disabled={!!busy || !dirty}>Save draft</button>
          <button type="button" className="primary" onClick={() => setDialog({ type: 'publish' })} disabled={!!busy || !unpublished}>Publish</button>
          <button type="button" onClick={() => setDialog({ type: 'discard' })} disabled={!!busy || !dirty}>Discard</button>
          <button type="button" onClick={async () => { if (dirty && !window.confirm('Sign out and lose unsaved changes?')) return; await signOut(auth) }}>Sign out</button>
          <button type="button" onClick={close} aria-label="Close the editor">Close</button>
        </div>
      </div>
      {dialog && dialog.type === 'photos' && (
        <PhotoDialog
          k={dialog.k}
          fallback={dialog.fallback}
          credits={dialog.opts && dialog.opts.credits}
          list={draft.photos[dialog.k]}
          photoUrl={photoUrl}
          onChange={(list) => setPhotos(dialog.k, list)}
          onClose={() => setDialog(null)}
          addBlob={(path, url) => setBlobs((m) => ({ ...m, [path]: url }))}
        />
      )}
      {dialog && dialog.type === 'link' && (
        <LinkDialog spec={dialog} text={draft.text} setText={setText} onClose={closeDialog} />
      )}
      {dialog && dialog.type === 'list' && dialog.spec.kind === 'nearby' && (
        <NearbyFallback fallback={<ListDialog spec={dialog.spec} text={draft.text} setText={setText} onClose={closeDialog} />}>
          <React.Suspense fallback={<div className="ed-modal" role="status"><div className="ed-card"><p>Opening the map…</p></div></div>}>
            <NearbyDialog spec={dialog.spec} text={draft.text} setText={setText} onClose={closeDialog} />
          </React.Suspense>
        </NearbyFallback>
      )}
      {dialog && dialog.type === 'list' && dialog.spec.kind !== 'nearby' && (
        <ListDialog spec={dialog.spec} text={draft.text} setText={setText} onClose={closeDialog} />
      )}
      {dialog && dialog.type === 'sections' && (
        <SectionsDialog order={draft.order || HOME_SECTIONS} onChange={(order) => setDraft((d) => ({ ...d, order }))} onClose={() => setDialog(null)} />
      )}
      {dialog && dialog.type === 'publish' && (
        <Confirm
          title="Publish to the live website?"
          body={`Everyone visiting the site will see this draft (${changes} change${changes === 1 ? '' : 's'} from what’s live now).${dirty ? ' Your unsaved changes are included.' : ''}`}
          yes="Publish"
          onYes={publish}
          onNo={() => setDialog(null)}
        />
      )}
      {dialog && dialog.type === 'discard' && (
        <Confirm title="Discard unsaved changes?" body="The page goes back to your last saved draft." yes="Discard" onYes={discard} onNo={() => setDialog(null)} />
      )}
    </>
  )
}

function countChanges(a, b) {
  let n = 0
  const keys = (x, y) => new Set([...Object.keys(x || {}), ...Object.keys(y || {})])
  for (const k of keys(a.text, b.text)) if ((a.text[k] || '') !== (b.text[k] || '')) n++
  for (const k of keys(a.photos, b.photos)) if (JSON.stringify(a.photos[k] || null) !== JSON.stringify(b.photos[k] || null)) n++
  if (JSON.stringify(a.order || HOME_SECTIONS) !== JSON.stringify(b.order || HOME_SECTIONS)) n++
  return n
}

// ------------------------------------------------------------------ sign in
function SignIn({ status, user, note, onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [resolver, setResolver] = useState(null)
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setErr(''); setBusy(true)
    try {
      if (resolver) {
        const hint = resolver.hints.find((h) => h.factorId === TotpMultiFactorGenerator.FACTOR_ID)
        const assertion = TotpMultiFactorGenerator.assertionForSignIn(hint.uid, code.trim())
        await resolver.resolveSignIn(assertion)
      } else {
        await signInWithEmailAndPassword(auth, email.trim(), password)
      }
    } catch (x) {
      if (x && x.code === 'auth/multi-factor-auth-required') {
        const r = getMultiFactorResolver(auth, x)
        if (r.hints.some((h) => h.factorId === TotpMultiFactorGenerator.FACTOR_ID)) setResolver(r)
        else setErr('This account uses a sign-in check the editor doesn’t support yet (only authenticator-app codes work here).')
      } else setErr(errText(x))
    }
    setBusy(false)
  }

  return (
    <div className="ed-modal" role="dialog" aria-modal="true" aria-labelledby="ed-signin-title">
      <div className="ed-card">
        <h2 id="ed-signin-title">Website editor</h2>
        {status === 'checking' && <p>Checking your access…</p>}
        {status === 'denied' && (
          <>
            <p>{user && user.email ? `${user.email} isn’t` : 'This account isn’t'} approved to edit the website. Ask the owner to add it.</p>
            <div className="ed-row">
              <button type="button" onClick={() => signOut(auth)}>Use another account</button>
              <button type="button" onClick={onClose}>Close</button>
            </div>
          </>
        )}
        {status === 'signin' && (
          <form onSubmit={submit}>
            <p>Sign in to edit this website.</p>
            {!resolver ? (
              <>
                <label>Email<input type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
                <label>Password<input type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
              </>
            ) : (
              <label>Code from your authenticator app<input inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} value={code} onChange={(e) => setCode(e.target.value)} required autoFocus /></label>
            )}
            {(err || note) && <p className="ed-error" role="alert">{err || note}</p>}
            <div className="ed-row">
              <button type="button" onClick={onClose}>Close</button>
              <button type="submit" className="primary" disabled={busy}>{busy ? 'Signing in…' : resolver ? 'Verify' : 'Sign in'}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

// ------------------------------------------------------------------ text toolbar
function usePos(el) {
  const [r, setR] = useState(() => el.getBoundingClientRect())
  useEffect(() => {
    const on = () => setR(el.getBoundingClientRect())
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    const t = setInterval(on, 400)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); clearInterval(t) }
  }, [el])
  return r
}

function TextToolbar({ field }) {
  const r = usePos(field.el)
  const top = Math.max(8, r.top - 46)
  const left = Math.min(Math.max(8, r.left), window.innerWidth - 330)
  const run = (cmd, val) => {
    field.el.focus()
    document.execCommand(cmd, false, val)
    field.el.dispatchEvent(new Event('input', { bubbles: true }))
  }
  const link = () => {
    const url = window.prompt('Link address (https://…, mailto:… or tel:…)', 'https://')
    if (url == null) return
    const safe = safeHref(url)
    if (!safe) { window.alert('That link isn’t allowed. Use an address starting https://, mailto: or tel:.'); return }
    run('createLink', safe)
  }
  const btn = (label, title, fn) => (
    <button type="button" title={title} aria-label={title} onMouseDown={(e) => e.preventDefault()} onClick={fn}>{label}</button>
  )
  return (
    <div className="ed-toolbar" style={{ top, left }} role="toolbar" aria-label="Text formatting">
      {btn(<b>B</b>, 'Bold', () => run('bold'))}
      {btn(<i>I</i>, 'Italic', () => run('italic'))}
      {btn('Link', 'Add a link', link)}
      {btn('Unlink', 'Remove link', () => run('unlink'))}
      {btn('• List', 'Bulleted list', () => run('insertUnorderedList'))}
      {btn('1. List', 'Numbered list', () => run('insertOrderedList'))}
      {btn('Clear', 'Remove formatting', () => run('removeFormat'))}
    </div>
  )
}

// "Back to original" for the box being edited, when it has been changed.
function ResetField({ field, draft, onReset }) {
  const r = usePos(field.el)
  const k = field.el.dataset.editKey
  if (!k || draft.text[k] == null) return null
  return (
    <button
      type="button"
      className="ed-reset"
      style={{ top: Math.max(8, r.top - (field.heading ? 40 : 86)), left: Math.min(Math.max(8, r.left), window.innerWidth - 170) }}
      onMouseDown={(e) => e.preventDefault()}
      onClick={() => onReset(k)}
    >
      Back to original
    </button>
  )
}

// ------------------------------------------------------------------ dialog shell
// Every editor box shares this frame: a heading band, a body that scrolls on its own, and a footer that
// always stays in reach. Focus moves into the box when it opens, Tab stays inside it, Escape closes it,
// and focus goes back to whatever opened it.
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export const Icon = {
  close: <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" /></svg>,
  up: <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 15V5M5 9.5L10 4.5l5 5" /></svg>,
  down: <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 5v10M5 10.5l5 5 5-5" /></svg>,
  remove: <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 6h12M8 6V4.5h4V6M6 6l.8 9.5h6.4L14 6" /></svg>,
  add: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" /><circle cx="9" cy="10" r="1.6" /><path d="M21 15.5l-5-4.5-7.5 7" /><path d="M18 2v5M15.5 4.5h5" /></svg>,
  arrow: <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>,
}

export function Dialog({ name, kicker, title, intro, wide, onClose, closeDisabled, footer, initialFocus, children }) {
  const cardRef = useRef(null)
  const latest = useRef({ onClose, closeDisabled })
  latest.current = { onClose, closeDisabled }
  // Escape and Tab are watched on the whole page, so they still work when the button that had focus has just
  // gone away (for example “Back to original” hides itself once pressed).
  useEffect(() => {
    const onKey = (e) => {
      const card = cardRef.current
      if (!card) return
      if (e.key === 'Escape') {
        e.preventDefault()
        if (!latest.current.closeDisabled) latest.current.onClose()
        return
      }
      if (e.key !== 'Tab') return
      const all = Array.from(card.querySelectorAll(FOCUSABLE)).filter((el) => el.offsetParent !== null || el.type === 'file')
      if (!all.length) { e.preventDefault(); card.focus(); return }
      const first = all[0]
      const last = all[all.length - 1]
      const at = document.activeElement
      if (!card.contains(at)) { e.preventDefault(); (e.shiftKey ? last : first).focus() }
      else if (e.shiftKey && (at === first || at === card)) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && at === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  useEffect(() => {
    const opener = document.activeElement
    const card = cardRef.current
    // On a computer the first box gets the cursor straight away; on a phone that would throw the keyboard
    // over the box, so the box itself takes focus instead.
    const fine = typeof matchMedia !== 'undefined' && matchMedia('(pointer: fine)').matches
    const target = (initialFocus && fine && card.querySelector(initialFocus)) || card
    target.focus({ preventScroll: true })
    document.documentElement.classList.add('ed-modal-open')
    return () => {
      document.documentElement.classList.remove('ed-modal-open')
      if (opener && opener.isConnected && opener.focus && !(opener.closest && opener.closest('.ed-field'))) opener.focus({ preventScroll: true })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="ed-modal" role="dialog" aria-modal="true" aria-labelledby={`ed-${name}-title`} aria-describedby={intro ? `ed-${name}-intro` : undefined}>
      <div className={`ed-card ed-dialog ed-dialog-${name}${wide ? ' wide' : ''}`} ref={cardRef} tabIndex={-1}>
        <header className="ed-dhead">
          <div className="ed-dhead-text">
            {kicker && <span className="ed-kicker">{kicker}</span>}
            <h2 id={`ed-${name}-title`}>{title}</h2>
            {intro && <p className="ed-intro" id={`ed-${name}-intro`}>{intro}</p>}
          </div>
          <button type="button" className="ed-x" onClick={onClose} disabled={closeDisabled} aria-label="Close" title={closeDisabled ? 'Fix the link first' : 'Close'}>{Icon.close}</button>
        </header>
        <div className="ed-dbody">{children}</div>
        <footer className="ed-dfoot">{footer}</footer>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------ photos
const PHOTO_MAX = 12
const photoKind = (p) => (p.path ? 'New upload' : p.url ? 'Uploaded' : 'Original')

function PhotoDialog({ k, fallback, credits, list, photoUrl, onChange, onClose, addBlob }) {
  const custom = Array.isArray(list) && list.length > 0
  const items = custom ? list : fallback.map((p) => ({ src: p.src, alt: p.alt || '', credit: '', creditHref: '' }))
  const [err, setErr] = useState('')
  const [up, setUp] = useState(0)
  const [over, setOver] = useState(false)
  const fileRef = useRef(null)
  const set = (next) => onChange(next.length ? next : null)
  const edit = (i, patch) => set(items.map((p, j) => (j === i ? { ...p, ...patch } : p)))
  const move = (i, d) => { const n = [...items]; const [x] = n.splice(i, 1); n.splice(i + d, 0, x); set(n) }
  const remove = (i) => set(items.filter((_, j) => j !== i))

  async function add(files) {
    setErr('')
    const added = []
    for (const f of Array.from(files || [])) {
      setUp((n) => n + 1)
      try {
        const blob = await shrink(f)
        const path = `site-draft/${randomName()}`
        await uploadBytes(sref(storage, path), blob, { contentType: 'image/jpeg' })
        addBlob(path, URL.createObjectURL(blob))
        added.push({ path, alt: '', credit: '', creditHref: '' })
      } catch (e) { setErr(e.code ? errText(e) : e.message) }
      setUp((n) => n - 1)
    }
    if (added.length) set([...items, ...added].slice(0, 12))
    if (fileRef.current) fileRef.current.value = ''
  }

  const srcOf = (p) => (p.path ? photoUrl(p.path) : p.url || p.src)
  const full = items.length >= PHOTO_MAX
  const n = items.length
  const kicker = n > 1 ? `Slideshow · ${n} photos` : n === 1 ? 'Single photo' : 'No photos yet'
  const drop = {
    onDragOver: (e) => { if (!up && !full) { e.preventDefault(); setOver(true) } },
    onDragLeave: () => setOver(false),
    onDrop: (e) => { e.preventDefault(); setOver(false); if (!up && !full) add(e.dataTransfer.files) },
  }
  return (
    <Dialog
      name="photos"
      wide
      kicker={kicker}
      title="Photos"
      intro="One photo shows on its own. Two or more become a slideshow that changes every 10 seconds, in the order below."
      onClose={onClose}
      footer={(
        <>
          {custom && <button type="button" className="ed-btn ghost" onClick={() => onChange(null)}>Use the original photo{fallback.length === 1 ? '' : 's'}</button>}
          <button type="button" className="ed-btn primary" onClick={onClose}>Done</button>
        </>
      )}
    >
      <ol className="ed-photos">
        {items.map((p, i) => (
          <li className="ed-photo" key={`${p.path || p.url || p.src}-${i}`}>
            <figure className="ed-photo-fig">
              <img src={srcOf(p)} alt="" />
              <span className="ed-photo-num" aria-hidden="true">{i + 1}</span>
            </figure>
            <div className="ed-photo-main">
              <div className="ed-photo-head">
                <span className="ed-photo-name">
                  <b>Photo {i + 1}</b>
                  <span className={`ed-tag${p.path ? ' new' : ''}`}>{i === 0 && n > 1 ? 'Shown first · ' : ''}{photoKind(p)}</span>
                </span>
                <span className="ed-tools" role="group" aria-label={`Photo ${i + 1}`}>
                  <button type="button" className="ed-tool" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Move earlier" title="Move earlier">{Icon.up}</button>
                  <button type="button" className="ed-tool" onClick={() => move(i, 1)} disabled={i === n - 1} aria-label="Move later" title="Move later">{Icon.down}</button>
                  <button type="button" className="ed-tool danger" onClick={() => remove(i)} aria-label="Remove photo" title="Remove photo">{Icon.remove}<span>Remove</span></button>
                </span>
              </div>
              <label className="ed-fl">
                <span className="ed-fl-name">Description <em>read out by screen readers</em></span>
                <input value={p.alt || ''} maxLength={300} onChange={(e) => edit(i, { alt: e.target.value })} placeholder="What the photo shows, e.g. The front of the inn on the High Street" />
              </label>
              {credits && (
                <div className="ed-fl-pair">
                  <label className="ed-fl">
                    <span className="ed-fl-name">Credit</span>
                    <input value={p.credit || ''} maxLength={300} onChange={(e) => edit(i, { credit: e.target.value })} placeholder="Photographer, source, licence" />
                  </label>
                  <label className="ed-fl">
                    <span className="ed-fl-name">Credit link <em>optional</em></span>
                    <input value={p.creditHref || ''} maxLength={500} onChange={(e) => edit(i, { creditHref: e.target.value })} placeholder="https://…" inputMode="url" autoCapitalize="off" spellCheck="false" />
                  </label>
                </div>
              )}
            </div>
          </li>
        ))}
        {!n && <li className="ed-none">No photos here. Add one below, or use the original.</li>}
      </ol>
      <label className={`ed-drop${over ? ' over' : ''}${up || full ? ' off' : ''}`} {...drop}>
        <span className="ed-drop-icon">{up ? <span className="ed-spin" aria-hidden="true" /> : Icon.add}</span>
        <span className="ed-drop-text">
          <b>{up ? 'Uploading…' : full ? `${PHOTO_MAX} photos is the most for one spot` : n ? 'Add more photos' : 'Add photos'}</b>
          <span>{full ? 'Remove one to add another.' : 'Choose from your device or drag them here. JPEG, PNG or WebP.'}</span>
        </span>
        <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={(e) => add(e.target.files)} disabled={!!up || full} aria-label="Add photos" />
      </label>
      <div aria-live="polite" className="ed-live">
        {err && <p className="ed-error" role="alert">{err}</p>}
      </div>
      {credits && custom && <p className="ed-note">Only use photos you have permission to use, and give the credit the licence asks for.</p>}
    </Dialog>
  )
}

// ------------------------------------------------------------------ section order
function SectionsDialog({ order, onChange, onClose }) {
  const move = (i, d) => { const n = [...order]; const [x] = n.splice(i, 1); n.splice(i + d, 0, x); onChange(n) }
  return (
    <Dialog
      name="sections"
      kicker="Homepage"
      title="Section order"
      intro="The welcome photo and This week always come first. Change the order of the rest."
      onClose={onClose}
      footer={(
        <>
          <button type="button" className="ed-btn ghost" onClick={() => onChange(HOME_SECTIONS)}>Original order</button>
          <button type="button" className="ed-btn primary" onClick={onClose}>Done</button>
        </>
      )}
    >
      <ol className="ed-sections">
        {order.map((id, i) => (
          <li key={id}>
            <span className="ed-sec-num" aria-hidden="true">{i + 1}</span>
            <span className="ed-sec-name">{SECTION_NAMES[id]}</span>
            <span className="ed-tools">
              <button type="button" className="ed-tool" onClick={() => move(i, -1)} disabled={i === 0} aria-label={`Move ${SECTION_NAMES[id]} up`} title="Move up">{Icon.up}</button>
              <button type="button" className="ed-tool" onClick={() => move(i, 1)} disabled={i === order.length - 1} aria-label={`Move ${SECTION_NAMES[id]} down`} title="Move down">{Icon.down}</button>
            </span>
          </li>
        ))}
      </ol>
    </Dialog>
  )
}

// ------------------------------------------------------------------ links and buttons
const PAGE_PARTS = [
  ['#book', 'Book a room'], ['#stay', 'Stay'], ['#eat', 'Eat & drink'], ['#whats-on', 'What’s on'],
  ['#hire', 'Private hire'], ['#visit', 'Find us'], ['#nearby', 'Nearby'],
]

// Where a link goes, in words.
function describeHref(h) {
  const v = String(h || '').trim()
  if (!v) return ''
  const part = PAGE_PARTS.find(([id]) => v === id || v === `../${id}`)
  if (part) return `Jumps to ${part[1]} on the homepage`
  if (v.startsWith('#')) return `Jumps to ${v} on this page`
  if (/^mailto:/i.test(v)) return `Starts an email to ${v.slice(7).split('?')[0] || '…'}`
  if (/^tel:/i.test(v)) return `Rings ${v.slice(4) || '…'}`
  if (/^https?:\/\//i.test(v)) {
    try { return `Opens ${new URL(v).hostname.replace(/^www\./, '')} in a new tab` } catch { return 'Opens another website' }
  }
  return 'Opens another page of this website'
}

function LinkDialog({ spec, text, setText, onClose }) {
  const { k, label, href } = spec
  const curLabel = text[k] != null ? text[k] : ''
  const curHref = text[`${k}.href`] != null ? text[`${k}.href`] : ''
  const bad = curHref.trim() !== '' && !safeLinkHref(curHref)
  const changed = text[k] != null || text[`${k}.href`] != null
  const close = () => { if (!bad) onClose() }
  const showLabel = curLabel.trim() || label || 'Button'
  const dest = curHref.trim() || href
  return (
    <Dialog
      name="link"
      kicker="Button or link"
      title="Words and destination"
      onClose={close}
      closeDisabled={bad}
      initialFocus="#ed-link-words"
      footer={(
        <>
          {changed && <button type="button" className="ed-btn ghost" onClick={() => { setText(k, ''); setText(`${k}.href`, '') }}>Back to original</button>}
          <button type="button" className="ed-btn primary" onClick={close} disabled={bad}>Done</button>
        </>
      )}
    >
      <div className="ed-linkprev" aria-hidden="true">
        <span className="ed-linkprev-label">On the page</span>
        <span className="ed-linkprev-row">
          <span className="ed-linkprev-pill">{showLabel}</span>
          <span className="ed-linkprev-arrow">{Icon.arrow}</span>
          <span className={`ed-linkprev-dest${bad ? ' bad' : ''}`}>{bad ? 'Not a usable address yet' : describeHref(dest) || 'Goes nowhere yet'}</span>
        </span>
      </div>
      <label className="ed-fl">
        <span className="ed-fl-name">Words on it</span>
        <input id="ed-link-words" value={curLabel} maxLength={200} placeholder={label} onChange={(e) => setText(k, e.target.value)} />
        {label && <span className="ed-fl-hint">Original: “{label}”. Leave the box empty to keep it.</span>}
      </label>
      <label className="ed-fl">
        <span className="ed-fl-name">Where it goes</span>
        <input value={curHref} maxLength={600} placeholder={href} onChange={(e) => setText(`${k}.href`, e.target.value)} inputMode="url" autoCapitalize="off" spellCheck="false" aria-invalid={bad || undefined} aria-describedby="ed-link-help" />
        <span className="ed-fl-hint" id="ed-link-help">A web address (https://…), an email (mailto:name@example.com), a phone number (tel:+441564660303), or a part of the homepage below. Leave it empty to keep the original.</span>
      </label>
      {bad && <p className="ed-error" role="alert">That address isn’t allowed. Start it with https://, mailto: or tel:, or pick a part of the page below.</p>}
      <div className="ed-chips" role="group" aria-label="Parts of the homepage">
        <span className="ed-chips-label">Parts of the homepage</span>
        {PAGE_PARTS.map(([id, name]) => (
          <button type="button" key={id} className={`ed-chip${curHref.trim() === id ? ' on' : ''}`} aria-pressed={curHref.trim() === id} onClick={() => setText(`${k}.href`, id)}>{name}</button>
        ))}
      </div>
    </Dialog>
  )
}

// ------------------------------------------------------------------ lists and grouped details
const ICON_NAMES = {
  double: 'Double bed', king: 'King size bed', single: 'Single bed', shower: 'Shower', bath: 'Bath', tv: 'Television',
  kettle: 'Tea and coffee', heating: 'Heating', hairdryer: 'Hairdryer', towels: 'Towels', bedding: 'Extra bedding', historic: 'Historic room',
}

export function FieldInput({ f, value, onChange }) {
  const bad = f.type === 'url' && value.trim() !== '' && !safeLinkHref(value)
  let input
  if (f.type === 'rich') {
    input = <span className="ed-rich-note">Change these words on the page: click them.</span>
  } else if (f.type === 'textarea' || f.type === 'lines') {
    input = <textarea value={value} maxLength={f.max || 3000} rows={f.type === 'lines' ? 3 : 3} onChange={(e) => onChange(e.target.value)} placeholder={f.placeholder || ''} />
  } else if (f.type === 'icons') {
    const on = new Set(value.split(',').map((s) => s.trim()).filter(Boolean))
    input = (
      <span className="ed-icons">
        {Object.entries(ICON_NAMES).map(([id, name]) => (
          <span key={id} className="ed-check">
            <input type="checkbox" id={`ic-${f.name}-${id}-${f._row}`} checked={on.has(id)} onChange={(e) => { const n = new Set(on); if (e.target.checked) n.add(id); else n.delete(id); onChange(Object.keys(ICON_NAMES).filter((x) => n.has(x)).join(',')) }} />
            <label htmlFor={`ic-${f.name}-${id}-${f._row}`}>{name}</label>
          </span>
        ))}
      </span>
    )
  } else {
    input = (
      <input
        value={value}
        maxLength={f.max || 600}
        inputMode={f.type === 'number' ? 'numeric' : f.type === 'url' ? 'url' : undefined}
        autoCapitalize={f.type === 'url' ? 'off' : undefined}
        spellCheck={f.type === 'url' ? 'false' : undefined}
        placeholder={f.placeholder || ''}
        onChange={(e) => onChange(f.type === 'number' ? e.target.value.replace(/[^0-9]/g, '') : e.target.value)}
      />
    )
  }
  return (
    <div className="ed-fieldrow">
      {f.type === 'icons' ? <span className="ed-flabel">{f.label}</span> : <label className="ed-flabel">{f.label}{f.type !== 'rich' && input}</label>}
      {(f.type === 'icons' || f.type === 'rich') && input}
      {f.help && <span className="ed-help">{f.help}</span>}
      {bad && <span className="ed-error" role="alert">That address isn’t allowed. Use https://, mailto:, tel: or a part of the page like #book.</span>}
    </div>
  )
}

function ListDialog({ spec, text, setText, onClose }) {
  const { key, fields, fallback, title, help, record, extras = [], newItem, itemName = 'item', max = 40, min = 0 } = spec
  const raw = text[key]
  const changed = raw != null && raw !== ''
  const items = record
    ? (parseRecord(raw, fields, fallback, false) || fallback)
    : (parseList(raw, fields, false) || fallback)
  const write = (next) => setText(key, JSON.stringify(next))
  // after Enter splits a line, put the cursor at the start of the new line below
  const focusAfterSplit = useRef(null)
  useEffect(() => {
    const at = focusAfterSplit.current
    if (!at) return
    focusAfterSplit.current = null
    const row = document.querySelectorAll('.ed-modal .ed-items > li')[at.row]
    const el = row && row.querySelector('textarea')
    if (el) { el.focus(); try { el.setSelectionRange(0, 0) } catch { /* not a text box */ } }
  })
  const setField = (i, name, v) => {
    if (record) { write({ ...items, [name]: v }); return }
    const f = fields.find((x) => x.name === name)
    if (f && f.split && /[\r\n]/.test(v)) {
      // a line break in a one-line list item starts a new line (a new bullet)
      const room = Math.max(1, max - items.length + 1)
      // tidy the spaces either side of the break: 'Free | parking' -> 'Free', 'parking'
      let parts = splitLines(v).map((p, j, a) => { let t = p; if (j > 0) t = t.replace(/^[ \t]+/, ''); if (j < a.length - 1) t = t.replace(/[ \t]+$/, ''); return t })
      if (parts.length > room) parts = [...parts.slice(0, room - 1), parts.slice(room - 1).join(' ')]
      const next = [...items.slice(0, i), ...parts.map((p) => ({ ...items[i], [name]: p })), ...items.slice(i + 1)]
      if (parts.length > 1) focusAfterSplit.current = { row: i + parts.length - 1 }
      write(next)
      return
    }
    write(items.map((x, j) => (j === i ? { ...x, [name]: v } : x)))
  }
  const move = (i, d) => { const n = [...items]; const [x] = n.splice(i, 1); n.splice(i + d, 0, x); write(n) }
  const remove = (i) => write(items.filter((_, j) => j !== i))
  const add = () => {
    const blank = {}
    for (const f of fields) blank[f.name] = ''
    write([...items, { ...blank, ...(newItem ? newItem() : {}) }])
  }
  const anyBad = (record ? [items] : items).some((it) => fields.some((f) => f.type === 'url' && (it[f.name] || '').trim() && !safeLinkHref(it[f.name])))
  const visible = fields.filter((f) => !f.hidden)
  const close = () => { if (!anyBad) onClose() }
  const extraVal = (x) => (text[x.k] != null ? text[x.k] : '')
  return (
    <Dialog
      name="list"
      wide
      kicker={record ? 'Details' : `List \u00b7 ${items.length} ${itemName}${items.length === 1 ? '' : 's'}`}
      title={title}
      intro={help}
      onClose={close}
      closeDisabled={anyBad}
      footer={(
        <>
          {changed && <button type="button" className="ed-btn ghost" onClick={() => setText(key, '')}>Back to original {record ? 'details' : 'list'}</button>}
          <button type="button" className="ed-btn primary" onClick={close} disabled={anyBad}>Done</button>
        </>
      )}
    >
        {record ? (
          <div className="ed-item">
            {visible.map((f) => <FieldInput key={f.name} f={{ ...f, _row: 0 }} value={items[f.name] || ''} onChange={(v) => setField(0, f.name, v)} />)}
          </div>
        ) : (
          <ol className="ed-items">
            {items.map((it, i) => (
              <li className="ed-item" key={i}>
                <div className="ed-item-head">
                  <b>{(it[visible[0].name] || '').replace(/<[^>]*>/g, '').slice(0, 60) || `New ${itemName}`}</b>
                  <span className="ed-tools">
                    <button type="button" className="ed-tool" onClick={() => move(i, -1)} disabled={i === 0} aria-label={`Move ${itemName} ${i + 1} up`} title="Move up">{Icon.up}</button>
                    <button type="button" className="ed-tool" onClick={() => move(i, 1)} disabled={i === items.length - 1} aria-label={`Move ${itemName} ${i + 1} down`} title="Move down">{Icon.down}</button>
                    <button type="button" className="ed-tool danger" onClick={() => remove(i)} disabled={items.length <= min} aria-label={`Remove ${itemName} ${i + 1}`} title="Remove">{Icon.remove}<span>Remove</span></button>
                  </span>
                </div>
                {visible.map((f) => <FieldInput key={f.name} f={{ ...f, _row: i }} value={it[f.name] || ''} onChange={(v) => setField(i, f.name, v)} />)}
              </li>
            ))}
            {!items.length && <li className="ed-none">Nothing here yet.</li>}
          </ol>
        )}
        {!record && items.length < max && <button type="button" className="ed-addrow" onClick={add}><span aria-hidden="true">+</span> Add {itemName}</button>}
        {extras.length > 0 && (
          <div className="ed-extras">
            <h3>{spec.extrasTitle || 'Other words'}</h3>
            {extras.map((x) => (
              <label key={x.k} className="ed-flabel">{x.label}
                <input value={extraVal(x)} maxLength={400} placeholder={x.fallback} onChange={(e) => setText(x.k, e.target.value)} />
              </label>
            ))}
            <p className="ed-help">Leave a box empty to keep the original shown in grey.</p>
          </div>
        )}
        {anyBad && <p className="ed-error" role="alert">One of the links isn’t allowed. Fix it before closing.</p>}
    </Dialog>
  )
}

function Confirm({ title, body, yes, onYes, onNo }) {
  return (
    <div className="ed-modal" role="alertdialog" aria-modal="true" aria-labelledby="ed-confirm-title">
      <div className="ed-card">
        <h2 id="ed-confirm-title">{title}</h2>
        <p>{body}</p>
        <div className="ed-row">
          <button type="button" onClick={onNo} autoFocus>Cancel</button>
          <button type="button" className="primary" onClick={onYes}>{yes}</button>
        </div>
      </div>
    </div>
  )
}
