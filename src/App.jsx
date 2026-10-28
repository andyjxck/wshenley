import React, { useEffect, useMemo, useRef, useState } from 'react'
import { hero, food, whatsOn, privateHire, nearbyNote, eras } from './content.js'
import BookingWidget from './BookingWidget.jsx'
import RoomCards from './RoomCards.jsx'
import { useLiveAvailability, shortDate } from './liveAvailability.js'
import WeekCalendar from './WeekCalendar.jsx'
import { useTimeTravel, useReveal } from './useTimeTravel.js'
import { agesFor, gradeFor } from './ageing.js'
import EnquiryForm from './EnquiryForm.jsx'
import BeforeAfter from './BeforeAfter.jsx'
import { SiteProvider, EditorGate, Edit, Slideshow, usePhotos, PhotoEditButton, useOrder, useTextValue, useSite, EditLink, useList, ItemEdit, ListEditButton, safeLinkHref } from './site.jsx'
import { escapeHtml } from './richText.js'
import {
  useContact, CONTACT_SPEC, ROOMS_SPEC, AMENITIES_SPEC, TERMS_SPEC, MENUS_SPEC, DRINKS_SPEC_BASE, NEARBY_SPEC, SOCIAL_SPEC_BASE, CREDITS_SPEC,
} from './editables.js'
import { titleCase } from './titleCase.js'

// Two real pages: the homepage (index.html) and Our story (history/index.html).
// history/index.html sets <html data-page="history">, so links can point the right way from either page.
const ON_HISTORY = typeof document !== 'undefined' && document.documentElement.dataset.page === 'history'
const HOME = ON_HISTORY ? '../' : './'
const STORY = ON_HISTORY ? './' : 'history/'
const home = (hash) => (ON_HISTORY ? `../${hash}` : hash)

