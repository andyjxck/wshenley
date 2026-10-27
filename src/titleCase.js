// Title Case for headings (only headings: body text, buttons and captions are left as written).
//
// Rules, so headings read the same everywhere on the site:
//  - Every word starts with a capital, except short joining words (a, an, the, and, of, in, on, at,
//    to, by, for, ...) in the middle of a heading. The first and last word, and the first word
//    after a colon, full stop, question mark or dash, are always capitalised.
//  - A word that already has a capital letter anywhere in it is left exactly as it is, so names
//    and acronyms keep their own spelling: Henley-in-Arden, DJ, TV, McDonald, II.
//  - Words inside “curly quotes” are quotations and are left as written.
//  - Hyphenated words get a capital on each part (Well-Known), unless already capitalised.
const MINOR = new Set([
  'a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'so', 'yet', 'as', 'at', 'by', 'in', 'of',
  'off', 'on', 'per', 'to', 'up', 'via', 'vs', 'from', 'into', 'onto', 'with', 'than', 'over',
])

const capFirst = (w) => {
  // first letter after any leading punctuation (‘ ( [ “ etc.)
  const m = w.match(/^([^\p{L}\p{N}]*)(\p{L})(.*)$/su)
  return m ? m[1] + m[2].toUpperCase() + m[3] : w
}
const hasUpper = (w) => /\p{Lu}/u.test(w)
const core = (w) => w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '').toLowerCase()

export function titleCase(input) {
  if (typeof input !== 'string' || !input.trim()) return input
  // Split into words and the spaces between them, keeping the spaces.
  const parts = input.split(/(\s+)/)
  const wordIdx = parts.map((p, i) => (p.trim() ? i : -1)).filter((i) => i >= 0)
  const last = wordIdx[wordIdx.length - 1]
  let inQuote = false
  let forceNext = true // the first word
  return parts.map((p, i) => {
    if (!p.trim()) return p
    const opens = /^[^\p{L}\p{N}]*“/u.test(p)
    if (opens) inQuote = true
    const wasQuote = inQuote
    if (inQuote && /”/.test(p)) inQuote = false
    let out = p
    if (!wasQuote && !hasUpper(p)) {
      const force = forceNext || i === last
      out = p.split('-').map((seg, j) => {
        if (!seg || hasUpper(seg)) return seg
        if (!force && j === 0 && MINOR.has(core(seg))) return seg
        if (j > 0 && MINOR.has(core(seg)) && i !== last) return seg
        return capFirst(seg)
      }).join('-')
    }
    // A colon, full stop, question mark, exclamation mark or dash ends a phrase: capitalise what follows.
    forceNext = /[:.?!—–]$/.test(p.replace(/[”’)\]]+$/, '')) || p === '—' || p === '–'
    return out
  }).join('')
}

export default titleCase
