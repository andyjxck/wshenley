// Runs after `vite build` (see the build script in package.json). For each page it:
//   1. renders the page's words into the built HTML (dist/index.html and dist/history/index.html),
//      so search engines and AI crawlers that don't run JavaScript see the real page, not an empty <div>;
//   2. adds schema.org structured data (JSON-LD) about the White Swan;
// and writes dist/llms.txt.
//
// The words come from content.js plus whatever editors have published (Firestore siteContent/published),
// read once at build time. If Firestore can't be reached the built-in words are used.
//
// Visitors see exactly what they saw before: the prerendered copy is hidden by a small style rule and
// main.jsx renders the live site in its place (createRoot replaces it), loading published edits as always.
// The copy only shows when JavaScript is turned off. It has no element ids (so links like #book behave
// as before), its pictures sit in <noscript> (so they are never downloaded) and its videos are links.
//
// If anything here fails, the build still finishes and the pages are left as Vite made them.
import { spawnSync } from 'node:child_process'
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = resolve(ROOT, 'dist')
const SSR = resolve(ROOT, 'dist-ssr/entry-server.js')
const PUBLISHED_FILE = resolve(ROOT, 'dist-ssr/published.json')
const SITE = 'https://www.thewhiteswanhenley.co.uk'
const CACHE_KEY = 'ws-site-published-v1' // same key site.jsx caches published content under
const PAGES = [
  { page: 'home', file: 'index.html', rel: './' },
  { page: 'history', file: 'history/index.html', rel: '../' },
]

// ---------------------------------------------------------------- child: render one page
// Each page renders in its own process, because App.jsx decides which page it is when it loads.
async function renderChild(page) {
  const published = readFileSync(PUBLISHED_FILE, 'utf8')
  globalThis.document = { documentElement: { dataset: page === 'history' ? { page: 'history' } : {} }, hidden: false }
  globalThis.localStorage = { getItem: (k) => (k === CACHE_KEY ? published : null), setItem() {}, removeItem() {} }
  const m = await import(pathToFileURL(SSR).href)
  process.stdout.write(m.render())
}

