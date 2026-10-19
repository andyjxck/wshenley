import React, { useEffect, useRef, useState } from 'react'
import { contact, hero, rooms, food, whatsOn, privateHire, nearby, eras, credits } from './content.js'
import BookingWidget, { LiveRooms } from './BookingWidget.jsx'
import { useTimeTravel, useReveal } from './useTimeTravel.js'

const NAV = [
  ['Stay', '#stay'],
  ['Eat & drink', '#eat'],
  ['What’s on', '#whats-on'],
  ['Private hire', '#hire'],
  ['Our story', '#story'],
  ['Find us', '#visit'],
]

const ALL = eras.flatMap((e) => e.entries.map((x) => ({ ...x, era: e.id })))
const TOTAL = ALL.length
const OLDEST = 1352
const YEARS_BACK = new Date().getFullYear() - OLDEST

// How old an entry looks: 0 = today, 1 = oldest
function gradeFor(index) {
  const t = index / Math.max(1, TOTAL - 1)
  const ease = (a, b, x) => Math.min(1, Math.max(0, (x - a) / (b - a)))
  const sepia = 0.85 * ease(0.02, 0.4, t)
  const grey = ease(0.42, 0.72, t)
  const contrast = 1 + 0.12 * t
  const bright = 1 - 0.04 * t
  return `sepia(${sepia.toFixed(3)}) grayscale(${grey.toFixed(3)}) contrast(${contrast.toFixed(3)}) brightness(${bright.toFixed(3)})`
}

