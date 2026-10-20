// How old each Our story entry looks, worked out from its year (not from how far down the page it is).
//
// 0 = today, 1 = the oldest entry. The page colour, paper stains, browned edges and film grain
// follow the entry at the middle of the screen (blending smoothly between one entry and the next,
// see useTimeTravel.js); each entry's own ink, rules, photo mount and photo toning use its own age.
//
// Labels that aren't a plain year get a fixed anchor year below. These anchors only set how old
// the paper looks. They are never shown and don't change any date or claim on the page.
// A new non-numeric label must be added here (a plain 4-digit year needs nothing).
export const ANCHORS = {
  '1980s': 1985, //               middle of the decade
  '1950s': 1955, //               middle of the decade
  'Before 1920': 1919, //         latest year the label allows
  'Undated': null, //             no date: halfway between the entries either side of it
  'Pre-1914': 1913, //            latest year the label allows
  'c.1890–1910': 1900, //         middle of the range
  '1714–1763': 1714, //           Shenstone's lifetime; the page files it below 1726, so its start year
  'Late 16th century': 1587, //   middle of 1575 to 1600
  '16th century': 1550, //        middle of the century
  'Late 11th century': 1087, //   middle of 1075 to 1100
  'After 1066': 1067, //          earliest year the label allows
  'Before 1066': 1065, //         'just before the Norman Conquest', as the entry says
}

// Years ago -> age. A gentle curve (power 0.6) so the recent past still visibly ages, and every
// century back to before 1066 keeps adding age instead of levelling off.
const CURVE = 0.6
// Neighbouring entries a few years apart (1608, late 16th century, 16th century; after/before 1066)
// would otherwise look identical. Each entry with a different date is at least this much older
// than the one above it, so the page never stops ageing down the timeline.
const MIN_STEP = 0.012

export function anchorYear(label) {
  if (Object.prototype.hasOwnProperty.call(ANCHORS, label)) return ANCHORS[label]
  if (/^\d{4}$/.test(label)) return Number(label)
  throw new Error(`ageing.js: no anchor year for timeline label "${label}". Add it to ANCHORS.`)
}

// labels: the entries' year labels, newest first, in page order.
// Returns [{ label, anchor, age }] in the same order.
export function agesFor(labels, now = new Date().getFullYear()) {
  const anchors = labels.map(anchorYear)
  // Undated entries sit halfway between their dated neighbours
  anchors.forEach((a, i) => {
    if (a !== null) return
    let p = i - 1; while (p >= 0 && anchors[p] === null) p--
    let n = i + 1; while (n < anchors.length && anchors[n] === null) n++
    const before = p >= 0 ? anchors[p] : now
    const after = n < anchors.length ? anchors[n] : before
    anchors[i] = (before + after) / 2
  })
  // Never newer than the entry above it on the page
  for (let i = 1; i < anchors.length; i++) anchors[i] = Math.min(anchors[i], anchors[i - 1])
  const oldest = anchors[anchors.length - 1]
  const span = Math.max(1, now - oldest)
  const raw = anchors.map((y) => Math.pow(Math.max(0, now - y) / span, CURVE))
  const ages = raw.slice()
  for (let i = 1; i < ages.length; i++) {
    if (anchors[i] === anchors[i - 1]) ages[i] = ages[i - 1]
    else ages[i] = Math.max(raw[i], ages[i - 1] + MIN_STEP)
  }
  const top = ages[ages.length - 1] || 1
  return labels.map((label, i) => ({ label, anchor: anchors[i], age: Math.min(1, ages[i] / top) }))
}

// Page colour for an age. Straight lines between evenly spaced stops (no easing), so the colour
// keeps moving at every age: white, then sepia, then darker, browner old paper. Never black.
const BG = [
  [0.0, [247, 245, 241]],
  [0.25, [243, 234, 214]],
  [0.5, [234, 218, 186]],
  [0.75, [222, 200, 159]],
  [1.0, [205, 178, 132]],
]
const INK = [
  [0.0, [22, 20, 18]],
  [0.4, [50, 35, 22]],
  [1.0, [34, 20, 8]],
]
function lerpStops(stops, a) {
  const t = Math.min(1, Math.max(0, a))
  for (let i = 1; i < stops.length; i++) {
    const [p1, c1] = stops[i]
    const [p0, c0] = stops[i - 1]
    if (t <= p1) {
      const k = (t - p0) / (p1 - p0)
      return c0.map((v, j) => Math.round(v + (c1[j] - v) * k))
    }
  }
  return stops[stops.length - 1][1]
}
export const bgFor = (a) => lerpStops(BG, a)
export const inkFor = (a) => lerpStops(INK, a)

// Cards, buttons and photo mounts: a little lighter than the page, ageing with it.
const LIGHT = [255, 251, 242]
export function paperFor(a, bg = bgFor(a)) {
  const k = 0.55 - 0.3 * a
  return bg.map((v, j) => Math.round(v + (LIGHT[j] - v) * k))
}

// Browned screen edges and paper stains: none for today, building steadily to full at the oldest entry.
export const wearFor = (a) => Math.min(1, Math.max(0, (a - 0.05) / 0.95))
export const stainFor = (a) => Math.pow(Math.min(1, Math.max(0, a)), 1.15)
export const grainFor = (a) => 0.02 + Math.min(1, Math.max(0, a)) * 0.07

// Photo toning for an entry's own age: warms into sepia and keeps ageing, never grey.
export function gradeFor(a) {
  const c = (x) => Math.min(1, Math.max(0, x))
  const sepia = 0.95 * c((a - 0.03) / 0.45)
  const sat = 1 - 0.2 * c((a - 0.3) / 0.7)
  const contrast = 1 - 0.1 * c((a - 0.25) / 0.75)
  const bright = 1 - 0.07 * c(a)
  return `sepia(${sepia.toFixed(3)}) saturate(${sat.toFixed(3)}) contrast(${contrast.toFixed(3)}) brightness(${bright.toFixed(3)})`
}
