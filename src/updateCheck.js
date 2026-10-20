// Keeps visitors on the newest build.
// GitHub Pages tells browsers to keep each page for 10 minutes, and a tab left open keeps showing
// whatever it first loaded. So a change that has gone live (a photo taken down, say) could still
// show for a while. On load, and whenever the visitor comes back to the tab, this asks the server
// for the current build id (version.json, never cached). If it is newer than the build running in
// the page, the page reloads once from a fresh address, keeping the visitor's place on the page.
const BUILD = typeof __BUILD_ID__ !== 'undefined' ? __BUILD_ID__ : 'dev'
const TRIED = 'ws-update-tried'
const SCROLL = 'ws-update-scroll'
let lastCheck = 0

async function latestBuild() {
  const url = new URL('../version.json', import.meta.url)
  url.searchParams.set('t', Date.now())
  const r = await fetch(url, { cache: 'no-store' })
  if (!r.ok) return null
  const j = await r.json()
  return j && j.build
}

async function check() {
  lastCheck = Date.now()
  try {
    const latest = await latestBuild()
    if (!latest || latest === BUILD) return
    if (sessionStorage.getItem(TRIED) === latest) return // tried once already: never loop
    sessionStorage.setItem(TRIED, latest)
    sessionStorage.setItem(SCROLL, String(window.scrollY))
    const u = new URL(location.href)
    u.searchParams.set('v', latest)
    location.replace(u.toString())
  } catch (e) { /* offline or blocked: keep the page as it is */ }
}

function tidyAfterUpdate() {
  const u = new URL(location.href)
  if (!u.searchParams.has('v')) return
  u.searchParams.delete('v')
  history.replaceState(history.state, '', u.pathname + u.search + u.hash)
  const y = Number(sessionStorage.getItem(SCROLL))
  sessionStorage.removeItem(SCROLL)
  if (y > 0) {
    const go = () => window.scrollTo(0, y)
    requestAnimationFrame(go)
    window.addEventListener('load', () => setTimeout(go, 50), { once: true })
  }
}

export function startUpdateCheck() {
  if (BUILD === 'dev' || typeof window === 'undefined') return
  tidyAfterUpdate()
  check()
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && Date.now() - lastCheck > 60000) check()
  })
}