// Old links to the story on the homepage (#story, #living-memory, ...) now open the Our story page.
if (!ON_HISTORY && typeof location !== 'undefined') {
  const h = location.hash.slice(1)
  if (h && (h === 'story' || eras.some((e) => e.id === h))) location.replace(`history/${h === 'story' ? '' : `#${h}`}`)
}

// The header has one page link ('Our story' on the homepage, 'Home' on Our story) beside the 'Book a room' button.
const SWITCH = ON_HISTORY ? ['Home', HOME] : ['Our story', STORY]

const ALL = eras.flatMap((e) => e.entries.map((x) => ({ ...x, era: e.id })))
const OLDEST = 1352
const YEARS_BACK = new Date().getFullYear() - OLDEST

// How old each entry looks (0 = today, 1 = oldest), from its year: see ageing.js
const AGES = agesFor(ALL.map((x) => x.year)).map((x) => x.age)
const ageStyle = (a) => ({ '--age': a.toFixed(4) })

function Header() {
  const [solid, setSolid] = useState(ON_HISTORY)
  useEffect(() => {
    const on = () => setSolid(ON_HISTORY || window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`site-header${solid ? ' solid' : ''}`}>
      <div className="bar">
        <a className="brand" href={ON_HISTORY ? HOME : '#top'}>
          <Edit k="site.brand" as="b" plain>The White Swan</Edit>
          <Edit k="site.brand.sub" as="span" plain>Henley-in-Arden · 1352</Edit>
        </a>
        <div className="bar-r">
          <EditLink k={ON_HISTORY ? 'nav.home' : 'nav.story'} className="page-switch" href={SWITCH[1]} newTab={false}>{SWITCH[0]}</EditLink>
          <EditLink k="nav.book" className="pill dark" href={home('#book')} mapHref={home}>Book a room</EditLink>
        </div>
      </div>
    </header>
  )
}

// The hero heading is one phrase over three lines, so it is put in Title Case as a whole
// ("The Warmest / Welcome / at an Inn"), then split back into its lines.
function caseLines(lines) {
  const words = lines.map((l) => l.trim().split(/\s+/).filter(Boolean))
  const all = titleCase(words.flat().join(' ')).split(' ')
  let n = 0
  return words.map((w) => { const out = all.slice(n, n + w.length).join(' '); n += w.length; return out })
}

const HERO_PHOTOS = [{ src: hero.image, alt: 'The White Swan, Henley-in-Arden' }]

function Hero() {
  const photos = usePhotos('home.hero', HERO_PHOTOS)
  const lines = hero.title.map((t, i) => useTextValue(`home.hero.title.${i}`, t)) // eslint-disable-line react-hooks/rules-of-hooks
  const cased = caseLines(lines)
  const since = useTextValue('home.hero.since', hero.since)
  return (
    <section className="hero" id="top">
      <Slideshow photos={photos} imgClass="hero-img" imgProps={{ fetchpriority: 'high' }} label="Photos of the White Swan" />
      <div className="hero-shade" />
      <div className="hero-copy wrap">
        <PhotoEditButton k="home.hero" fallback={HERO_PHOTOS} label="Edit hero photos" />
        <p className="hero-place"><i className="hrule" /><Edit k="home.hero.place" as="span" plain>{hero.place}</Edit><i className="hrule" /></p>
        <h1 className="hero-title" aria-label={`${cased.join(' ')} since ${since}`}>
          {hero.title.map((t, i) => (
            <span className={`ht ht-${i + 1}`} key={i} aria-hidden="true">
              <Edit k={`home.hero.title.${i}`} as="span" heading caseFn={(v) => caseLines(lines.map((l, j) => (j === i ? v : l)))[i]} style={{ '--d': `${0.15 + i * 0.14}s` }}>{t}</Edit>
            </span>
          ))}
        </h1>
        <div className="hero-since" aria-hidden="true">
          <i className="hrule long" />
          <Edit k="home.hero.sinceword" as="span" className="since-word" plain>Since</Edit>
          <Edit k="home.hero.since" as="b" plain>{hero.since}</Edit>
          <i className="hrule long" />
        </div>
        <Edit k="home.hero.intro" className="hero-intro" rich>{hero.intro}</Edit>
        <div className="hero-cta">
          <EditLink k="home.hero.book" className="pill light" href="#book">Book a room</EditLink>
          <EditLink k="home.hero.eat" className="pill ghost" href="#eat">Eat & drink</EditLink>
        </div>
      </div>
      <EditLink k="home.hero.hint" className="hero-hint" href="#this-week" inner>Open daily, 12pm to 11pm</EditLink>
    </section>
  )
}

// "This week" sits where the booking bar used to: overlapping the bottom of the hero.
function ThisWeek() {
  return (
    <section className="this-week" id="this-week">
      <div className="wrap">
        <WeekCalendar />
      </div>
    </section>
  )
}

// The booking bar now opens the rooms section, right above the flip cards.
function Book({ avail, list }) {
  return (
    <div className="book reveal" id="book">
      <div className="book-head">
        <Edit k="home.stay.book" as="h3" className="h-sm" heading>Book direct</Edit>
      </div>
      <BookingWidget />
      <LiveStatus avail={avail} list={list} />
    </div>
  )
}

// One line under the booking bar saying what the room cards below now show.
function LiveStatus({ avail, list }) {
  const contact = useContact()
  const { status, stay, byCode } = avail
  if (status === 'idle' || !stay) return <p className="live-status" role="status" aria-live="polite" />
  const when = `${shortDate(stay.checkIn)} to ${shortDate(stay.checkOut)}`
  const nights = `${stay.nights} night${stay.nights === 1 ? '' : 's'}`
  let msg
  if (status === 'loading') msg = <>Checking rooms for {when}…</>
  else if (status === 'error') msg = <>We couldn’t check rooms for {when} just now. Press Search to see what’s free, or call us on <a href={contact.phoneHref}>{contact.phone}</a>.</>
  else {
    const free = list.filter((r) => byCode[r.code] && byCode[r.code].state === 'free')
    if (!free.length) msg = <>Sorry, no rooms are free for {when}. Try other dates, or call us on <a href={contact.phoneHref}>{contact.phone}</a>.</>
    else msg = <><strong>{when}, {nights}:</strong> {free.length === 1 ? '1 room is' : `${free.length} rooms are`} free ({free.map((r) => r.name).join(', ')}).{stay.withChildren ? '' : ' Prices are for the whole stay.'}</>
  }
  return <p className={`live-status ${status}`} role="status" aria-live="polite">{msg}</p>
}

// A room from the editable list, in the shape the cards and live availability use.
const normRoom = (r, i) => ({
  id: r.id || r.code || `room-${i}`,
  name: r.name || 'Room',
  code: (r.code || '').trim(),
  sleeps: Math.max(1, Math.min(20, parseInt(r.sleeps, 10) || 2)),
  text: r.text,
  history: r.history,
  icons: String(r.icons || '').split(',').map((x) => x.trim()).filter(Boolean),
  image: r.image || '',
})

function Stay() {
  const roomList = useList('home.rooms', ROOMS_SPEC.fallback, ROOMS_SPEC.fields)
  const list = useMemo(() => roomList.items.map(normRoom), [roomList.items])
  const listRef = useRef(list)
  listRef.current = list
  const avail = useLiveAvailability(listRef)
  const am = useList('home.amenities', AMENITIES_SPEC.fallback, AMENITIES_SPEC.fields)
  const terms = useList('home.terms', TERMS_SPEC.fallback, TERMS_SPEC.fields)
  return (
    <section className="section" id="stay">
      <div className="wrap">
        <Edit k="home.stay.eyebrow" className="eyebrow reveal" plain>Stay</Edit>
        <Edit k="home.stay.heading" as="h2" className="reveal" heading>Rooms above the inn</Edit>
      </div>
      <div className="wrap">
        <Book avail={avail} list={list} />
        <ListEditButton spec={ROOMS_SPEC} label="Edit rooms (names, features, descriptions, card wording)" />
        <RoomCards avail={avail} list={list} />
        <div className="two-col reveal">
          <div>
            <Edit k="home.stay.amenities" as="h3" className="h-label" heading>In every room</Edit>
            <ul className="ticks">{am.items.map((a, i) => <ItemEdit key={i} list={am} i={i} f="text" as="li" />)}</ul>
            <ListEditButton spec={AMENITIES_SPEC} label="Add, remove or reorder" />
          </div>
          <div>
            <Edit k="home.stay.terms" as="h3" className="h-label" heading>Good to know</Edit>
            <ul className="plain">{terms.items.map((a, i) => <ItemEdit key={i} list={terms} i={i} f="text" as="li" />)}</ul>
            <ListEditButton spec={TERMS_SPEC} label="Add, remove or reorder" />
          </div>
        </div>
      </div>
    </section>
  )
}

const EAT_PHOTOS = [{ src: food.image, alt: food.alt }]

const linkProps = (href) => {
  const h = safeLinkHref(href)
  if (!h) return {}
  return /^https?:/i.test(h) ? { href: h, target: '_blank', rel: 'noreferrer' } : { href: h }
}

function Eat() {
  const photos = usePhotos('home.eat', EAT_PHOTOS)
  const { content } = useSite()
  const menus = useList('home.menus', MENUS_SPEC.fallback, MENUS_SPEC.fields)
  // Built-in drinks keep any wording already changed with the earlier editor (home.drinks.<name>.text).
  const legacy = food.drinks.map((d) => content.text[`home.drinks.${slug(d.name)}.text`] || '').join('\u0000')
  const drinksFallback = useMemo(() => food.drinks.map((d) => ({
    name: d.name,
    text: content.text[`home.drinks.${slug(d.name)}.text`] || escapeHtml(d.text),
    href: d.href || '',
  })), [legacy]) // eslint-disable-line react-hooks/exhaustive-deps
  const drinks = useList('home.drinks', drinksFallback, DRINKS_SPEC_BASE.fields)
  const drinksSpec = useMemo(() => ({ ...DRINKS_SPEC_BASE, fallback: drinksFallback }), [drinksFallback])
  return (
    <section className="section eat" id="eat">
      <div className="wrap split">
        <div className="split-img reveal">
          <Slideshow photos={photos} wrapClass="stack" imgProps={{ loading: 'lazy' }} label="Food photos" />
          <PhotoEditButton k="home.eat" fallback={EAT_PHOTOS} />
        </div>
        <div>
          <Edit k="home.eat.eyebrow" className="eyebrow reveal" plain>Eat & drink</Edit>
          <Edit k="home.eat.heading" as="h2" className="reveal" heading>Homemade pub classics</Edit>
          <Edit k="home.eat.intro" className="lead reveal" rich>{food.intro}</Edit>
          <ul className="menus">
            {menus.items.map((m, i) => (
              <li className="reveal" key={i}>
                <a {...linkProps(m.href)}>
                  <b>{m.name}</b><span>{m.when}</span>
                </a>
              </li>
            ))}
          </ul>
          <ListEditButton spec={MENUS_SPEC} label="Edit menus (names, times, links)" />
        </div>
      </div>
      <div className="wrap drinks">
        {drinks.items.map((d, i) => (
          <div className="drink reveal" key={i}>
            <h3>{safeLinkHref(d.href) ? <a {...linkProps(d.href)}>{titleCase(d.name)}</a> : titleCase(d.name)}</h3>
            <ItemEdit list={drinks} i={i} f="text" as="p" rich />
          </div>
        ))}
        <ListEditButton spec={drinksSpec} label="Edit drinks (names, links, add or remove)" />
      </div>
    </section>
  )
}

// The bar photo stays put behind the section (like the hero) while the words scroll over it.
const WHATS_PHOTOS = [{ src: whatsOn.image, alt: '' }]

function WhatsOn() {
  const photos = usePhotos('home.whatson', WHATS_PHOTOS)
  const contact = useContact()
  return (
    <section className="whats-on" id="whats-on">
      <Slideshow photos={photos} imgClass="whats-img" label="Photos of the bar" />
      <div className="whats-shade" />
      <div className="wrap whats-copy">
        <PhotoEditButton k="home.whatson" fallback={WHATS_PHOTOS} label="Edit background photos" />
        <Edit k="home.whatson.eyebrow" className="eyebrow reveal" plain>What’s on</Edit>
        <Edit k="home.whatson.heading" as="h2" className="reveal" heading>{whatsOn.headline}</Edit>
        <Edit k="home.whatson.text" className="lead reveal" rich>{whatsOn.text}</Edit>
        <div className="reveal whats-cta">
          <EditLink k="home.whatson.cta" className="pill light" href={safeLinkHref(contact.instagram) || '#whats-on'}>See this week on Instagram</EditLink>
        </div>
      </div>
    </section>
  )
}

// Private hire and Find us share one section: on wide screens the hire intro and the
// On the High Street details sit in the left column beside the enquiry form, and Nearby
// runs full width underneath. On smaller screens it all stacks in that order.
function HireAndVisit() {
  const contact = useContact()
  const near = useList('home.nearby', NEARBY_SPEC.fallback, NEARBY_SPEC.fields)
  return (
    <section className="section hire-visit" id="hire">
      <div className="wrap hv-layout">
        <div className="hire-intro">
          <Edit k="home.hire.eyebrow" className="eyebrow reveal" plain>Private hire</Edit>
          <Edit k="home.hire.heading" as="h2" className="reveal" heading>{privateHire.headline}</Edit>
          <Edit k="home.hire.intro" className="lead reveal" rich>{privateHire.intro}</Edit>
        </div>
        <div className="hv-form">
          <EnquiryForm />
        </div>
        <div className="findus" id="visit">
          <Edit k="home.visit.eyebrow" className="eyebrow reveal" plain>Find us</Edit>
          <Edit k="home.visit.heading" as="h2" className="reveal" heading>On the High Street</Edit>
          <ListEditButton spec={CONTACT_SPEC} label="Edit address, opening times and contact details" />
          <div className="visit-grid reveal">
            <div>
              <Edit k="home.visit.address" as="h3" className="h-label" heading>Address</Edit>
              <p>{contact.address.map((l) => <span className="line" key={l}>{l}</span>)}</p>
              <EditLink k="home.visit.maps" className="text-link" href={safeLinkHref(contact.mapsHref) || '#visit'}>Open in Maps</EditLink>
            </div>
            <div>
              <Edit k="home.visit.open" as="h3" className="h-label" heading>Open</Edit>
              <p>{contact.hours}</p>
              <Edit k="home.visit.parking" className="muted" plain>Car park at the rear for guests.</Edit>
            </div>
            <div>
              <Edit k="home.visit.contact" as="h3" className="h-label" heading>Get in touch</Edit>
              <p><a href={contact.phoneHref}>{contact.phone}</a><br /><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap nearby-block" id="nearby">
        <Edit k="home.nearby.heading" as="h3" className="h-label reveal" heading>Nearby</Edit>
        <ul className="nearby reveal">
          {near.items.map((n, i) => (
            <li key={i}>
              <span className="nb-main">{safeLinkHref(n.href) ? <a {...linkProps(n.href)}>{n.name}</a> : <b>{n.name}</b>}<small>{n.place}</small></span>
              <span className="nb-dist">{n.distance}</span>
            </li>
          ))}
        </ul>
        <ListEditButton spec={NEARBY_SPEC} label="Edit nearby places" />
        <Edit k="home.nearby.note" className="nearby-note muted reveal" rich>{nearbyNote}</Edit>
        <p className="story-link reveal"><EditLink k="home.nearby.story" className="text-link" href={STORY} newTab={false}>Read the Swan’s story, from 1352 to today</EditLink></p>
      </div>
    </section>
  )
}

function TimeGate() {
  return (
    <section className="gate" id="story">
      <div className="wrap">
        <Edit k="story.gate.eyebrow" className="eyebrow reveal" plain>Our story</Edit>
        <h2 className="gate-title reveal"><Edit k="story.gate.title1" as="span" plain>{titleCase('Keep scrolling.')}</Edit><br /><Edit k="story.gate.title2" as="em" plain>{titleCase(`Go back ${YEARS_BACK} years.`)}</Edit></h2>
        <Edit k="story.gate.lead" className="lead reveal" rich>Every step down this page is a step back in time, from the Swan you know to the castle across the road.</Edit>
        <nav className="era-jump reveal" aria-label="Jump to an era">
          {eras.map((e) => <EraJump key={e.id} e={e} />)}
        </nav>
        <div className="gate-arrow" aria-hidden="true" />
      </div>
    </section>
  )
}

function EraJump({ e }) {
  const name = useTextValue(`story.${e.id}.name`, e.name)
  const range = useTextValue(`story.${e.id}.range`, e.range)
  return <a href={`#${e.id}`}><b>{titleCase(name)}</b><span>{range}</span></a>
}

const slug = (t) => String(t).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60)
const kindSlug = (k) => k.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '')

