// The lists and grouped details the website editor can change, with the built-in versions from content.js.
// Each has: the fields the edit box shows, the built-in list (used until someone edits it), and the
// box's title and help. Stored as JSON in the text map: see useList/useRecord in site.jsx.
import { contact, rooms, food, nearby, credits } from './content.js'
import { useRecord } from './site.jsx'

const url = (name, label, help) => ({ name, label, type: 'url', help })

// ---------------------------------------------------------------- contact details
export const CONTACT_FIELDS = [
  { name: 'phone', label: 'Phone number (as shown)', max: 40, help: 'Tapping it calls this number.' },
  { name: 'email', label: 'Email address', max: 120 },
  { name: 'address', label: 'Address (one line per line)', type: 'lines', max: 400 },
  url('mapsHref', 'Map link', 'Where Open in Maps goes.'),
  { name: 'hours', label: 'Opening times', max: 200 },
  url('instagram', 'Instagram page'),
  url('facebook', 'Facebook page'),
  url('tripadvisor', 'Tripadvisor page'),
]
export const CONTACT_FALLBACK = {
  phone: contact.phone,
  email: contact.email,
  address: contact.address.join('\n'),
  mapsHref: contact.mapsHref,
  hours: contact.hours,
  instagram: contact.instagram,
  facebook: contact.facebook,
  tripadvisor: contact.tripadvisor,
}
// UK numbers: 01564 660 303 becomes tel:+441564660303
export function phoneHref(phone) {
  let d = String(phone || '').replace(/[^0-9+]/g, '')
  if (!d) return contact.phoneHref
  if (d.startsWith('00')) d = '+' + d.slice(2)
  else if (d.startsWith('0')) d = '+44' + d.slice(1)
  return 'tel:' + d
}
const okEmail = (e) => /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(e)
export function useContact() {
  const r = useRecord('contact', CONTACT_FALLBACK, CONTACT_FIELDS)
  const address = String(r.address || '').split('\n').map((s) => s.trim()).filter(Boolean)
  return {
    ...contact,
    phone: r.phone || contact.phone,
    phoneHref: phoneHref(r.phone || contact.phone),
    email: okEmail(r.email) ? r.email : contact.email,
    address: address.length ? address : contact.address,
    mapsHref: r.mapsHref || contact.mapsHref,
    hours: r.hours,
    instagram: r.instagram,
    facebook: r.facebook,
    tripadvisor: r.tripadvisor,
  }
}
export const CONTACT_SPEC = {
  key: 'rec:contact',
  record: true,
  fields: CONTACT_FIELDS,
  fallback: CONTACT_FALLBACK,
  title: 'Contact details',
  help: 'Used everywhere on the site: Find us, the footer, the booking box, the enquiry form and the phone bar. Changing the email here does not change where enquiry form messages go.',
  extras: [
    { k: 'nav.call', label: 'Phone bar Call button (phones only)', fallback: 'Call' },
  ],
  extrasTitle: 'Buttons',
}

// ---------------------------------------------------------------- rooms
export const ROOM_FIELDS = [
  { name: 'name', label: 'Room name', max: 80 },
  { name: 'sleeps', label: 'Sleeps', type: 'number', max: 2 },
  { name: 'text', label: 'Description', type: 'textarea', max: 600 },
  { name: 'history', label: 'A bit of history (leave empty for none)', type: 'textarea', max: 600 },
  { name: 'icons', label: 'Features', type: 'icons', max: 300 },
  { name: 'code', label: 'Seekda room code', max: 30, help: 'Links Book Room to this room on the booking site, and shows its live availability. Only change it if the room code in Seekda changes.' },
  { name: 'id', label: 'id', hidden: true, max: 40 },
  { name: 'image', label: 'image', hidden: true, max: 600 },
]
export const ROOMS_FALLBACK = rooms.list.map((r) => ({
  id: r.code, name: r.name, sleeps: String(r.sleeps), text: r.text, history: r.history || '', icons: r.icons.join(','), code: r.code, image: r.image,
}))
export const ROOM_WORDS = [
  { k: 'room.tap', label: 'Front of each card', fallback: 'Tap for details' },
  { k: 'room.sleeps', label: 'Before the number of guests', fallback: 'Sleeps' },
  { k: 'room.history', label: 'History heading', fallback: 'A bit of history' },
  { k: 'room.book', label: 'Book button', fallback: 'Book Room' },
  { k: 'room.change', label: 'Button when a room is not free', fallback: 'Change dates' },
  { k: 'room.back', label: 'Back button', fallback: 'Back' },
  { k: 'room.nophoto', label: 'When a room has no photo', fallback: 'Photo coming soon' },
  { k: 'room.available', label: 'When a room is free', fallback: 'Available' },
  { k: 'room.notfree', label: 'When a room is not free', fallback: 'Not available for these dates' },
  { k: 'book.wait', label: 'Booking box: while it loads', fallback: 'Loading live availability…' },
  { k: 'book.fail', label: 'Booking box: if it does not load', fallback: 'Live availability didn’t load. Call us and we’ll book you in.' },
  { k: 'book.call', label: 'Booking box: call button (the number follows)', fallback: 'Call' },
  { k: 'book.email', label: 'Booking box: email button', fallback: 'Email us' },
]
export const ROOMS_SPEC = {
  key: 'list:home.rooms',
  fields: ROOM_FIELDS,
  fallback: ROOMS_FALLBACK,
  title: 'Rooms',
  help: 'Each room is one flip card. Use Edit photo on a card to change its photo.',
  itemName: 'room',
  max: 20,
  newItem: () => ({ id: 'room-' + Date.now().toString(36), sleeps: '2', icons: 'double,shower,tv,kettle,heating,hairdryer,towels' }),
  extras: ROOM_WORDS,
  extrasTitle: 'Words on every card',
}

