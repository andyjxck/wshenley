// Cookie choice + Google Analytics (GA4), UK GDPR / PECR style:
// - Nothing from Google loads until the visitor taps "Accept". Consent Mode v2 starts as denied.
// - Only analytics is ever granted; advertising signals stay denied and Google signals are off.
// - The choice is kept in this browser for 12 months (localStorage 'ws-cookie-choice'), then asked again.
// - "Cookie settings" in the footer reopens the banner. Saying no later turns analytics off and
//   removes the _ga cookies.
// - Not loaded for editors (the #admin editor session), so editor sign-ins never reach Google.
// - With no measurement ID in analytics.config.js, nothing loads and no banner shows.
import { GA_MEASUREMENT_ID } from './analytics.config.js'

const ID = /^G-[A-Z0-9]{4,}$/.test(GA_MEASUREMENT_ID || '') ? GA_MEASUREMENT_ID : ''
const KEY = 'ws-cookie-choice'
const MAX_AGE = 365 * 24 * 3600 * 1000
let loaded = false
let banner = null

export const analyticsEnabled = !!ID

function readChoice() {
  try {
    const c = JSON.parse(localStorage.getItem(KEY) || 'null')
    if (c && (c.analytics === 'granted' || c.analytics === 'denied') && Date.now() - c.t < MAX_AGE) return c.analytics
  } catch { /* */ }
  return null
}
function saveChoice(v) {
  try { localStorage.setItem(KEY, JSON.stringify({ v: 1, analytics: v, t: Date.now() })) } catch { /* */ }
}
function isEditor() {
  try { return location.hash === '#admin' || sessionStorage.getItem('ws-admin') === '1' } catch { return false }
}
function gtag() { window.dataLayer.push(arguments) }

function start() {
  if (loaded) { gtag('consent', 'update', { analytics_storage: 'granted' }); return }
  loaded = true
  gtag('consent', 'update', { analytics_storage: 'granted' })
  gtag('js', new Date())
  gtag('config', ID, {
    page_location: location.origin + location.pathname, // no query string or #fragment
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })
  const s = document.createElement('script')
  s.async = true
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ID)
  document.head.appendChild(s)
}

function stop() {
  if (loaded) gtag('consent', 'update', { analytics_storage: 'denied' })
  // remove Google Analytics cookies on this host and its parent domains
  const parts = location.hostname.split('.')
  const domains = ['']
  for (let i = 0; i < parts.length - 1; i++) domains.push('.' + parts.slice(i).join('.'))
  document.cookie.split(';').map((c) => c.trim().split('=')[0]).filter((n) => /^_ga/.test(n)).forEach((n) => {
    domains.forEach((d) => { document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? '; domain=' + d : ''}` })
  })
}

function choose(v) {
  saveChoice(v)
  if (v === 'granted') start(); else stop()
  hideBanner()
}

function hideBanner() {
  if (banner) { banner.remove(); banner = null }
}

function showBanner() {
  if (banner) return
  banner = document.createElement('div')
  banner.className = 'cookie-banner'
  banner.setAttribute('role', 'region')
  banner.setAttribute('aria-label', 'Cookie choice')
  banner.innerHTML =
    '<p><b>Can we count your visit?</b> We\u2019d like to use Google Analytics cookies to see how many people visit this site. ' +
    'They stay off unless you say yes.</p>' +
    '<div class="cookie-btns"><button type="button" class="pill dark" data-v="granted">Accept</button>' +
    '<button type="button" class="pill ghost-dark" data-v="denied">No thanks</button></div>'
  banner.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-v]')
    if (b) choose(b.dataset.v)
  })
  document.body.appendChild(banner)
}

// Footer "Cookie settings" link
export function openCookieSettings() {
  if (ID && typeof window !== 'undefined' && !isEditor()) { window.dataLayer = window.dataLayer || []; showBanner() }
}

export function startAnalytics() {
  if (!ID || typeof window === 'undefined' || isEditor()) return
  window.dataLayer = window.dataLayer || []
  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied',
  })
  gtag('set', 'ads_data_redaction', true)
  const c = readChoice()
  if (c === 'granted') start()
  else if (c === null) showBanner()
}
