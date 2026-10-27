import { useEffect, useState } from 'react'
import { bgFor, inkFor, paperFor, wearFor, stainFor, grainFor } from './ageing.js'

// The Our story page ages with the YEAR at the middle of the screen, not with how far down the
// page you are. Each entry carries its own age (data-age, from its year, see ageing.js). Between
// two entries the age blends by position, so it changes smoothly as you scroll; above the first
// entry it is today (0), and past the oldest entry (the footer) it stays at the oldest (1).
// The rail on the left still shows how far through the page you are (--progress).
export function useTimeTravel(ref) {
  const [active, setActive] = useState({ year: '2020', eraName: 'Living memory' })
  const [inView, setInView] = useState(false)
  const [past, setPast] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const root = document.documentElement
    const entries = [...el.querySelectorAll('.entry')]
    const ages = entries.map((e) => Number(e.dataset.age) || 0)
    let tops = []
    let tlTop = 0
    let tlH = 1
    // Paper stains are printed on the page and scroll with it; how strong they are at each point
    // follows the entry there, so they keep building to the oldest entry instead of filling up early.
    // Layout positions (offsetTop ignores the fade-and-rise transform on entries still to appear)
    const docTop = (n) => { let y = 0; while (n) { y += n.offsetTop; n = n.offsetParent } return y }
    const measure = () => {
      tlTop = docTop(el)
      tlH = Math.max(1, el.offsetHeight)
      tops = entries.map(docTop)
      const stops = ['rgba(0,0,0,0) 0px']
      tops.forEach((t, i) => stops.push(`rgba(0,0,0,${stainFor(ages[i]).toFixed(3)}) ${Math.round(t - tlTop)}px`))
      stops.push('#000 100%')
      el.style.setProperty('--stain-mask', `linear-gradient(to bottom, ${stops.join(', ')})`)
    }
    const ageAt = (y) => {
      if (!tops.length || y <= tlTop) return 0
      if (y < tops[0]) return ages[0] * (y - tlTop) / Math.max(1, tops[0] - tlTop)
      for (let i = 1; i < tops.length; i++) {
        if (y < tops[i]) return ages[i - 1] + (ages[i] - ages[i - 1]) * (y - tops[i - 1]) / Math.max(1, tops[i] - tops[i - 1])
      }
      return ages[ages.length - 1]
    }
    let raf = 0
    let lastAge = -1
    let lastP = -1
    let lastIdx = -1
    const frame = () => {
      raf = 0
      const vh = window.innerHeight
      const mid = window.scrollY + vh * 0.5
      // Year dial: the entry at the middle of the screen
      let idx = 0
      for (let i = 0; i < tops.length; i++) { if (tops[i] <= mid) idx = i; else break }
      if (idx !== lastIdx && entries[idx]) {
        lastIdx = idx
        const node = entries[idx]
        const era = node.closest('.era')
        setActive({ year: node.dataset.year, eraName: era ? era.dataset.eraName : '' })
      }
      const r = el.getBoundingClientRect()
      let p = (vh * 0.55 - r.top) / Math.max(1, r.height - vh * 0.6)
      p = Math.min(1, Math.max(0, p))
      if (Math.abs(p - lastP) >= 0.001) { lastP = p; root.style.setProperty('--progress', p.toFixed(4)) }
      const a = ageAt(mid)
      if (Math.abs(a - lastAge) < 0.0005) return
      lastAge = a
      const bg = bgFor(a)
      const ink = inkFor(a)
      root.style.setProperty('--bg', `rgb(${bg.join(',')})`)
      root.style.setProperty('--ink', `rgb(${ink.join(',')})`)
      root.style.setProperty('--paper', `rgb(${paperFor(a, bg).join(',')})`)
      root.style.setProperty('--page-age', a.toFixed(4))
      root.style.setProperty('--grain', grainFor(a).toFixed(3))
      root.style.setProperty('--wear', wearFor(a).toFixed(4))
      const meta = document.querySelector('meta[name=theme-color]')
      if (meta) meta.setAttribute('content', `rgb(${bg.join(',')})`)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(frame) }
    // Re-measure whenever anything in the story changes size (photos loading, fonts, rotation)
    const ro = new ResizeObserver(() => { measure(); lastAge = -1; onScroll() })
    ro.observe(el)
    entries.forEach((e) => ro.observe(e))
    const onLoad = () => { measure(); lastAge = -1; onScroll() }
    window.addEventListener('load', onLoad)
    measure(); frame()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    // live: the story is on screen (year dial, rail, grain). past: scrolled beyond it to the
    // footer, where the grain stays on so the end of the page looks as old as the oldest entry.
    const vis = new IntersectionObserver(([it]) => {
      setInView(it.isIntersecting)
      setPast(!it.isIntersecting && it.boundingClientRect.bottom < (it.rootBounds ? it.rootBounds.top : 0))
    }, { rootMargin: '-30% 0px -60% 0px' })
    vis.observe(el)
    return () => {
      ro.disconnect(); vis.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('load', onLoad)
      cancelAnimationFrame(raf)
    }
  }, [ref])

  return { active, inView, past }
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
    // Parts that appear later (published edits loading, sections reordered in the editor, a slideshow
    // replacing a single photo) are picked up too, so nothing is left hidden.
    const mo = new MutationObserver((list) => {
      list.forEach((m) => m.addedNodes.forEach((n) => {
        if (n.nodeType !== 1) return
        const found = n.matches('.reveal:not(.in)') ? [n] : []
        n.querySelectorAll('.reveal:not(.in)').forEach((x) => found.push(x))
        found.forEach((x) => io.observe(x))
      }))
    })
    mo.observe(document.body, { childList: true, subtree: true })
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
    return () => { io.disconnect(); mo.disconnect(); window.removeEventListener('scroll', onScroll); clearTimeout(t) }
  }, [])
}
