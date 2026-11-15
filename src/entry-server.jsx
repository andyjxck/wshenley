// Build-time only (see scripts/prerender.mjs): renders a page to HTML so the built index.html files
// carry the real words of the page, for search engines and AI crawlers that don't run JavaScript.
// Visitors' browsers never load this file: main.jsx renders the site exactly as before and replaces
// the prerendered copy.
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export { cleanContent, parseRecord, parseList } from './site.jsx'
export { contact, hero, rooms, swanLocation } from './content.js'
export { CONTACT_FALLBACK, CONTACT_FIELDS, AMENITIES_SPEC, TERMS_SPEC, phoneHref } from './editables.js'

export function render() {
  return renderToString(<App />)
}
