import React, { useEffect, useRef, useState } from 'react'
import { contact, hero, rooms, food, whatsOn, privateHire, nearby, nearbyNote, eras, credits } from './content.js'
import BookingWidget from './BookingWidget.jsx'
import RoomCards from './RoomCards.jsx'
import { useLiveAvailability, shortDate } from './liveAvailability.js'
import WeekCalendar from './WeekCalendar.jsx'
import { useTimeTravel, useReveal } from './useTimeTravel.js'
import { agesFor, gradeFor } from './ageing.js'
import EnquiryForm from './EnquiryForm.jsx'
import BeforeAfter from './BeforeAfter.jsx'
import { SiteProvider, EditorGate, Edit, Slideshow, usePhotos, PhotoEditButton, useOrder, useTextValue, useSite } from './site.jsx'
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
          <b>The White Swan</b>
          <span>Henley-in-Arden · 1352</span>
        </a>
        <div className="bar-r">
          <a className="page-switch" href={SWITCH[1]}>{SWITCH[0]}</a>
          <a className="pill dark" href={home('#book')}>Book a room</a>
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
  return (
    <section className="hero" id="top">
      <Slideshow photos={photos} imgClass="hero-img" imgProps={{ fetchpriority: 'high' }} label="Photos of the White Swan" />
      <div className="hero-shade" />
      <div className="hero-copy wrap">
        <PhotoEditButton k="home.hero" fallback={HERO_PHOTOS} label="Edit hero photos" />
        <p className="hero-place"><i className="hrule" />{hero.place}<i className="hrule" /></p>
        <h1 className="hero-title" aria-label={`${cased.join(' ')} since ${hero.since}`}>
          {hero.title.map((t, i) => (
            <span className={`ht ht-${i + 1}`} key={i} aria-hidden="true">
              <Edit k={`home.hero.title.${i}`} as="span" heading caseFn={(v) => caseLines(lines.map((l, j) => (j === i ? v : l)))[i]} style={{ '--d': `${0.15 + i * 0.14}s` }}>{t}</Edit>
            </span>
          ))}
        </h1>
        <div className="hero-since" aria-hidden="true">
          <i className="hrule long" />
          <span className="since-word">Since</span>
          <b>{hero.since}</b>
          <i className="hrule long" />
        </div>
        <Edit k="home.hero.intro" className="hero-intro" rich>{hero.intro}</Edit>
        <div className="hero-cta">
          <a className="pill light" href="#book">Book a room</a>
          <a className="pill ghost" href="#eat">Eat & drink</a>
        </div>
      </div>
      <a className="hero-hint" href="#this-week" aria-label="Scroll down"><span>Open daily, 12pm to 11pm</span></a>
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
function Book({ avail }) {
  return (
    <div className="book reveal" id="book">
      <div className="book-head">
        <Edit k="home.stay.book" as="h3" className="h-sm" heading>Book direct</Edit>
      </div>
      <BookingWidget />
      <LiveStatus avail={avail} />
    </div>
  )
}

// One line under the booking bar saying what the room cards below now show.
function LiveStatus({ avail }) {
  const { status, stay, byCode } = avail
  if (status === 'idle' || !stay) return <p className="live-status" role="status" aria-live="polite" />
  const when = `${shortDate(stay.checkIn)} to ${shortDate(stay.checkOut)}`
  const nights = `${stay.nights} night${stay.nights === 1 ? '' : 's'}`
  let msg
  if (status === 'loading') msg = <>Checking rooms for {when}…</>
  else if (status === 'error') msg = <>We couldn’t check rooms for {when} just now. Press Search to see what’s free, or call us on <a href={contact.phoneHref}>{contact.phone}</a>.</>
  else {
    const free = rooms.list.filter((r) => byCode[r.code] && byCode[r.code].state === 'free')
    if (!free.length) msg = <>Sorry, no rooms are free for {when}. Try other dates, or call us on <a href={contact.phoneHref}>{contact.phone}</a>.</>
    else msg = <><strong>{when}, {nights}:</strong> {free.length === 1 ? '1 room is' : `${free.length} rooms are`} free ({free.map((r) => r.name).join(', ')}).{stay.withChildren ? '' : ' Prices are for the whole stay.'}</>
  }
  return <p className={`live-status ${status}`} role="status" aria-live="polite">{msg}</p>
}

function Stay() {
  const avail = useLiveAvailability()
  return (
    <section className="section" id="stay">
      <div className="wrap">
        <p className="eyebrow reveal">Stay</p>
        <Edit k="home.stay.heading" as="h2" className="reveal" heading>Rooms above the inn</Edit>
      </div>
      <div className="wrap">
        <Book avail={avail} />
        <RoomCards avail={avail} />
        <div className="two-col reveal">
          <div>
            <Edit k="home.stay.amenities" as="h3" className="h-label" heading>In every room</Edit>
            <ul className="ticks">{rooms.amenities.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
          <div>
            <Edit k="home.stay.terms" as="h3" className="h-label" heading>Good to know</Edit>
            <ul className="plain">{rooms.terms.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const EAT_PHOTOS = [{ src: food.image, alt: food.alt }]

function Eat() {
  const photos = usePhotos('home.eat', EAT_PHOTOS)
  return (
    <section className="section eat" id="eat">
      <div className="wrap split">
        <div className="split-img reveal">
          <Slideshow photos={photos} wrapClass="stack" imgProps={{ loading: 'lazy' }} label="Food photos" />
          <PhotoEditButton k="home.eat" fallback={EAT_PHOTOS} />
        </div>
        <div>
          <p className="eyebrow reveal">Eat & drink</p>
          <Edit k="home.eat.heading" as="h2" className="reveal" heading>Homemade pub classics</Edit>
          <Edit k="home.eat.intro" className="lead reveal" rich>{food.intro}</Edit>
          <ul className="menus">
            {food.menus.map((m) => (
              <li className="reveal" key={m.name}>
                <a href={m.href} target={m.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <b>{m.name}</b><span>{m.when}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap drinks">
        {food.drinks.map((d) => (
          <div className="drink reveal" key={d.name}>
            <h3>{d.href ? <a href={d.href} target="_blank" rel="noreferrer">{titleCase(d.name)}</a> : titleCase(d.name)}</h3>
            <Edit k={`home.drinks.${slug(d.name)}.text`} rich>{d.text}</Edit>
          </div>
        ))}
      </div>
    </section>
  )
}

// The bar photo stays put behind the section (like the hero) while the words scroll over it.
const WHATS_PHOTOS = [{ src: whatsOn.image, alt: '' }]

function WhatsOn() {
  const photos = usePhotos('home.whatson', WHATS_PHOTOS)
  return (
    <section className="whats-on" id="whats-on">
      <Slideshow photos={photos} imgClass="whats-img" label="Photos of the bar" />
      <div className="whats-shade" />
      <div className="wrap whats-copy">
        <PhotoEditButton k="home.whatson" fallback={WHATS_PHOTOS} label="Edit background photos" />
        <p className="eyebrow reveal">What’s on</p>
        <Edit k="home.whatson.heading" as="h2" className="reveal" heading>{whatsOn.headline}</Edit>
        <Edit k="home.whatson.text" className="lead reveal" rich>{whatsOn.text}</Edit>
        <div className="reveal whats-cta">
          <a className="pill light" href={contact.instagram} target="_blank" rel="noreferrer">See this week on Instagram</a>
        </div>
      </div>
    </section>
  )
}

// Private hire and Find us share one section: on wide screens the hire intro and the
// On the High Street details sit in the left column beside the enquiry form, and Nearby
// runs full width underneath. On smaller screens it all stacks in that order.
function HireAndVisit() {
  return (
    <section className="section hire-visit" id="hire">
      <div className="wrap hv-layout">
        <div className="hire-intro">
          <p className="eyebrow reveal">Private hire</p>
          <Edit k="home.hire.heading" as="h2" className="reveal" heading>{privateHire.headline}</Edit>
          <Edit k="home.hire.intro" className="lead reveal" rich>{privateHire.intro}</Edit>
        </div>
        <div className="hv-form">
          <EnquiryForm />
        </div>
        <div className="findus" id="visit">
          <p className="eyebrow reveal">Find us</p>
          <Edit k="home.visit.heading" as="h2" className="reveal" heading>On the High Street</Edit>
          <div className="visit-grid reveal">
            <div>
              <Edit k="home.visit.address" as="h3" className="h-label" heading>Address</Edit>
              <p>{contact.address.map((l) => <span className="line" key={l}>{l}</span>)}</p>
              <a className="text-link" href={contact.mapsHref} target="_blank" rel="noreferrer">Open in Maps</a>
            </div>
            <div>
              <Edit k="home.visit.open" as="h3" className="h-label" heading>Open</Edit>
              <p>{contact.hours}</p>
              <p className="muted">Car park at the rear for guests.</p>
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
          {nearby.map((n) => (
            <li key={n.name}>
              <span className="nb-main"><a href={n.href} target="_blank" rel="noreferrer">{n.name}</a><small>{n.place}</small></span>
              <span className="nb-dist">{n.distance}</span>
            </li>
          ))}
        </ul>
        <Edit k="home.nearby.note" className="nearby-note muted reveal" rich>{nearbyNote}</Edit>
        <p className="story-link reveal"><a className="text-link" href={STORY}>Read the Swan’s story, from 1352 to today</a></p>
      </div>
    </section>
  )
}

function TimeGate() {
  return (
    <section className="gate" id="story">
      <div className="wrap">
        <p className="eyebrow reveal">Our story</p>
        <h2 className="gate-title reveal">{titleCase('Keep scrolling.')}<br /><em>{titleCase(`Go back ${YEARS_BACK} years.`)}</em></h2>
        <Edit k="story.gate.lead" className="lead reveal" rich>Every step down this page is a step back in time, from the Swan you know to the castle across the road.</Edit>
        <nav className="era-jump reveal" aria-label="Jump to an era">
          {eras.map((e) => <a key={e.id} href={`#${e.id}`}><b>{e.name}</b><span>{e.range}</span></a>)}
        </nav>
        <div className="gate-arrow" aria-hidden="true" />
      </div>
    </section>
  )
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
      <div className="entry-year"><span>{e.year}</span></div>
      <div className="entry-main">
        {e.kind && <p className={`kind kind-${kindSlug(e.kind)}`}>{e.kind}</p>}
        <Edit k={`${k}.title`} as="h3" heading>{e.title}</Edit>
        {e.quote && <blockquote>{e.quote}</blockquote>}
        <Edit k={`${k}.text`} className="entry-text" rich>{e.text}</Edit>
        {(e.body || editing || content.text[`${k}.body`]) && <Edit k={`${k}.body`} as="div" className="entry-body" paras>{e.body || ''}</Edit>}
        {e.look && <p className="look"><span>Look for it</span><Edit k={`${k}.look`} as="span" rich>{e.look}</Edit></p>}
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
                {e.creditHref ? <a href={e.creditHref} target="_blank" rel="noreferrer">{e.credit}</a> : e.credit}
                {e.licence && <a className="licence" href={e.licence.href} target="_blank" rel="license noreferrer">{e.licence.label}</a>}
                {e.changes && <span className="changes">{e.changes}</span>}
                {e.rights && <span className="rights">{e.rights}</span>}
              </figcaption>
            ) : (e.credit && <figcaption>{e.credit}</figcaption>)}
          </figure>
        )}
        <PhotoEditButton k={k} fallback={builtIn} credits label={photos.length ? 'Edit photos' : 'Add photos'} />
        {e.compare && (
          <figure className="entry-fig entry-compare">
            {e.compare.title && <p className="compare-title">{titleCase(e.compare.title)}</p>}
            <BeforeAfter {...e.compare} beforeFilter={gradeFor(age)} />
            <figcaption>
              <span>{e.compare.caption}</span>
              {e.compare.credit && <span className="rights">{e.compare.credit}</span>}
            </figcaption>
          </figure>
        )}
        {e.flickr && (
          <div className="entry-flickr">
            <a className="flickr-btn" href={e.flickr.href} target="_blank" rel="noopener noreferrer" aria-label={`${e.flickr.label}: ${e.flickr.note} (opens in a new tab)`}>
              <span className="flickr-dots" aria-hidden="true"><i /><i /></span>
              <span>{e.flickr.label}</span>
              <svg className="flickr-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            {e.flickr.note && <p className="flickr-note">{e.flickr.note}</p>}
          </div>
        )}
        {e.source && <p className="entry-source">Source: {e.source}</p>}
      </div>
    </article>
  )
}

function Timeline() {
  const ref = useRef(null)
  const { active, inView, past } = useTimeTravel(ref)
  let i = -1
  return (
    <div className={`timeline${inView ? ' live' : ''}${past ? ' past' : ''}`} ref={ref}>
      <div className="dial" aria-hidden="true">
        <span className="dial-era">{active.eraName}</span>
        <span className="dial-year" key={active.year}>{active.year}</span>
      </div>
      <div className="rail" aria-hidden="true"><i /></div>
      {eras.map((era) => (
        <section className={`era era-${era.id}`} id={era.id} key={era.id} data-era-name={era.name} style={ageStyle(AGES[i + 1])}>
          <header className="era-head wrap reveal">
            <p className="eyebrow">{era.range}</p>
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
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="foot-line">The warmest welcome at an inn.</p>
        <a className="pill light" href={ON_HISTORY ? HOME : '#top'}>{ON_HISTORY ? 'Back to today' : 'Back to the top'}</a>
        <div className="foot-grid">
          {/* Homepage footer leaves out the address, phone and email (Find us already shows them); Our story keeps them */}
          {ON_HISTORY && (
            <p>{contact.address.join(', ')}<br /><a href={contact.phoneHref}>{contact.phone}</a> · <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          )}
          <p><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a> · <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a> · <a href={contact.tripadvisor} target="_blank" rel="noreferrer">Tripadvisor</a></p>
        </div>
        <details className="credits">
          <summary>Picture credits and sources</summary>
          <ul>{credits.map((c, i) => (
            <li key={i}>{Array.isArray(c)
              ? c.map((p, j) => (typeof p === 'string' ? p : p.href.startsWith('mailto:') ? <a key={j} href={p.href}>{p.label}</a> : <a key={j} href={p.href} target="_blank" rel="noreferrer">{p.label}</a>))
              : c}</li>
          ))}</ul>
        </details>
      </div>
    </footer>
  )
}

function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href={contact.phoneHref}>Call</a>
      <a className="main" href={home('#book')}>Book a room</a>
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
