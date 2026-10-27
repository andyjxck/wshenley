// Safe rich text for words edited in the website editor.
// Edited text is stored as a small subset of HTML. Everything is cleaned again whenever it is shown,
// so even a bad draft or a tampered document can't add scripts, styles or odd markup to the page.
// Allowed: bold, italic, links (http, https, mailto, tel and on-site #anchors), bulleted and
// numbered lists, paragraphs and line breaks.
const ALLOWED = new Set(['B', 'STRONG', 'I', 'EM', 'A', 'UL', 'OL', 'LI', 'P', 'BR'])
const RENAME = { STRONG: 'b', EM: 'i', DIV: 'p' }
const BLOCK = /<(ul|ol|p|li)[\s>]/i

export function safeHref(href) {
  const h = String(href || '').trim()
  if (/^(https?:\/\/|mailto:|tel:)/i.test(h)) return h
  if (/^#[\w-]*$/.test(h)) return h
  if (/^(\.\.?\/)[\w\-./#]*$/.test(h)) return h
  return ''
}

function cleanNode(node, doc) {
  const out = doc.createDocumentFragment()
  node.childNodes.forEach((n) => {
    if (n.nodeType === 3) { out.appendChild(doc.createTextNode(n.nodeValue)); return }
    if (n.nodeType !== 1) return
    const tag = n.tagName
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEMPLATE' || tag === 'IFRAME' || tag === 'OBJECT') return
    const inner = cleanNode(n, doc)
    const name = RENAME[tag] || (ALLOWED.has(tag) ? tag.toLowerCase() : null)
    if (!name) { out.appendChild(inner); return } // unknown tag: keep its text only
    const el = doc.createElement(name)
    if (name === 'a') {
      const href = safeHref(n.getAttribute('href'))
      if (!href) { out.appendChild(inner); return }
      el.setAttribute('href', href)
      if (/^https?:/i.test(href)) { el.setAttribute('target', '_blank'); el.setAttribute('rel', 'noopener noreferrer') }
    }
    el.appendChild(inner)
    out.appendChild(el)
  })
  return out
}

export function sanitizeHtml(html) {
  if (typeof html !== 'string' || !html) return ''
  if (typeof DOMParser === 'undefined') return escapeHtml(html.replace(/<[^>]*>/g, ''))
  const doc = new DOMParser().parseFromString(`<body>${html}</body>`, 'text/html')
  const holder = doc.createElement('div')
  holder.appendChild(cleanNode(doc.body, doc))
  // tidy: drop empty trailing breaks and empty paragraphs
  holder.querySelectorAll('p').forEach((p) => { if (!p.textContent.trim() && !p.querySelector('br')) p.remove() })
  return holder.innerHTML.replace(/(<br>\s*)+$/i, '').trim()
}

export function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

export const hasBlocks = (html) => BLOCK.test(html || '')

export function htmlToText(html) {
  if (typeof DOMParser === 'undefined') return String(html || '').replace(/<[^>]*>/g, '')
  const doc = new DOMParser().parseFromString(`<body>${html || ''}</body>`, 'text/html')
  return doc.body.textContent || ''
}