function Header({ open, setOpen }) {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])
  return (
    <header className={`site-header${solid ? ' solid' : ''}${open ? ' menu-open' : ''}`}>
      <div className="bar">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <b>The White Swan</b>
          <span>Henley-in-Arden · 1352</span>
        </a>
        <nav className="desk-nav" aria-label="Main">
          {NAV.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
        </nav>
        <div className="bar-r">
          <a className="pill dark" href="#book">Book a room</a>
          <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            <i /><i />
          </button>
        </div>
      </div>
      <div className="menu" hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.map(([l, h], i) => (
            <a key={h} href={h} style={{ '--i': i }} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </nav>
        <div className="menu-foot">
          <a href={contact.phoneHref}>{contact.phone}</a>
          <span>{contact.hours}</span>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-img" src={hero.image} alt="The White Swan, Henley-in-Arden" fetchpriority="high" />
      <div className="hero-shade" />
      <div className="hero-copy wrap">
        <h1>{hero.title}<em>{hero.titleSince}</em></h1>
        <p className="hero-intro">{hero.intro}</p>
        <div className="hero-cta">
          <a className="pill light" href="#book">Check availability</a>
          <a className="pill ghost" href="#eat">Eat & drink</a>
        </div>
      </div>
      <a className="hero-hint" href="#book" aria-label="Scroll down"><span>Open daily, 12pm to 11pm</span></a>
    </section>
  )
}

function Book() {
  return (
    <section className="book reveal" id="book">
      <div className="wrap">
        <div className="book-head">
          <h2 className="h-sm">Book direct</h2>
          <p className="muted">Pick your dates and book with us. No third-party site.</p>
        </div>
        <BookingWidget />
      </div>
    </section>
  )
}

function Stay() {
  return (
    <section className="section" id="stay">
      <div className="wrap">
        <p className="eyebrow reveal">Stay</p>
        <h2 className="reveal">Rooms above the inn</h2>
        <p className="lead reveal">{rooms.intro}</p>
      </div>
      <div className="gallery reveal">
        {rooms.images.map((im, i) => <img key={i} src={im.src} alt={im.alt} loading="lazy" />)}
      </div>
      <div className="wrap">
        <div className="rooms">
          {rooms.types.map((r) => (
            <article className="room reveal" key={r.name}>
              <div className="room-top">
                <h3>{r.name}</h3>
                {r.price && <p className="price"><b>{r.price}</b> <span>{r.per}</span></p>}
              </div>
              <p>{r.text}</p>
              <a className="text-link" href="#book">Check availability</a>
            </article>
          ))}
        </div>
        <div className="live-wrap">
          <h3 className="h-label reveal">Each room, with live prices</h3>
          <LiveRooms />
        </div>
        <div className="two-col reveal">
          <div>
            <h3 className="h-label">In every room</h3>
            <ul className="ticks">{rooms.amenities.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
          <div>
            <h3 className="h-label">Good to know</h3>
            <ul className="plain">{rooms.terms.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Eat() {
  return (
    <section className="section eat" id="eat">
      <div className="wrap split">
        <div className="split-img reveal"><img src={food.image} alt="Inside the White Swan" loading="lazy" /></div>
        <div>
          <p className="eyebrow reveal">Eat & drink</p>
          <h2 className="reveal">Homemade pub classics</h2>
          <p className="lead reveal">{food.intro}</p>
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
            <h3>{d.href ? <a href={d.href} target="_blank" rel="noreferrer">{d.name}</a> : d.name}</h3>
            <p>{d.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhatsOn() {
  return (
    <section className="whats-on" id="whats-on">
      <img src={whatsOn.image} alt="" loading="lazy" />
      <div className="whats-shade" />
      <div className="wrap whats-copy">
        <p className="eyebrow reveal">What’s on</p>
        <h2 className="reveal">{whatsOn.headline}</h2>
        <p className="lead reveal">{whatsOn.text}</p>
        <div className="reveal">
          <a className="pill light" href={contact.instagram} target="_blank" rel="noreferrer">See this week on Instagram</a>
        </div>
      </div>
    </section>
  )
}

function Hire() {
  return (
    <section className="section" id="hire">
      <div className="wrap">
        <p className="eyebrow reveal">Private hire</p>
        <h2 className="reveal">Your party, our rooms</h2>
        <p className="lead reveal">{privateHire.intro}</p>
        <div className="spaces">
          {privateHire.spaces.map((s) => (
            <article className="space reveal" key={s.name}><h3>{s.name}</h3><p>{s.text}</p></article>
          ))}
        </div>
        <div className="reveal"><a className="pill dark" href={contact.phoneHref}>Call {contact.phone} to plan it</a></div>
      </div>
    </section>
  )
}

function Visit() {
  return (
    <section className="section visit" id="visit">
      <div className="wrap">
        <p className="eyebrow reveal">Find us</p>
        <h2 className="reveal">On the High Street</h2>
        <div className="visit-grid reveal">
          <div>
            <h3 className="h-label">Address</h3>
            <p>{contact.address.map((l) => <span className="line" key={l}>{l}</span>)}</p>
            <a className="text-link" href={contact.mapsHref} target="_blank" rel="noreferrer">Open in Maps</a>
          </div>
          <div>
            <h3 className="h-label">Open</h3>
            <p>{contact.hours}</p>
            <p className="muted">Free car park at the rear for guests.</p>
          </div>
          <div>
            <h3 className="h-label">Get in touch</h3>
            <p><a href={contact.phoneHref}>{contact.phone}</a><br /><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          </div>
        </div>
        <h3 className="h-label reveal">Nearby</h3>
        <ul className="nearby reveal">
          {nearby.map((n) => (
            <li key={n.name}><a href={n.href} target="_blank" rel="noreferrer">{n.name}</a><span>{n.note}</span></li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function TimeGate() {
  return (
    <section className="gate" id="story">
      <div className="wrap">
        <p className="eyebrow reveal">Our story</p>
        <h2 className="gate-title reveal">Keep scrolling.<br /><em>Go back {YEARS_BACK} years.</em></h2>
        <p className="lead reveal">Every step down this page is a step back in time, from the Swan you know to the castle across the road.</p>
        <nav className="era-jump reveal" aria-label="Jump to an era">
          {eras.map((e) => <a key={e.id} href={`#${e.id}`}><b>{e.name}</b><span>{e.range}</span></a>)}
        </nav>
        <div className="gate-arrow" aria-hidden="true" />
      </div>
    </section>
  )
}

function Entry({ e, index }) {
  const paras = e.body ? e.body.split(/\n\s*\n/) : []
  return (
    <article className={`entry reveal${e.image ? ' has-img' : ''}${e.quote ? ' has-quote' : ''}`} data-year={e.year} data-era={e.era} id={`y-${index}`}>
      <div className="entry-year"><span>{e.year}</span></div>
      <div className="entry-main">
        <h3>{e.title}</h3>
        {e.quote && <blockquote>{e.quote}</blockquote>}
        <p className="entry-text">{e.text}</p>
        {paras.map((p, i) => <p className="entry-body" key={i}>{p}</p>)}
        {e.look && <p className="look"><span>Look for it</span>{e.look}</p>}
        {e.image && (
          <figure className="entry-fig">
            <div className="frame"><img src={e.image} alt={e.title} loading="lazy" style={{ filter: gradeFor(index) }} /></div>
            <figcaption>
              {e.creditHref ? <a href={e.creditHref} target="_blank" rel="noreferrer">{e.credit}</a> : e.credit}
              {e.rights && <span className="rights">{e.rights}</span>}
            </figcaption>
          </figure>
        )}
      </div>
    </article>
  )
}

function Timeline() {
  const ref = useRef(null)
  const { active, inView } = useTimeTravel(ref)
  let i = -1
  return (
    <div className={`timeline${inView ? ' live' : ''}`} ref={ref}>
      <div className="dial" aria-hidden="true">
        <span className="dial-era">{active.eraName}</span>
        <span className="dial-year" key={active.year}>{active.year}</span>
      </div>
      <div className="rail" aria-hidden="true"><i /></div>
      {eras.map((era) => (
        <section className={`era era-${era.id}`} id={era.id} key={era.id} data-era-name={era.name}>
          <header className="era-head wrap reveal">
            <p className="eyebrow">{era.range}</p>
            <h2>{era.name}</h2>
            <p className="lead">{era.intro}</p>
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
        <a className="pill light" href="#top">Back to today</a>
        <div className="foot-grid">
          <p>{contact.address.join(', ')}<br /><a href={contact.phoneHref}>{contact.phone}</a> · <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          <p><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a> · <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a> · <a href={contact.tripadvisor} target="_blank" rel="noreferrer">Tripadvisor</a></p>
        </div>
        <details className="credits">
          <summary>Picture credits and sources</summary>
          <ul>{credits.map((c) => <li key={c}>{c}</li>)}</ul>
        </details>
      </div>
    </footer>
  )
}

function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href={contact.phoneHref}>Call</a>
      <a className="main" href="#book">Book a room</a>
    </div>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  useReveal()
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <main>
        <Hero />
        <Book />
        <Stay />
        <Eat />
        <WhatsOn />
        <Hire />
        <Visit />
        <TimeGate />
        <Timeline />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
