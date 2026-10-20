import { useEffect, useState } from 'react'

// Page colour from today (0) to the oldest entry (1).
// White, then sepia, then progressively older, darker aged paper.
// It never turns black and never goes back to white or grey.
const BG = [
  [0.0, [247, 245, 241]],
  [0.2, [245, 239, 227]],
  [0.45, [238, 225, 199]],
  [0.7, [226, 208, 172]],
  [1.0, [214, 192, 150]],
]
const INK = [
  [0.0, [22, 20, 18]],
  [0.45, [52, 36, 22]],
  [0.7, [50, 33, 18]],
  [1.0, [44, 28, 14]],
]

function mix(stops, p) {
  for (let i = 1; i < stops.length; i++) {
    const [p1, c1] = stops[i]
    const [p0, c0] = stops[i - 1]
    if (p <= p1) {
      const t = (p - p0) / (p1 - p0)
      const k = t * t * (3 - 2 * t)
      return c0.map((v, j) => Math.round(v + (c1[j] - v) * k))
    }
  }
  return stops[stops.length - 1][1]
}

export function useTimeTravel(ref) {
  const [active, setActive] = useState({ year: '2020', eraName: 'Living memory' })
  const [inView, setInView] = useState(false)

  // Continuous colour shift, one write per animation frame, only when it changes
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const root = document.documentElement
    let raf = 0
    let last = -1
    const frame = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      let p = (vh * 0.55 - r.top) / Math.max(1, r.height - vh * 0.6)
      p = Math.min(1, Math.max(0, p))
      if (Math.abs(p - last) < 0.001) return
      last = p
      const bg = mix(BG, p)
      const ink = mix(INK, p)
      root.style.setProperty('--bg', `rgb(${bg.join(',')})`)
      root.style.setProperty('--ink', `rgb(${ink.join(',')})`)
      root.style.setProperty('--progress', p.toFixed(4))
      root.style.setProperty('--grain', (0.02 + p * 0.06).toFixed(3))
      const meta = document.querySelector('meta[name=theme-color]')
      if (meta) meta.setAttribute('content', `rgb(${bg.join(',')})`)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(frame) }
    frame()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [ref])

  // Which year is at the middle of the screen, for the year dial.
  // Entry positions are measured once (and again when the layout changes),
  // so scrolling only does a quick lookup.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const entries = [...el.querySelectorAll('.entry')]
    let tops = []
    const measure = () => { tops = entries.map((e) => e.getBoundingClientRect().top + window.scrollY) }
    let raf = 0
    let lastIdx = -1
    const pick = () => {
      raf = 0
      const mid = window.scrollY + window.innerHeight * 0.5
      let idx = 0
      for (let i = 0; i < tops.length; i++) { if (tops[i] <= mid) idx = i; else break }
      if (idx === lastIdx) return
      lastIdx = idx
      const node = entries[idx]
      const era = node.closest('.era')
      setActive({ year: node.dataset.year, eraName: era ? era.dataset.eraName : '' })
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(pick) }
    const ro = new ResizeObserver(() => { measure(); onScroll() })
    ro.observe(el)
    measure(); pick()
    window.addEventListener('scroll', onScroll, { passive: true })
    const vis = new IntersectionObserver(([it]) => setInView(it.isIntersecting), { rootMargin: '-30% 0px -60% 0px' })
    vis.observe(el)
    return () => { ro.disconnect(); vis.disconnect(); window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [ref])

  return { active, inView }
}

// Fade-and-rise for anything with class="reveal"
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return }
    const io = new IntersectionObserver((items) => {
      items.forEach((it) => {
        if (it.isIntersecting) { it.target.classList.add('in'); io.unobserve(it.target) }
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 })
    els.forEach((e) => io.observe(e))
    // Safety net: a fast fling or a jump link can skip past an element
    // between observer checks, so anything already above the fold gets shown.
    let t = 0
    const sweep = () => {
      t = 0
      document.querySelectorAll('.reveal:not(.in)').forEach((e) => {
        if (e.getBoundingClientRect().top < window.innerHeight) e.classList.add('in')
      })
    }
    const onScroll = () => { if (!t) t = setTimeout(sweep, 200) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); clearTimeout(t) }
  }, [])
}
