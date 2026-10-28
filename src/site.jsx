// Editable website content.
//
// The words and photos in content.js are the site's built-in defaults. Approved editors can change
// them from the page itself (see src/editor/). Their changes are kept as a private draft and, once
// published, saved to Firestore (siteContent/published), which every visitor reads. Anything not
// changed falls back to the built-in default, and if Firestore can't be reached the site simply shows
// the defaults, so the site never depends on the editor to work.
//
// Published content shape (also checked by the security rules):
//   text:   { [key]: string }   rich text keys hold a small, cleaned subset of HTML; headings are plain text
//   photos: { [key]: [{ url | src, alt, credit?, creditHref? }] }
//   order:  ['stay', 'eat', 'whatson', 'hire', 'visit']   homepage section order
//           (before 28 Oct 2026 'hire' was Private hire and Find us together; an order saved then
//           has no 'visit', so Find us is put straight after Private hire, where it used to be)
import React, { createContext, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { loadPublishedContent } from './firebase.js'
import { sanitizeHtml, escapeHtml, hasBlocks, safeHref } from './richText.js'
import { titleCase } from './titleCase.js'

const CACHE_KEY = 'ws-site-published-v1'
export const HOME_SECTIONS = ['stay', 'eat', 'whatson', 'hire', 'visit']
export const SECTION_NAMES = { stay: 'Stay (rooms and booking)', eat: 'Eat & drink', whatson: 'What’s on', hire: 'Private hire (enquiry form)', visit: 'Find us (address, opening times, nearby)' }

// Turns any stored order into a full, valid one: unknown names dropped, repeats removed, an old
// order (no 'visit') gets Find us right after Private hire, and anything still missing goes at the end.
export function normalizeOrder(list) {
  if (!Array.isArray(list)) return null
  const seen = [...new Set(list.filter((s) => HOME_SECTIONS.includes(s)))]
  if (!seen.length) return null
  if (!seen.includes('visit') && seen.includes('hire')) seen.splice(seen.indexOf('hire') + 1, 0, 'visit')
  return [...new Set([...seen, ...HOME_SECTIONS])]
}

// Only photos from the site itself, Firebase Storage (where editors upload) and the hotel's booking
// system's image host are shown. Anything else in a document is ignored.
export function safePhotoSrc(src) {
  const s = String(src || '')
  if (/^https:\/\/firebasestorage\.googleapis\.com\/v0\/b\/[\w.-]+\/o\/site%2F[\w.-]+\?alt=media$/.test(s)) return s
  if (/^https:\/\/res\.cloudinary\.com\//.test(s)) return s
  if (import.meta.env.VITE_FIREBASE_EMULATORS === '1' && /^http:\/\/127\.0\.0\.1:\d+\/v0\/b\//.test(s)) return s
  if (/^blob:/.test(s)) return s // editor preview of a draft upload, in the editor's own browser only
  if (/^(data:image\/|\/|\.\/|\.\.\/|assets\/)/.test(s) && !/^\/\//.test(s)) return s
  if (/^[\w./-]+\.(jpe?g|png|webp|gif|avif|svg)$/i.test(s)) return s
  try { if (typeof location !== 'undefined' && new URL(s).origin === location.origin) return s } catch { /* not a URL */ }
  return ''
}

function clean(raw) {
  const out = { text: {}, photos: {}, order: null }
  if (!raw || typeof raw !== 'object') return out
  if (raw.text && typeof raw.text === 'object') {
    for (const [k, v] of Object.entries(raw.text)) if (typeof v === 'string' && v.length < 20000) out.text[k] = v
  }
  if (raw.photos && typeof raw.photos === 'object') {
    for (const [k, list] of Object.entries(raw.photos)) {
      if (!Array.isArray(list)) continue
      out.photos[k] = list.slice(0, 12).filter((p) => p && typeof p === 'object').map((p) => ({
        url: typeof p.url === 'string' ? p.url : undefined,
        src: typeof p.src === 'string' ? p.src : undefined,
        path: typeof p.path === 'string' ? p.path : undefined,
        alt: typeof p.alt === 'string' ? p.alt.slice(0, 300) : '',
        credit: typeof p.credit === 'string' ? p.credit.slice(0, 300) : '',
        creditHref: typeof p.creditHref === 'string' ? p.creditHref.slice(0, 500) : '',
      }))
    }
  }
  out.order = normalizeOrder(raw.order)
  return out
}
export const cleanContent = clean

function readCache() {
  try { return clean(JSON.parse(localStorage.getItem(CACHE_KEY) || 'null')) } catch { return clean(null) }
}

const SiteCtx = createContext({ content: clean(null), editor: null, setEditor: () => {} })
export const useSite = () => useContext(SiteCtx)

export function SiteProvider({ children }) {
  const [published, setPublished] = useState(readCache)
  const [editor, setEditor] = useState(null)
  useEffect(() => {
    let live = true
    loadPublishedContent()
      .then((raw) => {
        if (!live) return
        const c = clean(raw)
        setPublished(c)
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(c)) } catch { /* private mode */ }
      })
      .catch(() => { /* offline or blocked: keep the cached or built-in content */ })
    return () => { live = false }
  }, [])
  const value = useMemo(() => ({
    published,
    content: editor && editor.draft ? editor.draft : published,
    editor,
    setEditor,
  }), [published, editor])
  return <SiteCtx.Provider value={value}>{children}</SiteCtx.Provider>
}

export function useOrder() {
  const { content } = useSite()
  return content.order || HOME_SECTIONS
}

// Plain text value (for alt text, aria labels and the like).
export function useTextValue(k, fallback) {
  const { content } = useSite()
  const v = content.text[k]
  return typeof v === 'string' && v.trim() ? v : fallback
}

// ---------------------------------------------------------------- Editable words
// <Edit k="home.eat.heading" as="h2" heading>Homemade pub classics</Edit>   a heading: plain text, shown in Title Case
// <Edit k="home.eat.intro" as="p" rich>{food.intro}</Edit>                  a paragraph: bold, italic, links and lists
// <Edit k="..." rich paras>{bodyWithBlankLines}</Edit>                       several paragraphs (blank line between)
// <Edit k="home.hero.since" as="b" plain>1352</Edit>                         a single line of plain text, shown exactly as typed
const asIs = (v) => v
export function Edit({ k, as = 'p', className = '', heading = false, plain = false, rich = false, paras = false, caseFn = titleCase, children, ...rest }) {
  if (plain) { heading = true; caseFn = asIs } // eslint-disable-line no-param-reassign
  const { content, editor } = useSite()
  const fallback = typeof children === 'string' ? children : ''
  const override = content.text[k]
  const has = typeof override === 'string' && override.trim() !== ''
  const editing = !!(editor && editor.editing)

  let html
  if (heading) html = escapeHtml(caseFn(has ? override : fallback))
  else if (has) html = sanitizeHtml(override)
  else if (paras) html = fallback.split(/\n\s*\n/).map((p) => `<p>${escapeHtml(p)}</p>`).join('')
  else html = escapeHtml(fallback)

  let defaultHtml
  if (heading) defaultHtml = escapeHtml(caseFn(fallback))
  else if (paras) defaultHtml = fallback.split(/\n\s*\n/).map((p) => `<p>${escapeHtml(p)}</p>`).join('')
  else defaultHtml = escapeHtml(fallback)

  const Tag = (!heading && (paras || (rich && hasBlocks(html))) && /^(p|span)$/.test(as)) ? 'div' : as
  const cls = `${className}${paras ? ' rt-paras' : ''}${Tag !== as ? ' rt-block' : ''}`.trim()

  if (editing) return <EditingField key={editor.revision} k={k} Tag={Tag} className={cls} html={html} heading={heading} rich={rich || paras} paras={paras} editor={editor} caseFn={caseFn} fallback={fallback} defaultHtml={defaultHtml} {...rest} />
  return <Tag className={cls || undefined} {...rest} dangerouslySetInnerHTML={{ __html: html }} />
}

// While editing, the browser owns the words inside the box (so the cursor never jumps); React only
// fills it when the box first opens or the draft is reset.
function EditingField({ k, Tag, className, html, heading, rich, paras, editor, caseFn, fallback, defaultHtml, onValue, ...rest }) {
  const ref = useRef(null)
  const rev = editor.revision
  // Keep the same element while typing (adding a list mustn't swap the box and lose the cursor).
  const [T] = useState(Tag)
  useLayoutEffect(() => { if (ref.current) ref.current.innerHTML = html }, [rev]) // eslint-disable-line react-hooks/exhaustive-deps
  const commit = (final) => {
    const el = ref.current
    if (!el) return
    if (heading) {
      const t = el.textContent.replace(/\s+/g, ' ').trim()
      // Unchanged from the built-in heading: store nothing, so it keeps following the default.
      if (onValue) onValue(t)
      else editor.setText(k, (t === fallback || caseFn(t) === caseFn(fallback)) ? '' : t)
      if (final) el.textContent = caseFn(t)
    } else {
      const v = sanitizeHtml(el.innerHTML)
      if (onValue) onValue(v)
      else editor.setText(k, (v === defaultHtml || v === sanitizeHtml(defaultHtml)) ? '' : v)
    }
  }
  return (
    <T
      ref={ref}
      className={`${className} ed-field${heading ? ' ed-heading' : ''}`.trim()}
      contentEditable={heading ? 'plaintext-only' : true}
      suppressContentEditableWarning
      role="textbox"
      aria-multiline={heading ? undefined : 'true'}
      aria-label={`Edit ${heading ? 'heading' : 'text'}`}
      data-edit-key={k}
      data-rich={rich ? '1' : undefined}
      onInput={() => commit(false)}
      onBlur={() => { commit(true); editor.onBlurField && editor.onBlurField() }}
      onFocus={(e) => editor.onFocusField && editor.onFocusField(e.currentTarget, { rich, paras, heading })}
      onKeyDown={(e) => { if (heading && e.key === 'Enter') { e.preventDefault(); e.currentTarget.blur() } }}
      {...rest}
    />
  )
}

// ---------------------------------------------------------------- Links and buttons
// Edited link destinations may be a web address (https://), an email (mailto:), a phone number (tel:),
// a section of the page (#book) or another page of this site (history/, ../#book).
export function safeLinkHref(href) {
  const h = String(href || '').trim()
  const s = safeHref(h)
  if (s) return s
  if (/^[\w-]+(\/[\w-]+)*\/?(#[\w-]*)?$/.test(h)) return h
  if (/^\.\.\/#[\w-]*$/.test(h)) return h
  return ''
}

// <EditLink k="home.hero.book" href="#book" className="pill light">Book a room</EditLink>
// The words and where it goes can both be changed. While editing, clicking it opens a small box for both.
export function EditLink({ k, href, children, className = '', newTab, onClick, mapHref, inner = false, ...rest }) {
  const { editor } = useSite()
  const fallback = typeof children === 'string' ? children : ''
  const label = useTextValue(k, fallback)
  const edited = useTextValue(`${k}.href`, '')
  const ok = edited && safeLinkHref(edited)
  const dest = ok ? (mapHref && ok.startsWith('#') ? mapHref(ok) : ok) : href
  const ext = newTab != null ? newTab : /^https?:/i.test(dest)
  const editing = !!(editor && editor.editing)
  const cls = `${className}${editing ? ' ed-link' : ''}`.trim()
  return (
    <a
      className={cls || undefined}
      href={dest}
      target={ext ? '_blank' : undefined}
      rel={ext ? 'noreferrer' : undefined}
      data-edit-link={editing ? k : undefined}
      title={editing ? 'Click to change the words and where this goes' : undefined}
      {...rest}
      onClick={editing
        ? (e) => { e.preventDefault(); e.stopPropagation(); editor.openLink({ k, label: fallback, href }) }
        : onClick}
    >
      {inner ? <span>{label}</span> : label}
    </a>
  )
}

// ---------------------------------------------------------------- Lists and grouped details
// Lists (rooms, menus, nearby places, ...) and grouped details (the contact details) are kept in the
// same text map as everything else, as JSON, under 'list:<name>' and 'rec:<name>'. That keeps the
// stored shape (text, photos, order) the security rules already check, and a list nobody has changed
// just uses the built-in one from content.js.
//   fields: [{ name, label, type: 'text' | 'textarea' | 'url' | 'number' | 'icons' | 'rich', max, help }]
// Every value is a string. Links are checked again whenever they are shown.
function cleanItem(x, fields, strict) {
  const o = {}
  for (const f of fields) {
    let v = typeof x[f.name] === 'string' ? x[f.name] : (typeof x[f.name] === 'number' ? String(x[f.name]) : '')
    v = v.slice(0, f.max || 3000)
    if (strict && f.type === 'url' && v && !safeLinkHref(v)) v = ''
    o[f.name] = v
  }
  return o
}
export function parseList(raw, fields, strict = true) {
  if (typeof raw !== 'string' || !raw) return null
  let a
  try { a = JSON.parse(raw) } catch { return null }
  if (!Array.isArray(a)) return null
  return a.slice(0, 80).filter((x) => x && typeof x === 'object').map((x) => cleanItem(x, fields, strict))
}
export function parseRecord(raw, fields, fallback, strict = true) {
  if (typeof raw !== 'string' || !raw) return null
  let a
  try { a = JSON.parse(raw) } catch { return null }
  if (!a || typeof a !== 'object' || Array.isArray(a)) return null
  const c = cleanItem(a, fields, strict)
  const out = { ...fallback }
  for (const f of fields) if (f.name in a) out[f.name] = c[f.name]
  return out
}

export function useList(name, fallback, fields) {
  const { content, editor } = useSite()
  const key = `list:${name}`
  const raw = content.text[key]
  const items = useMemo(() => parseList(raw, fields) || fallback, [raw, fallback, fields])
  const setItems = (next) => editor && editor.setText(key, next == null ? '' : JSON.stringify(next))
  const setItem = (i, f, v) => setItems(items.map((x, j) => (j === i ? { ...x, [f]: v } : x)))
  return { key, items, setItems, setItem, fields, fallback }
}

export function useRecord(name, fallback, fields) {
  const { content } = useSite()
  const raw = content.text[`rec:${name}`]
  return useMemo(() => parseRecord(raw, fields, fallback) || fallback, [raw, fallback, fields])
}

// One field of one list item, edited right on the page (plain text, or rich text with links).
export function ItemEdit({ list, i, f, as = 'span', rich = false, className = '', ...rest }) {
  const { editor } = useSite()
  const v = (list.items[i] && list.items[i][f]) || ''
  const html = rich ? sanitizeHtml(v) : escapeHtml(v)
  const Tag = as
  if (editor && editor.editing) {
    return (
      <EditingField
        key={editor.revision}
        Tag={Tag}
        className={className}
        html={html}
        heading={!rich}
        rich={rich}
        paras={false}
        editor={editor}
        caseFn={asIs}
        fallback={v}
        defaultHtml={html}
        onValue={(val) => list.setItem(i, f, val)}
        {...rest}
      />
    )
  }
  return <Tag className={className || undefined} {...rest} dangerouslySetInnerHTML={{ __html: html }} />
}

// Button (only while editing) that opens the box for a whole list or a group of details.
//   spec: { key: 'list:home.menus' | 'rec:contact', fields, fallback, title, help, record?, extras?, newItem? }
export function ListEditButton({ spec, label, className = '' }) {
  const { editor } = useSite()
  if (!editor || !editor.editing) return null
  return (
    <button type="button" className={`ed-photo-btn ed-list-btn ${className}`.trim()} onClick={(e) => { e.preventDefault(); e.stopPropagation(); editor.openList(spec) }}>
      {label}
    </button>
  )
}

// ---------------------------------------------------------------- Photos and slideshows
// usePhotos('home.hero', [{ src, alt }]) gives the photos for a spot: the editor's or the published
// list when there is one, otherwise the built-in default.
export function usePhotos(k, fallback) {
  const { content, editor } = useSite()
  const list = content.photos[k]
  // Built-in photos are trusted as they are; edited ones are checked (see safePhotoSrc).
  if (!(Array.isArray(list) && list.length)) return fallback
  return list.map((p) => ({
    ...p,
    src: safePhotoSrc(p.path && editor ? editor.photoUrl(p.path) : (p.url || p.src)),
  })).filter((p) => p.src)
}

// Button that opens the photo manager for a spot (only while editing).
export function PhotoEditButton({ k, fallback, label = 'Edit photos', credits = false }) {
  const { editor } = useSite()
  if (!editor || !editor.editing) return null
  return (
    <button type="button" className="ed-photo-btn" onClick={() => editor.openPhotos(k, fallback, { credits })}>
      {label}
    </button>
  )
}

const SLIDE_MS = 10000
const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

// A photo spot with more than one photo becomes a slideshow: a gentle crossfade every 10 seconds.
// It pauses while the tab is hidden, while the pointer or keyboard focus is on it, or when the visitor
// presses pause. With reduced motion turned on it never changes by itself: the visitor uses the
// next-photo button instead. One photo is shown exactly as before.
export function Slideshow({ photos, imgClass, wrapClass = '', imgProps = {}, style, onIndex, label = 'Photos' }) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hover, setHover] = useState(false)
  const [hidden, setHidden] = useState(typeof document !== 'undefined' && document.hidden)
  const [still, setStill] = useState(reduced)
  const n = photos.length
  useEffect(() => { if (i >= n) setI(0) }, [n, i])
  useEffect(() => { onIndex && onIndex(i < n ? i : 0) }, [i, n]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const vis = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', vis)
    const mq = typeof matchMedia !== 'undefined' ? matchMedia('(prefers-reduced-motion: reduce)') : null
    const rm = () => setStill(mq.matches)
    mq && mq.addEventListener && mq.addEventListener('change', rm)
    return () => { document.removeEventListener('visibilitychange', vis); mq && mq.removeEventListener && mq.removeEventListener('change', rm) }
  }, [])
  const running = n > 1 && !paused && !hover && !hidden && !still
  useEffect(() => {
    if (!running) return undefined
    const t = setTimeout(() => setI((x) => (x + 1) % n), SLIDE_MS)
    return () => clearTimeout(t)
  }, [running, i, n])

  if (n === 0) return null
  if (n === 1) {
    const p = photos[0]
    return <img className={imgClass} src={p.src} alt={p.alt || ''} style={style} {...imgProps} />
  }
  const cur = i < n ? i : 0
  return (
    <div
      className={`slides ${wrapClass}`.trim()}
      role="group"
      aria-roledescription="slideshow"
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      {photos.map((p, j) => (
        <img
          key={`${p.src}-${j}`}
          className={`${imgClass || ''} slide${j === cur ? ' on' : ''}`.trim()}
          src={p.src}
          alt={j === cur ? (p.alt || '') : ''}
          aria-hidden={j === cur ? undefined : 'true'}
          style={style}
          {...imgProps}
          loading={j === 0 ? imgProps.loading : 'lazy'}
        />
      ))}
      <div className="slide-ctl">
        {still ? (
          <button type="button" onClick={() => setI((cur + 1) % n)} aria-label={`Next photo (${cur + 1} of ${n})`}>
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        ) : (
          <button type="button" onClick={() => setPaused((x) => !x)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} aria-pressed={paused}>
            {paused
              ? <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.5 3.5v9l7-4.5z" fill="currentColor" /></svg>
              : <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.5 3.5v9M10.5 3.5v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>}
          </button>
        )}
      </div>
    </div>
  )
}

// Loads the editor only for people who ask for it (yoursite/#admin, then kept for that browser tab),
// so ordinary visitors never download it.
const EditorApp = React.lazy(() => import('./editor/Editor.jsx'))
export function EditorGate() {
  const [want, setWant] = useState(() => {
    if (typeof location === 'undefined') return false
    if (location.hash === '#admin') { try { sessionStorage.setItem('ws-admin', '1') } catch { /* */ } return true }
    try { return sessionStorage.getItem('ws-admin') === '1' } catch { return false }
  })
  useEffect(() => {
    const on = () => { if (location.hash === '#admin') { try { sessionStorage.setItem('ws-admin', '1') } catch { /* */ } setWant(true) } }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  if (!want) return null
  return (
    <React.Suspense fallback={null}>
      <EditorApp onClose={() => { try { sessionStorage.removeItem('ws-admin') } catch { /* */ } if (location.hash === '#admin') history.replaceState(null, '', location.pathname + location.search); setWant(false) }} />
    </React.Suspense>
  )
}