// Stable key for an entry's editable parts: era + its original title (the built-in one, so it
// doesn't change when an editor renames the entry).
const entryKey = (e) => `story.${e.era}.${slug(`${e.year}-${e.title}`)}`

function Credit({ p }) {
  if (!p || !p.credit) return null
  return /^https?:\/\//.test(p.creditHref || '') ? <a href={p.creditHref} target="_blank" rel="noreferrer">{p.credit}</a> : <span>{p.credit}</span>
}

function Entry({ e, index }) {
  const age = AGES[index]
  const k = entryKey(e)
  const { content, editor } = useSite()
  const editing = !!(editor && editor.editing)
  const own = content.photos[k]
  const changed = Array.isArray(own) && own.length > 0
  const builtIn = e.image ? [{ src: e.image, alt: e.title }] : e.images ? e.images.map((p) => ({ src: p.image, alt: p.alt })) : []
  const photos = usePhotos(k, builtIn)
  const [slide, setSlide] = useState(0)
  const grade = { filter: gradeFor(age) }
  return (
    <article className={`entry reveal${photos.length ? ' has-img' : ''}${e.quote ? ' has-quote' : ''}`} data-year={e.year} data-era={e.era} data-age={age.toFixed(4)} style={ageStyle(age)} id={`y-${index}`}>
      <div className="entry-year"><Edit k={`${k}.year`} as="span" plain>{String(e.year)}</Edit></div>
      <div className="entry-main">
        {e.kind && <Edit k={`${k}.kind`} className={`kind kind-${kindSlug(e.kind)}`} plain>{e.kind}</Edit>}
        <Edit k={`${k}.title`} as="h3" heading>{e.title}</Edit>
        {e.quote && <Edit k={`${k}.quote`} as="blockquote" plain>{e.quote}</Edit>}
        <Edit k={`${k}.text`} className="entry-text" rich>{e.text}</Edit>
        {(e.body || editing || content.text[`${k}.body`]) && <Edit k={`${k}.body`} as="div" className="entry-body" paras>{e.body || ''}</Edit>}
        {e.look && <p className="look"><Edit k="story.lookfor" as="span" plain>Look for it</Edit><Edit k={`${k}.look`} as="span" rich>{e.look}</Edit></p>}
        {e.video && (
          <div className="entry-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${e.video}?rel=0`}
              title={e.videoTitle || e.title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}
        {photos.length > 0 && (
          <figure className={`entry-fig${photos.length > 1 ? ' entry-photos' : ''}`}>
            <div className="frame"><Slideshow photos={photos} wrapClass="stack" style={grade} imgProps={{ loading: 'lazy' }} onIndex={setSlide} label={`Photos: ${e.title}`} /></div>
            {changed ? (
              <figcaption><Credit p={photos[slide] || photos[0]} /></figcaption>
            ) : e.image ? (
              <figcaption>
                {e.creditHref ? <a href={e.creditHref} target="_blank" rel="noreferrer"><Edit k={`${k}.credit`} as="span" plain>{e.credit}</Edit></a> : <Edit k={`${k}.credit`} as="span" plain>{e.credit || ''}</Edit>}
                {e.licence && <a className="licence" href={e.licence.href} target="_blank" rel="license noreferrer"><Edit k={`${k}.licence`} as="span" plain>{e.licence.label}</Edit></a>}
                {e.changes && <Edit k={`${k}.changes`} as="span" className="changes" plain>{e.changes}</Edit>}
                {e.rights && <Edit k={`${k}.rights`} as="span" className="rights" plain>{e.rights}</Edit>}
              </figcaption>
            ) : (e.credit && <figcaption><Edit k={`${k}.credit`} as="span" plain>{e.credit}</Edit></figcaption>)}
          </figure>
        )}
        <PhotoEditButton k={k} fallback={builtIn} credits label={photos.length ? 'Edit photos' : 'Add photos'} />
        {e.compare && (
          <figure className="entry-fig entry-compare">
            {e.compare.title && <Edit k={`${k}.compare.title`} className="compare-title" heading>{e.compare.title}</Edit>}
            <BeforeAfter {...e.compare} beforeFilter={gradeFor(age)} />
            <figcaption>
              <Edit k={`${k}.compare.caption`} as="span" plain>{e.compare.caption}</Edit>
              {e.compare.credit && <Edit k={`${k}.compare.credit`} as="span" className="rights" plain>{e.compare.credit}</Edit>}
            </figcaption>
          </figure>
        )}
        {e.flickr && (
          <div className="entry-flickr">
            <a className="flickr-btn" href={e.flickr.href} target="_blank" rel="noopener noreferrer" aria-label={`${e.flickr.label}: ${e.flickr.note} (opens in a new tab)`}>
              <span className="flickr-dots" aria-hidden="true"><i /><i /></span>
              <Edit k={`${k}.flickr.label`} as="span" plain>{e.flickr.label}</Edit>
              <svg className="flickr-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            {e.flickr.note && <Edit k={`${k}.flickr.note`} className="flickr-note" plain>{e.flickr.note}</Edit>}
          </div>
        )}
        {e.source && <p className="entry-source"><Edit k="story.sourceword" as="span" plain>Source:</Edit> <Edit k={`${k}.source`} as="span" plain>{e.source}</Edit></p>}
      </div>
    </article>
  )
}

function Timeline() {
  const ref = useRef(null)
  const { active, inView, past } = useTimeTravel(ref)
  const { content } = useSite()
  let i = -1
  return (
    <div className={`timeline${inView ? ' live' : ''}${past ? ' past' : ''}`} ref={ref}>
      <div className="dial" aria-hidden="true">
        <span className="dial-era">{active.eraName}</span>
        <span className="dial-year" key={active.year}>{active.year}</span>
      </div>
      <div className="rail" aria-hidden="true"><i /></div>
      {eras.map((era) => (
        <section className={`era era-${era.id}`} id={era.id} key={era.id} data-era-name={(content.text[`story.${era.id}.name`] || '').trim() || era.name} style={ageStyle(AGES[i + 1])}>
          <header className="era-head wrap reveal">
            <Edit k={`story.${era.id}.range`} className="eyebrow" plain>{era.range}</Edit>
            <Edit k={`story.${era.id}.name`} as="h2" heading>{era.name}</Edit>
            <Edit k={`story.${era.id}.intro`} className="lead" rich>{era.intro}</Edit>
          </header>
          <div className="wrap entries">
            {era.entries.map((e) => { i += 1; return <Entry key={i} e={{ ...e, era: era.id }} index={i} /> })}
          </div>
        </section>
      ))}
    </div>
  )
}

function Footer() {
  const contact = useContact()
  const { editor } = useSite()
  const editing = !!(editor && editor.editing)
  const socialFallback = useMemo(() => [
    { label: 'Instagram', href: contact.instagram },
    { label: 'Facebook', href: contact.facebook },
    { label: 'Tripadvisor', href: contact.tripadvisor },
  ], [contact.instagram, contact.facebook, contact.tripadvisor])
  const social = useList('footer.social', socialFallback, SOCIAL_SPEC_BASE.fields)
  const socialSpec = useMemo(() => ({ ...SOCIAL_SPEC_BASE, fallback: socialFallback }), [socialFallback])
  const cr = useList('footer.credits', CREDITS_SPEC.fallback, CREDITS_SPEC.fields)
  const crSpec = useMemo(() => ({ ...CREDITS_SPEC, extras: [{ k: 'footer.credits.summary', label: 'Heading', fallback: 'Picture credits and sources' }], extrasTitle: 'Heading' }), [])
  const summary = useTextValue('footer.credits.summary', 'Picture credits and sources')
  const shownSocial = social.items.filter((x) => x.label && safeLinkHref(x.href))
  return (
    <footer className="site-footer">
      <div className="wrap">
        <Edit k="footer.line" className="foot-line" plain>The warmest welcome at an inn.</Edit>
        <EditLink k={ON_HISTORY ? 'footer.back.story' : 'footer.back'} className="pill light" href={ON_HISTORY ? HOME : '#top'} newTab={false}>{ON_HISTORY ? 'Back to today' : 'Back to the top'}</EditLink>
        <div className="foot-grid">
          {/* Homepage footer leaves out the address, phone and email (Find us already shows them); Our story keeps them */}
          {ON_HISTORY && (
            <p>{contact.address.join(', ')}<br /><a href={contact.phoneHref}>{contact.phone}</a> · <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          )}
          <p>{shownSocial.map((x, i) => <React.Fragment key={i}>{i > 0 && ' · '}<a {...linkProps(x.href)}>{x.label}</a></React.Fragment>)}</p>
          <ListEditButton spec={CONTACT_SPEC} label="Edit address and contact details" />
          <ListEditButton spec={socialSpec} label="Edit footer links" />
        </div>
        <details className="credits" open={editing || undefined}>
          <summary>{summary}</summary>
          <ul>{cr.items.map((c, i) => <ItemEdit key={i} list={cr} i={i} f="text" as="li" rich />)}</ul>
          <ListEditButton spec={crSpec} label="Add, remove or reorder credits" />
        </details>
      </div>
    </footer>
  )
}

function MobileBar() {
  const contact = useContact()
  const call = useTextValue('nav.call', 'Call')
  return (
    <div className="mobile-bar">
      <a href={contact.phoneHref}>{call}</a>
      <EditLink k="nav.book" className="main" href={home('#book')} mapHref={home}>Book a room</EditLink>
    </div>
  )
}

const SECTIONS = { stay: Stay, eat: Eat, whatson: WhatsOn, hire: HireAndVisit }

function HomeSections() {
  const order = useOrder()
  return order.map((id) => { const S = SECTIONS[id]; return <S key={id} /> })
}

export default function App() {
  return (
    <SiteProvider>
      <Page />
      <EditorGate />
    </SiteProvider>
  )
}

function Page() {
  useReveal()
  return (
    <>
      <Header />
      {ON_HISTORY ? (
        <main className="history-page">
          <TimeGate />
          <Timeline />
        </main>
      ) : (
        <main>
          <Hero />
          <ThisWeek />
          <HomeSections />
        </main>
      )}
      <Footer />
      <MobileBar />
    </>
  )
}