// ---------------------------------------------------------------- main
async function main() {
  let m
  try {
    m = await import(pathToFileURL(SSR).href)
  } catch (e) {
    console.warn('[prerender] skipped, could not load the server build:', e.message)
    return
  }
  const published = m.cleanContent(await loadPublished())
  writeFileSync(PUBLISHED_FILE, JSON.stringify(published))
  const homeHtml = readFileSync(resolve(DIST, 'index.html'), 'utf8')
  const homeDescription = meta(homeHtml, 'description')
  const facts = businessFacts(m, published, homeDescription)

  for (const p of PAGES) {
    const path = resolve(DIST, p.file)
    let html = readFileSync(path, 'utf8')
    try {
      const r = spawnSync(process.execPath, [fileURLToPath(import.meta.url), '--render', p.page], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
      if (r.status !== 0 || !r.stdout) throw new Error((r.stderr || 'no output').trim().split('\n').slice(-3).join(' '))
      const body = tidy(r.stdout, p.rel)
      if (!html.includes('<div id="root"></div>')) throw new Error('no empty #root in ' + p.file)
      html = html.replace('<div id="root"></div>', () => `<div id="root"><div class="ws-prerender">${body}</div></div>`)
      html = html.replace('</head>', () => `<style>.ws-prerender{display:none}</style>\n<noscript><style>.ws-prerender{display:block}.ws-prerender .reveal{opacity:1;transform:none}</style></noscript>\n</head>`)
      console.log(`[prerender] ${p.file}: ${body.length} characters of page markup`)
    } catch (e) {
      console.warn(`[prerender] ${p.file}: page markup skipped:`, e.message)
    }
    try {
      const ld = jsonLd(facts, html)
      html = html.replace('</head>', () => `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>\n</head>`)
    } catch (e) {
      console.warn(`[prerender] ${p.file}: structured data skipped:`, e.message)
    }
    writeFileSync(path, html)
  }

  try {
    writeFileSync(resolve(DIST, 'llms.txt'), llmsTxt(facts))
    console.log('[prerender] llms.txt written')
  } catch (e) {
    console.warn('[prerender] llms.txt skipped:', e.message)
  }
  rmSync(PUBLISHED_FILE, { force: true })
}

// Published editor changes, the same document every visitor's browser reads. Built-in words if it fails.
async function loadPublished() {
  try {
    const { initializeApp } = await import('firebase/app')
    const { getFirestore, doc, getDoc } = await import('firebase/firestore/lite')
    const app = initializeApp({ apiKey: 'AIzaSyDe67skrRZG6TcHFcDUI45zY6Az4Jn5Y2I', projectId: 'twsched-f8b16' }, 'prerender')
    const snap = await withTimeout(getDoc(doc(getFirestore(app), 'siteContent', 'published')), 15000)
    const data = snap.exists() ? snap.data() : {}
    console.log(`[prerender] published edits loaded (${Object.keys(data.text || {}).length} words, ${Object.keys(data.photos || {}).length} photo spots)`)
    return data
  } catch (e) {
    console.warn('[prerender] published edits not loaded, using the built-in words:', e.message)
    return {}
  }
}

function withTimeout(promise, ms) {
  let t
  return Promise.race([promise, new Promise((_, rej) => { t = setTimeout(() => rej(new Error('timed out')), ms) })]).finally(() => clearTimeout(t))
}

// ---------------------------------------------------------------- tidy the rendered markup
function tidy(html, rel) {
  return html
    // built-in pictures: /assets/... becomes relative, like the rest of the site (works under any base path)
    .replace(/(["(])\/assets\//g, `$1${rel}assets/`)
    // no element ids: the live site supplies them, so #links and duplicate ids behave as before
    .replace(/ id="[^"]*"/g, '')
    .replace(/ for="[^"]*"/g, '')
    // pictures: inside <noscript>, so browsers running JavaScript never download them for the hidden copy
    // (Chrome fetches hidden lazy pictures too, which would change how the live page loads)
    .replace(/ fetchpriority="[^"]*"/gi, '')
    .replace(/<img\b[^>]*>/g, (tag) => `<noscript>${tag.replace(/^<img(?![^>]*\bloading=)/, '<img loading="lazy"')}</noscript>`)
    // videos: a link instead of an embedded player (hidden embeds still load)
    .replace(/<iframe\b[^>]*?src="https:\/\/www\.youtube-nocookie\.com\/embed\/([\w-]+)[^"]*"[^>]*?title="([^"]*)"[^>]*>(?:<\/iframe>)?/g,
      (_, v, title) => `<a href="https://www.youtube.com/watch?v=${v}">Watch on YouTube: ${title}</a>`)
    .replace(/<iframe\b[^>]*>(?:<\/iframe>)?/g, '')
}

// ---------------------------------------------------------------- facts about the White Swan
// Every fact comes from the site's own content (content.js, or the editor's published version of it).
// Anything that can't be read cleanly is left out.
function businessFacts(m, published, description) {
  const text = published.text || {}
  const contact = m.parseRecord(text['rec:contact'], m.CONTACT_FIELDS, m.CONTACT_FALLBACK) || m.CONTACT_FALLBACK
  const amenities = m.parseList(text['list:home.amenities'], m.AMENITIES_SPEC.fields) || m.AMENITIES_SPEC.fallback
  const terms = m.parseList(text['list:home.terms'], m.TERMS_SPEC.fields) || m.TERMS_SPEC.fallback
  const lines = String(contact.address || '').split('\n').map((s) => s.trim()).filter(Boolean)
  const brand = (text['site.brand'] || '').trim() || 'The White Swan'
  const heroPhoto = (published.photos || {})['home.hero']
  const heroSrc = Array.isArray(heroPhoto) && heroPhoto[0] && /^https:\/\//.test(heroPhoto[0].url || heroPhoto[0].src || '')
    ? (heroPhoto[0].url || heroPhoto[0].src)
    : (/^\/assets\//.test(m.hero.image) ? SITE + m.hero.image : '')
  const termText = terms.map((t) => t.text).join(' ')
  const https = (u) => (/^https:\/\//.test(u || '') ? u : '')
  return {
    name: brand,
    description,
    phone: contact.phone || '',
    tel: (m.phoneHref(contact.phone) || '').replace(/^tel:/, ''),
    email: /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(contact.email || '') ? contact.email : '',
    addressLines: lines,
    address: postalAddress(lines),
    hoursText: (contact.hours || '').trim(),
    hours: openingHours(contact.hours),
    geo: m.swanLocation,
    maps: https(contact.mapsHref),
    image: heroSrc,
    sameAs: [contact.instagram, contact.facebook, contact.tripadvisor].map(https).filter(Boolean),
    amenities: amenities.map((a) => (a.text || '').trim()).filter(Boolean),
    checkin: clock((termText.match(/check[ -]?in from ([0-9.:]+\s*[ap]m)/i) || [])[1]),
    checkout: clock((termText.match(/check[ -]?out by ([0-9.:]+\s*[ap]m)/i) || [])[1]),
  }
}

// '2pm' -> '14:00', '9.30pm' -> '21:30'
function clock(s) {
  const x = String(s || '').trim().match(/^(\d{1,2})(?:[.:](\d{2}))?\s*([ap]m)$/i)
  if (!x) return ''
  let h = Number(x[1]) % 12
  if (x[3].toLowerCase() === 'pm') h += 12
  if (h > 23 || Number(x[2] || 0) > 59) return ''
  return `${String(h).padStart(2, '0')}:${x[2] || '00'}`
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// 'Monday to Sunday, 12pm to 11pm' -> one opening hours entry. Anything else is left out.
function openingHours(s) {
  const x = String(s || '').trim().match(/^(\w+day) to (\w+day),?\s+(\S+\s*[ap]m) to (\S+\s*[ap]m)\.?$/i)
  if (!x) return null
  const a = DAYS.findIndex((d) => d.toLowerCase() === x[1].toLowerCase())
  const b = DAYS.findIndex((d) => d.toLowerCase() === x[2].toLowerCase())
  const opens = clock(x[3])
  const closes = clock(x[4])
  if (a < 0 || b < a || !opens || !closes) return null
  return { '@type': 'OpeningHoursSpecification', dayOfWeek: DAYS.slice(a, b + 1).map((d) => `https://schema.org/${d}`), opens, closes }
}

// ['100 High Street', 'Henley-in-Arden', 'Warwickshire B95 5BY']
function postalAddress(lines) {
  if (lines.length < 3) return null
  const last = lines[lines.length - 1]
  const pc = last.match(/\b([A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2})$/i)
  if (!pc) return null
  const region = last.slice(0, pc.index).replace(/[,\s]+$/, '')
  const out = {
    '@type': 'PostalAddress',
    streetAddress: lines.slice(0, -2).join(', '),
    addressLocality: lines[lines.length - 2],
    postalCode: pc[1].toUpperCase(),
    addressCountry: 'GB', // a UK postcode
  }
  if (region) out.addressRegion = region
  return out
}

function meta(html, name) {
  const x = html.match(new RegExp(`<meta name="${name}" content="([^"]*)"`))
  return x ? decode(x[1]) : ''
}
const decode = (s) => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')

// ---------------------------------------------------------------- JSON-LD
function jsonLd(f, pageHtml) {
  const canonical = (pageHtml.match(/<link rel="canonical" href="([^"]+)"/) || [])[1] || `${SITE}/`
  const title = decode((pageHtml.match(/<title>([^<]*)<\/title>/) || [])[1] || '')
  const business = {
    '@type': ['Hotel', 'BarOrPub', 'Restaurant'],
    '@id': `${SITE}/#business`,
    name: f.name,
    url: `${SITE}/`,
  }
  if (f.description) business.description = f.description
  if (f.image) business.image = f.image
  if (f.tel) business.telephone = f.tel
  if (f.email) business.email = f.email
  if (f.address) business.address = f.address
  if (f.geo && typeof f.geo.lat === 'number' && typeof f.geo.lng === 'number') business.geo = { '@type': 'GeoCoordinates', latitude: f.geo.lat, longitude: f.geo.lng }
  if (f.maps) business.hasMap = f.maps
  if (f.hours) business.openingHoursSpecification = [f.hours]
  if (f.checkin) business.checkinTime = f.checkin
  if (f.checkout) business.checkoutTime = f.checkout
  if (f.amenities.length) business.amenityFeature = f.amenities.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true }))
  if (f.sameAs.length) business.sameAs = f.sameAs
  const page = {
    '@type': canonical.endsWith('/history/') ? 'AboutPage' : 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    inLanguage: 'en-GB',
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#business` },
  }
  const desc = meta(pageHtml, 'description')
  if (desc) page.description = desc
  return {
    '@context': 'https://schema.org',
    '@graph': [
      business,
      { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: f.name, inLanguage: 'en-GB', publisher: { '@id': `${SITE}/#business` } },
      page,
    ],
  }
}

// ---------------------------------------------------------------- llms.txt (llmstxt.org format)
function llmsTxt(f) {
  const where = f.addressLines.length ? ` at ${f.addressLines.join(', ')}` : ''
  const details = [
    f.hoursText && `Open ${f.hoursText}.`,
    f.phone && `Phone ${f.phone}.`,
    f.email && `Email ${f.email}.`,
  ].filter(Boolean).join(' ')
  return [
    `# ${f.name}, Henley-in-Arden`,
    '',
    `> ${f.description}`,
    '',
    `${f.name} is a hotel, bar and restaurant${where}. ${details}`.trim(),
    '',
    '## Pages',
    '',
    `- [Home](${SITE}/): rooms and booking, food and drink, what's on, private hire, and how to find us`,
    `- [Our story](${SITE}/history/): the history of the White Swan, from 1352 to today`,
    '',
  ].join('\n')
}

// ---------------------------------------------------------------- run (last, so every constant above is set)
if (process.argv[2] === '--render') renderChild(process.argv[3])
else await main()