// ---------------------------------------------------------------- simple lists of lines
export const LINE_FIELDS = [{ name: 'text', label: 'Line', type: 'textarea', max: 400 }]
export const AMENITIES_FALLBACK = rooms.amenities.map((text) => ({ text }))
export const AMENITIES_SPEC = { key: 'list:home.amenities', fields: LINE_FIELDS, fallback: AMENITIES_FALLBACK, title: 'In every room', itemName: 'line', max: 30 }
export const TERMS_FALLBACK = rooms.terms.map((text) => ({ text }))
export const TERMS_SPEC = { key: 'list:home.terms', fields: LINE_FIELDS, fallback: TERMS_FALLBACK, title: 'Good to know', itemName: 'line', max: 30 }

// ---------------------------------------------------------------- food and drink
export const MENU_FIELDS = [
  { name: 'name', label: 'Menu name', max: 80 },
  { name: 'when', label: 'When it is served', max: 120 },
  url('href', 'Link (the menu, or tel: to call)', 'For example a picture or PDF of the menu.'),
]
export const MENUS_FALLBACK = food.menus.map((m) => ({ ...m }))
export const MENUS_SPEC = { key: 'list:home.menus', fields: MENU_FIELDS, fallback: MENUS_FALLBACK, title: 'Menus', itemName: 'menu', max: 12 }

export const DRINK_FIELDS = [
  { name: 'name', label: 'Name', max: 80 },
  { name: 'text', label: 'Description', type: 'rich', max: 2000 },
  url('href', 'Link (optional)'),
]
export const DRINKS_SPEC_BASE = { key: 'list:home.drinks', fields: DRINK_FIELDS, title: 'Drinks', itemName: 'drink', max: 12, newItem: () => ({ name: 'New drink', text: 'Click here on the page to describe it.' }) }

// ---------------------------------------------------------------- nearby
export const NEARBY_FIELDS = [
  { name: 'name', label: 'Place', max: 100 },
  { name: 'place', label: 'Where', max: 100 },
  { name: 'distance', label: 'How far', max: 60 },
  url('href', 'Website'),
]
export const NEARBY_FALLBACK = nearby.map((n) => ({ ...n }))
export const NEARBY_SPEC = { key: 'list:home.nearby', fields: NEARBY_FIELDS, fallback: NEARBY_FALLBACK, title: 'Nearby', itemName: 'place', max: 30 }

// ---------------------------------------------------------------- enquiry form
export const OCCASIONS_FALLBACK = ['Birthday', 'Wedding or engagement', 'Christening', 'Wake', 'Work do', 'Christmas party', 'Other'].map((text) => ({ text }))
export const OCCASIONS_SPEC = {
  key: 'list:hire.occasions',
  fields: [{ name: 'text', label: 'Occasion', max: 60 }],
  fallback: OCCASIONS_FALLBACK,
  title: 'Occasions in the enquiry form',
  help: 'The choices in the Occasion drop-down. The one picked is sent with the enquiry.',
  itemName: 'occasion',
  max: 20,
  min: 1,
}

// ---------------------------------------------------------------- footer
export const SOCIAL_FIELDS = [{ name: 'label', label: 'Words', max: 60 }, url('href', 'Link')]
export const SOCIAL_SPEC_BASE = { key: 'list:footer.social', fields: SOCIAL_FIELDS, title: 'Footer links', itemName: 'link', max: 10 }

// Picture credits: each line is rich text (words and links), edited on the page.
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
const linkHtml = (p) => (typeof p === 'string' ? esc(p) : '<a href="' + p.href + '">' + esc(p.label) + '</a>')
export const CREDITS_FALLBACK = credits.map((c) => ({ text: (Array.isArray(c) ? c : [c]).map(linkHtml).join('') }))
export const CREDITS_SPEC = {
  key: 'list:footer.credits',
  fields: [{ name: 'text', label: 'Credit', type: 'rich', max: 3000 }],
  fallback: CREDITS_FALLBACK,
  title: 'Picture credits and sources',
  help: 'Add, remove or reorder lines here. Change the words and links of a line by clicking it in the footer.',
  itemName: 'credit',
  max: 80,
  newItem: () => ({ text: 'New credit: click to write it.' }),
}
