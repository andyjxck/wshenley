// ---------------------------------------------------------------------------
// ALL THE WORDS ON THE SITE LIVE IN THIS FILE.
// Edit text here and the page updates. No layout code needs touching.
//
// Timeline entries each have a `body` field that is empty for now.
// Put your longer story text there (plain text; blank line = new paragraph)
// and it appears under that entry automatically.
// ---------------------------------------------------------------------------

// Homepage hero: Elliott Brown, "The White Swan, 100 High Street, Henley-in-Arden", taken 14 March 2010,
// flickr.com/photos/ell-r-brown/4435838679, CC BY 2.0 (licence checked on the Flickr page, 20 Oct 2026).
// Uploaded to the repo as 4435838679_56b8a794c8_o.jpg (Flickr original); resized to 2400 x 1800 for the web.
import heroToday from './assets/hero-white-swan-elliott-brown-2010.jpg'
// Eat & drink photo: burger, uploaded to the repo by the site owner as 7E8A9056-4066-4CDC-93B6-B1C989B87BB4.jpg
// (551 x 737, dated 16 July 2026 in its metadata; no photographer or source recorded). Replaces interior-today.jpg.
import foodBurger from './assets/7E8A9056-4066-4CDC-93B6-B1C989B87BB4.jpg'
import whatsonLive from './assets/week-bg.jpg' // Flickr 2012 "The Henley White Swan 2" (account "Henley White Swan"; not claimed as the hotel's on the page)
// Elliott Brown, "The White Swan Secret Garden - Henley-in-Arden - sign", 4 June 2016,
// flickr.com/photos/ell-r-brown/27425128576, CC BY-SA 2.0 (licence checked on the Flickr
// page, 20 Oct 2026). Flickr's 1600 x 1200 size, re-saved as JPEG; not cropped or retouched.
import garden from './assets/secret-garden-elliott-brown-2016.jpg'
import coach2010 from './assets/coach-entrance-2010.jpg'
import postcardUndated from './assets/postcard-undated.jpg'
import postcard1914 from './assets/postcard-pre1914.jpg'
import lantern from './assets/lantern-c1900.jpg'
import oldSepia from './assets/white_swan_sepia.jpg'
import oldPortrait from './assets/white_swan_portrait.jpg'
import oldMarketway from './assets/marketway.jpg'

export const contact = {
  phone: '01564 660 303',
  phoneHref: 'tel:+441564660303',
  email: 'whiteswan@westbourne.co',
  address: ['100 High Street', 'Henley-in-Arden', 'Warwickshire B95 5BY'],
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=The+White+Swan+Hotel+100+High+Street+Henley-in-Arden+B95+5BY',
  hours: 'Monday to Sunday, 12pm to 11pm',
  instagram: 'https://www.instagram.com/thewhiteswanhotelhenley/',
  facebook: 'https://www.facebook.com/profile.php?id=61579343542837',
  tripadvisor: 'https://www.tripadvisor.co.uk/Hotel_Review-g504196-d1122948-Reviews-The_White_Swan_Hotel_and_STONEAGED_Restaurant-Henley_in_Arden_Warwickshire_England.html',
  bookingCom: 'https://www.booking.com/hotel/gb/the-white-swan-henley-in-arden.en-gb.html',
}

// Seekda booking engine, same property code the current site uses
export const seekda = { propertyCode: 'S006498', widgetId: 'BOOKINGWIDGET' }

export const hero = {
  image: heroToday,
  place: 'Henley-in-Arden · Warwickshire',
  title: ['The warmest', 'welcome', 'at an inn'],
  since: '1352',
  intro: 'Rooms upstairs, good food downstairs, and a timber-framed bar that’s been pulling pints on the High Street for centuries.',
}

export const rooms = {
  intro: 'Seven bedrooms, including two suites, above the bar on the High Street. Car park at the rear for guests.',
  // Each card flips to show the description, amenity icons and a Book Room button.
  //   code   the room's code in Seekda (the Book Room button opens that room's booking page)
  //   image  leave '' to show a "photo coming soon" card
  //   icons  any of: double, king, single, shower, bath, tv, kettle, heating, hairdryer, towels, bedding, historic
  list: [
    { name: 'Diamond Suite', code: 'DIAMOND_', sleeps: 2, image: 'https://res.cloudinary.com/seekda/image/upload/w_768,h_576,c_fill,f_auto,fl_lossy,q_auto/production/S006498/IMG_6602.jpg', text: 'Our suite with a king size bed and a bathroom with both a bath and a shower.', history: 'Rumour has it King Charles II stopped at the Swan in 1651, on the run and disguised as a servant. We like to think he stayed in our best room.', icons: ['king', 'bath', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
    { name: 'Johnson Suite', code: 'JOHNSON_', sleeps: 2, image: 'https://res.cloudinary.com/seekda/image/upload/w_768,h_576,c_fill,f_auto,fl_lossy,q_auto/production/S006498/IMG_6597.jpg', text: 'A large king size room, perfect for a special occasion.', history: 'Named after Dr Samuel Johnson, who spent a night in Henley in March 1776. Rumour has it he spent it at the Swan. A copy of his famous Dictionary is kept in the room.', icons: ['king', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'bedding'] },
    { name: 'Room 11', code: 'DBL', sleeps: 2, image: 'https://res.cloudinary.com/seekda/image/upload/w_768,h_576,c_fill,f_auto,fl_lossy,q_auto/production/S006498/IMG_6598.jpg', text: 'A double room with an en-suite shower, full of old-building character.', icons: ['double', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
    { name: 'Room 12', code: 'SUPERKIN', sleeps: 2, image: '', text: 'A king size bed, an en-suite shower and plenty of old-inn character.', icons: ['king', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
    { name: 'Room 14', code: 'SUPERKI1', sleeps: 2, image: '', text: 'A king size bed and an en-suite shower, with plenty of old-inn character.', icons: ['king', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
    { name: 'Room 15', code: 'DOUBLE_R', sleeps: 2, image: 'https://res.cloudinary.com/seekda/image/upload/w_768,h_576,c_fill,f_auto,fl_lossy,q_auto/production/S006498/IMG_6600.jpg', text: 'A comfortable double with an en-suite shower.', icons: ['double', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
    { name: 'Room 16', code: 'SINGLE_R', sleeps: 1, image: '', text: 'A single room with an en-suite shower, ideal if you’re travelling on your own.', icons: ['single', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
    { name: 'Room 17', code: 'PERIOD_D', sleeps: 2, image: 'https://res.cloudinary.com/seekda/image/upload/w_768,h_576,c_fill,f_auto,fl_lossy,q_auto/production/S006498/IMG_6601.jpg', text: 'A period double room with an en-suite shower.', history: 'Legend says Virginia Black, said to have died after a fall on the stairs in 1845, once haunted the corridor outside this room.', icons: ['double', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
  ],
  amenities: ['En-suite bathrooms with large drench showers', 'LCD TVs with Freeview', 'Free wifi', 'Drinks and biscuits', 'Shower gel, shampoo and conditioner', 'Hair dryer, iron and ironing board'],
  terms: [
    'Check in from 2pm until 9.30pm, and check out by 11am.',
    'Plans changed? Let us know at least 48 hours before you arrive and there’s nothing to pay. Later cancellations are charged in full.',
    'Sorry, we can’t take dogs in the bedrooms.',
  ],
}

export const food = {
  image: foodBurger,
  alt: 'A burger',
  intro: 'True homemade pub classics, with something for everyone.',
  menus: [
    { name: 'Lunchtime menu', when: 'Monday to Saturday, 12pm to 6pm', href: 'https://www.whiteswanhenley.co.uk/_webedit/uploaded-files/All%20Files/Lunch%20Menu%20Front%20Page.png' },
    { name: 'Evening menu', when: 'Monday to Saturday, 6pm to 9pm', href: 'https://www.whiteswanhenley.co.uk/_webedit/uploaded-files/All%20Files/Evening%20Menu.PNG' },
    { name: 'Sunday lunch', when: 'Sunday, 12pm to 5pm', href: 'tel:+441564660303' },
  ],
  drinks: [
    { name: 'Wine', text: 'Personally chosen from the best small vineyards around the world, at value-for-money prices.' },
    { name: 'Gins and vodkas', text: 'Always a great selection of favourites behind the bar.' },
  ],
}

export const whatsOn = {
  image: whatsonLive,
  headline: 'Karaoke on Fridays, DJ Jacko on Saturdays',
  text: 'Every weekend in the bar.',
}

// WHAT'S ON CALENDAR: the page always shows the current week, Monday to Sunday.
//   weekly   repeats every week. day: 'mon' 'tue' 'wed' 'thu' 'fri' 'sat' 'sun'
//   oneOff   a single date, written as 'YYYY-MM-DD'
//   time and note are optional. Leave them out and nothing shows.
export const events = {
  weekly: [
    { day: 'fri', title: 'Karaoke' },
    { day: 'sat', title: 'DJ', note: 'Jacko' },
  ],
  oneOff: [
    // { date: '2026-10-31', title: 'Halloween party', time: '8pm', note: 'Fancy dress' },
  ],
}

// PRIVATE HIRE: keep to what the hotel has confirmed. No prices, packages or conditions.
export const privateHire = {
  headline: 'Hire our function room',
  intro: 'Our function room is free to hire, and catering is available. Use the form below or give us a call to talk it through.',
}

// Distances: road distance from the White Swan (100 High Street, B95 5BY) to each
// place, from OpenStreetMap routing (OSRM, fastest car route), checked 20 Oct 2026,
// rounded to the nearest mile. The Heritage Centre is the walking distance.
// Raw figures: Heritage Centre 0.16 mi walk; RST 8.7; Birthplace 8.0; Warwick Castle 9.9;
// Baddesley Clinton 7.6; Packwood 6.2; Coughton Court 9.5; Kenilworth Castle 15.9; NEC 14.2.
export const nearbyNote = 'Distances are approximate, by road from the White Swan.'
export const nearby = [
  { name: 'Henley-in-Arden Museum and Heritage Centre', place: 'High Street, Henley-in-Arden', distance: '0.2 miles, a 3-minute walk', href: 'https://www.heritagehenley.org.uk/' },
  { name: 'Packwood House', place: 'Lapworth (National Trust)', distance: 'about 6 miles', href: 'http://www.nationaltrust.org.uk/packwood-house' },
  { name: 'Baddesley Clinton', place: 'Kingswood (National Trust)', distance: 'about 8 miles', href: 'http://www.nationaltrust.org.uk/baddesleyclinton/' },
  { name: 'Shakespeare’s Birthplace', place: 'Henley Street, Stratford-upon-Avon', distance: 'about 8 miles', href: 'http://www.shakespeare.org.uk/' },
  { name: 'Royal Shakespeare Theatre', place: 'Waterside, Stratford-upon-Avon', distance: 'about 9 miles', href: 'http://www.rsc.org.uk/' },
  { name: 'Coughton Court', place: 'Near Alcester (National Trust)', distance: 'about 9 miles', href: 'http://nationaltrust.org.uk/coughtoncourt' },
  { name: 'Warwick Castle', place: 'Warwick', distance: 'about 10 miles', href: 'http://www.warwick-castle.com/' },
  { name: 'NEC and Resorts World Arena', place: 'Birmingham', distance: 'about 14 miles', href: 'http://www.thenec.co.uk/' },
  { name: 'Kenilworth Castle', place: 'Kenilworth (English Heritage)', distance: 'about 16 miles', href: 'http://www.english-heritage.org.uk/daysout/properties/kenilworth-castle/' },
]

// ---------------------------------------------------------------------------
// THE TIMELINE: newest first, oldest last. The page gets older as you scroll.
// Each era sets the art direction for its entries.
//   year    big date shown on the left
//   title   one-line headline
//   kind    how sure we are: Documented, Documented in part, Hotel history, Reported, Report or Folklore
//   text    short summary
//   body    longer story text (blank line = new paragraph; '' to hide)
//   quote   optional quotation shown above the text
//   look    optional 'look for it' note for things guests can still see
//   video   optional YouTube video id (embedded without autoplay)
//   source  optional short source line shown under the entry
//   image / credit / creditHref / rights   optional photo
//
// SOURCES CHECKED (Oct 2026):
//   VCH  = Victoria County History of Warwickshire, vol. 3 (1945), Henley-in-Arden,
//          british-history.ac.uk/vch/warks/vol3/pp206-212
//   HE   = Historic England list entry 1382311 (Grade II*, first listed 6 Feb 1952)
//   HHC  = Henley-in-Arden Heritage Centre, 'Weeks in history'
//          heritagehenley.org.uk/weeks_in_history.php
//   Hotel = the White Swan's own website history (whiteswanhenley.co.uk), which cites
//          the Heritage Centre and Jonathan Dovey's History of Henley-in-Arden.
//   Boswell = Life of Johnson (1791), 21 and 22 March 1776 (Project Gutenberg #1564)
// ---------------------------------------------------------------------------

export const eras = [
  {
    id: 'living-memory',
    name: 'Living memory',
    range: '2020 to the 1950s',
    intro: 'A pandemic, a hidden loft rediscovered, a cult film, a TV star behind the bar, and a bar just for children.',
    entries: [
      { year: '2020', kind: 'Documented', title: 'The doors close', text: 'Like every pub and hotel in the country, the White Swan had to close its doors during the Covid-19 pandemic. It reopened afterwards and carried on as before.', body: '' },
      // Garden photo: Elliott Brown on Flickr, 4 June 2016, CC BY-SA 2.0 (see import).
      // Replaces the hotel's own All Rights Reserved Flickr photo from June 2014.
      // Bowling green: Hotel (1855) and HHC (1891 photograph). Andy: the Secret Garden
      // is condemned; public wording agreed with him is "currently closed" (no
      // legal/building status stated).
      { year: '2016', kind: 'Documented', title: 'The Secret Garden', text: 'The Secret Garden sign, photographed in June 2016. The garden behind the hotel is the same lawn that was the Swan’s bowling green in Victorian times (see 1855). The Secret Garden is currently closed.', body: '', image: garden, credit: 'Photo: Elliott Brown, “The White Swan Secret Garden - Henley-in-Arden - sign”, on Flickr', creditHref: 'https://www.flickr.com/photos/ell-r-brown/27425128576/', licence: { label: 'CC BY-SA 2.0', href: 'https://creativecommons.org/licenses/by-sa/2.0/' }, changes: 'Resized. On this page it may be trimmed at the edges to fit and lightly toned by the page’s ageing effect; this adapted version is shared under CC BY-SA 2.0 too.' },
      // REPORT. Only source: IMDb trivia for Michael Elphick (imdb.com/name/nm0255573/trivia/),
      // re-read 20 Oct 2026: "In September 2013, the new owners of the pub found a secret loft
      // space (an old priest hole) where Michael used to go to write letters to his
      // daughter and to learn scripts of programmes such as Boon." User-submitted; no news
      // report found. Andy (20 Oct 2026): say rediscovered (it was Elphick's known hideaway),
      // keep IMDb out of the public copy, no dismissive conclusion; his use of the loft sits
      // in the 1980s entry. Public source line kept neutral, no other provenance implied.
      { year: '2013', kind: 'Report', title: 'The hidden loft, rediscovered', text: 'In September 2013 the Swan’s new owners rediscovered a secret loft space, an old priest hole by repute, and said to be the hideaway Michael Elphick slipped away to in his years behind the bar (see 1980s).', body: 'Who first built it, and whether a priest ever hid there, is a question the building has yet to answer.', source: 'An online profile of Michael Elphick' },
      // Snow photo: Flickr henleywhiteswan/8404955955, "White Swan Hotel in Henley-in-Arden in the
      // snow 1", taken 22 Jan 2013, All Rights Reserved, so linked, not reproduced. Andy (20 Oct
      // 2026): it is NOT one of the hotel's own photographs. The Flickr page names no photographer
      // and the account it sits on does not establish who took it, so no ownership or authorship
      // is claimed on the page. Its own entry: January 2013 is not the September 2013 loft rediscovery.
      { year: '2013', kind: 'Documented', title: 'The Swan in the snow', text: 'The White Swan under snow on 22 January 2013.', body: '', flickr: { href: 'https://www.flickr.com/photos/henleywhiteswan/8404955955/', label: 'View on Flickr', note: 'A photograph of the White Swan in the snow, January 2013, on Flickr' } },
      // Film facts: Wikipedia (released 6 July 1990, filmed in Birmingham, Neil
      // Morrissey, Michael Elphick as Inspector Cleaver). Swan's catering and rooms:
      // Hotel only. Trailer: 'I Bought A Vampire Motorcycle - Cinema Trailer' on the
      // VampireMotorcycle YouTube channel, which is dedicated to the film and also posts
      // its teaser, premiere footage and audio-described version; embedding allowed.
      { year: '1990', kind: 'Hotel history', title: 'I Bought a Vampire Motorcycle', text: 'The cult British comedy-horror was filmed in Birmingham and reached cinemas in July 1990. Neil Morrissey starred as the bike’s owner, and the Swan’s own landlord, Michael Elphick, played the police inspector.', body: 'The Swan’s history says that while the film was being made, the hotel did the catering and put up members of the cast.', video: 'fbvqz-nv7Zw', videoTitle: 'I Bought a Vampire Motorcycle: cinema trailer', source: 'Film details: published cast and release records. Catering and rooms: the Swan’s own history.' },
      // Elphick: IMDb trivia says he owned the pub in the 1980s and early 1990s, and that he used the
      // secret loft to write letters to his daughter and learn Boon scripts (see 2013 comment); Hotel
      // says he became landlord in the 1980s. Boon (1986), died 7 Sept 2002 aged 55
      // (Wikipedia).
      { year: '1980s', kind: 'Documented in part', title: 'A TV star behind the bar', text: 'The actor Michael Elphick ran the White Swan through the 1980s and into the early 1990s. He is best remembered as Ken Boon in the TV series Boon, which began in 1986. He died in 2002, aged 55.', body: 'He is said to have kept a hideaway in a secret loft space at the Swan, where he would go to write letters to his daughter and learn his scripts for Boon (see 2013).', source: 'Landlord: the Swan’s own history. The hideaway: an online profile of Michael Elphick' },
      // 1963 photo: Flickr henleywhiteswan/7752523264, "White-Swan-1963", All Rights Reserved,
      // so linked, not reproduced (Andy, 20 Oct 2026). Andy (20 Oct 2026): the photos do not
      // belong to the hotel. The Flickr page names no photographer, only the account name
      // "Henley White Swan", which does not establish who took or owns it, so the page claims
      // no ownership or authorship (same treatment as the January 2013 snow photo).
      { year: '1963', kind: 'Documented', title: 'A pint in 1963', text: 'Enjoying a pint at the Swan, more than sixty years ago.', body: '', flickr: { href: 'https://www.flickr.com/photos/henleywhiteswan/7752523264/', label: 'View on Flickr', note: 'A photograph from 1963, on Flickr' } },
      // HOTEL: "For a short time in the 1950s Cygnets Bar at The White Swan was a
      // Children's Bar." Context: the Children Act 1908 barred children from the bars of
      // pubs (Wikipedia, Children Act 1908).
      { year: '1950s', kind: 'Hotel history', title: 'A bar just for children', text: 'For a short time in the 1950s, Cygnets, the bar that is part of the White Swan, was set aside as a children’s bar.', body: 'Children had been kept out of pub bars by law since the Children Act of 1908. So while the grown-ups had a drink in the main bar, children could sit in Cygnets with a soft drink. The name fits: cygnets are young swans.' },
    ],
  },
  {
    id: 'postcards',
    name: 'Picture postcards',
    range: '1935 to the 1890s',
    intro: 'Beams uncovered, early photographs and postcards, a path to the railway, and the magistrates move out.',
    entries: [
      { year: '1935', kind: 'Hotel history', title: 'The beams come back', text: 'In Georgian times it was the fashion to hide timber framing under plaster. When the Swan was renovated in 1935 the plaster came off, and the 16th-century beams were on show again.', look: 'The beams through the bar and restaurant', body: '' },
      // Andy's three early photographs (uploaded 20 Oct 2026 as IMG_4057-2.jpg, IMG_4090 2.jpg
      // and a numbered file; no date or caption in their metadata). The only dating we have
      // is Andy's: "before 1920, public domain". Andy (20 Oct 2026): they do not belong to the
      // hotel, so the page no longer says they were supplied by the White Swan. No exact year
      // is known, so they sit where 1920 would fall, the same way the pre-1914 postcard
      // sits by its latest possible date. Formerly a gallery at the top of the page.
      { year: 'Before 1920', kind: 'Documented', title: 'Three early photographs', text: 'Three early photographs from Henley-in-Arden. All we know of their date is that they are from before 1920; the exact years aren’t known.', body: '', images: [
        { image: oldSepia, alt: 'Early photograph from Henley-in-Arden, before 1920 (1 of 3)', shape: 'wide' },
        { image: oldPortrait, alt: 'Early photograph from Henley-in-Arden, before 1920 (2 of 3)', shape: 'tall' },
        { image: oldMarketway, alt: 'Early photograph from Henley-in-Arden, before 1920 (3 of 3)', shape: 'small' },
      ], credit: 'Before 1920. Public domain.' },
      { year: 'Undated', kind: 'Documented', title: 'A real photo postcard', text: 'The White Swan Hotel on an early photographic postcard.', body: '', image: postcardUndated, credit: 'Real photo postcard' },
      { year: 'Pre-1914', kind: 'Documented', title: 'Wish you were here', text: 'The Swan on a postcard from before the First World War.', body: '', image: postcard1914, credit: 'Real photo postcard, before 1914' },
      // Station: Henley-in-Arden station opened with the North Warwickshire Line,
      // passengers from 1 July 1908 (Wikipedia). Path: Hotel.
      { year: '1908', kind: 'Hotel history', title: 'A walk to the railway', text: 'The path beside the hotel through to the railway was made in 1908, the year Henley’s new station opened on the North Warwickshire Line. The station is still only a short walk away.', body: '' },
      // HHC, week 35: "Prior to 1903 the magistrates of the Henley Petty Sessional
      // Division sat at the White Swan." Courthouse opened 26 Aug 1903.
      { year: '1903', kind: 'Documented', title: 'The court moves out', text: 'Until 1903, the local magistrates held their petty sessions at the White Swan, trying the lesser cases for the Henley district. On 26 August 1903 Henley’s new Courthouse opened, and the court moved there.', body: '', source: 'Henley-in-Arden Heritage Centre' },
      { year: 'c.1890–1910', kind: 'Documented', title: 'Projected on glass', text: 'The White Swan on a magic lantern slide, made to be shown on a screen by lamplight.', body: '', image: lantern, credit: 'Magic lantern slide, c.1890 to 1910' },
    ],
  },
  {
    id: 'coaching-days',
    name: 'Coaching days',
    range: '1855 to the early 1700s',
    intro: 'Bowls on the lawn, a ghost story, a diarist’s bill, Dr Johnson in town, coaches at the gate, and the poem we claim.',
    entries: [
      // Bowling green, one entry (was split across 1855, 1891 and 2016). 1855: Hotel.
      // 1891: HHC, week 51, photo captioned "Harry Hawkes (far right), The original White
      // Swan Bowling Green in 1891" (heritagehenley.org.uk/images/weeks/week_image_51.jpg).
      // Rights not cleared, so the photo is not reproduced here.
      { year: '1855', kind: 'Documented in part', title: 'Bowls on the lawn', text: 'By 1855, the Swan’s history says, the lawn behind the hotel was a bowling green. The Heritage Centre has a photograph of the original White Swan bowling green in 1891, with the local butcher Harry Hawkes in the picture.', body: 'That same lawn is today’s Secret Garden (see 2016).', source: 'The Swan’s own history; Henley-in-Arden Heritage Centre' },
      // FOLKLORE. Hotel's earlier website history, quoted on Mysterious Britain: Virginia
      // Black, 18, "said to have died after falling down the stairs during a quarrel
      // with a gentleman in 1845 ... used to haunt the corridor outside bedroom 17 ... she
      // has not been seen in recent years." No record of her has been found. Rewritten
      // respectfully per brief: no labels for her, no graphic detail.
      { year: '1845', kind: 'Folklore', title: 'The Swan’s ghost story', text: 'Every old inn has a ghost story, and this is ours. It tells of a young woman named Virginia Black, said to have been eighteen, who died after a fall on the stairs in 1845.', body: 'Over the years, guests and staff said they had sensed her in the corridor outside Room 17. Nobody has found a record of Virginia herself, and by the hotel’s own account she hasn’t been seen in a long time. We tell her story as folklore, and with respect for the young woman it remembers.' },
      // Byng: The Torrington Diaries, ed. C. Bruyn Andrews (4 vols, 1934 to 1938); the
      // index in vol. 4 lists "The Swan. At Henley in Arden, III, 150, 152" (archive.org,
      // torringtondiarie009253mbp). Vol. 3 text not accessible, so the visit is
      // documented but the 2s 2d detail is Dovey's, via the Hotel.
      { year: '1792', kind: 'Documented', title: 'A diarist’s bill', text: 'John Byng, later Viscount Torrington, kept diaries of his rides around England between 1781 and 1794. The published edition of his diaries records the Swan at Henley-in-Arden.', body: 'Jonathan Dovey’s History of Henley-in-Arden says Byng stopped here in July 1792, and that he “stayed at the (White) Swan and had food and drink for 2s 2d”, two shillings and twopence. The Swan’s history adds that he is thought to have first passed through Henley on 5 July 1781.', source: 'The Torrington Diaries, ed. C. Bruyn Andrews (1934 to 1938), index; Jonathan Dovey, History of Henley-in-Arden' },
      // Boswell: left Oxford by post-chaise 21 Mar 1776, dined at Chapel House, Johnson's
      // tavern remark and Shenstone's lines, then "set out early from Henley, where we
      // had lain the preceding night", Birmingham about nine. Boswell names no inn.
      // VCH: the tradition of the Johnson and Boswell visit at the Swan is "groundless".
      // Andy: the rumour is only that Johnson was working on something here, so the
      // Dictionary (published 1755) is not claimed as the work.
      { year: '1776', kind: 'Documented in part', title: 'Dr Johnson comes to Henley', text: 'On 21 March 1776, Dr Samuel Johnson and his biographer James Boswell spent the night in Henley. Boswell wrote that down. He didn’t write down which inn.', look: 'A copy of Johnson’s Dictionary in the Johnson Suite', body: 'They had left Oxford that morning by post-chaise, heading for Birmingham and Johnson’s home town of Lichfield. Over dinner at an inn called Chapel House, Johnson said that “there is nothing which has yet been contrived by man, by which so much happiness is produced as by a good tavern or inn”, and then recited Shenstone’s lines on the warmest welcome at an inn (see 1714–1763). That night they lay at Henley, and the next morning they set out early and reached Birmingham at about nine.\n\nThe Swan’s tradition is that they stayed here, and that Johnson sat up working on something while he was here. No record names the inn, and the Victoria County History calls the tradition groundless.', source: 'James Boswell, Life of Johnson (1791); Victoria County History of Warwickshire, vol. 3 (1945)' },
      { year: '1735', kind: 'Hotel history', title: 'The fireplace', text: 'The fireplace in the Swan carries the year 1735, according to the hotel’s history the year it was put in.', look: 'The date 1735 inscribed on the fireplace', body: '' },
      // HHC, week 25: Birmingham to Stratford turnpike trust first met 20 June 1726; at
      // the peak of the coaching age seven coaches a day passed through Henley; the trust
      // folded in 1872. Staging post: Hotel. Photo: Elliott Brown, CC BY 2.0.
      { year: '1726', kind: 'Documented', title: 'Coaches at the gate', text: 'In 1726 a turnpike trust was set up to look after the road from Birmingham to Stratford, which runs through Henley and had been described as “ruinous and bad”. At the height of the coaching age, seven coaches a day passed through the town.', body: 'The Swan’s history says it was a well-known 30-mile staging post on the route between Lichfield and London, where coaches stopped to change horses. The wide gateway on the High Street, known as the coach entrance, is still there today.', look: 'The old coach entrance on the High Street', image: coach2010, credit: 'The coach entrance in 2010. Elliott Brown, CC BY 2.0', creditHref: 'https://commons.wikimedia.org/wiki/File:The_White_Swan_Henley-in-Arden_(4435855095).jpg', source: 'Henley-in-Arden Heritage Centre; the Swan’s own history' },
      // TRADITION. Poem: William Shenstone (1714 to 1763), "Written at an Inn at
      // Henley"; last stanza as quoted by Boswell. The poem names only "Henley"; the Red
      // Lion at Henley-on-Thames claims it too, and VCH calls the Henley-in-Arden
      // tradition "groundless". Andy: "We claim it either way"; written as our claim.
      { year: '1714–1763', kind: 'Reported', title: 'The warmest welcome', quote: '“Whoe’er has travell’d life’s dull round, / Where’er his stages may have been, / May sigh to think he still has found / The warmest welcome at an inn.”', text: 'The Swan has long claimed that the poet William Shenstone stayed here, and that this is the inn behind his poem “Written at an Inn at Henley”.', body: 'Shenstone grew up at the Leasowes in Halesowen, near Birmingham, and studied at Oxford, and the road between the two ran through Henley-in-Arden. His poem praises the freedom of a good inn, and its last verse became one of the most quoted in the language. Dr Johnson knew it by heart (see 1776).\n\nThe poem only says “Henley”, and an inn at Henley-on-Thames claims it too. No record settles it either way, and the Victoria County History calls our claim groundless. We still think the warmest welcome is here.' },
    ],
  },
  {
    id: 'the-old-inn',
    name: 'The old inn',
    range: '1663 to 1352',
    intro: 'Hearths, a king on the run, barns and stables, and the building you stand in.',
    entries: [
      { year: '1663', kind: 'Hotel history', title: 'Six hearths, the most in town', text: 'The Hearth Tax returns of 1663 record six hearths at the White Swan, more than at any other building in Henley at the time.', body: '' },
      // Route (Wikipedia, Escape of Charles II): Bentley Hall, 10 Sept 1651, dressed as a
      // tenant farmer's son, alias William Jackson, riding the same horse as Jane Lane, to
      // travel to Bristol as her servant; via Bromsgrove and Wootton Wawen (rode through
      // New Model Army cavalry outside the inn), Stratford, Long Marston. Wootton Wawen is
      // about 2 miles south of Henley (Wikipedia). Hotel: the Heritage Centre documents
      // that he "most probably stayed here disguised as a groom". Wording now uses
      // "servant" throughout, matching the accounts of the escape.
      { year: '1651', kind: 'Reported', title: 'A king on the run', text: 'The Swan’s history says King Charles II most probably stopped here in September 1651, in disguise, as he fled after losing the Battle of Worcester. No account of his escape names Henley or the Swan.', body: 'What is recorded is this. On 10 September 1651 the King left Bentley Hall in Staffordshire dressed as a tenant farmer’s son, calling himself William Jackson. He rode on the same horse as a young woman named Jane Lane, posing as her servant, on the road to Bristol. Their party went by way of Bromsgrove, and at Wootton Wawen, about two miles south of Henley, they rode calmly through a troop of Parliament’s cavalry gathered outside the inn. That night they stopped at Long Marston, beyond Stratford.\n\nHenley sits on that stretch of road, so the story is possible, but it can’t be proved. If he did stop here, we like to think he’d have had our best room, the Diamond Suite.', source: 'Accounts of the King’s escape; the Swan’s own history' },
      // VCH n.4: "Thomas Wheler, who was an innkeeper in 1592 ... is definitely
      // associated with the Swan in 1608." Hotel: August 1608 tenant "Mr Tomas Kirby",
      // "An Inn called the Swan with barns and stables, orchards and courtyards".
      { year: '1608', kind: 'Documented', title: '“An Inn called the Swan”', text: 'A record of August 1608 describes “an Inn called the Swan with barns and stables, orchards and courtyards”.', body: 'The Swan’s history names the tenant that year as Tomas Kirby. The Victoria County History links the innkeeper Thomas Wheler, recorded as an innkeeper in 1592, with the Swan in 1608.', source: 'The Swan’s own history; Victoria County History of Warwickshire, vol. 3 (1945)' },
      // VCH: "dating from the late 16th century and partly refronted in the late 17th
      // century". HE: Grade II*, "Late C16 with early C17 refronting and C19 alterations";
      // first listed 6 Feb 1952.
      { year: 'Late 16th century', kind: 'Documented', title: 'The building you stand in', text: 'The timber-framed building you see today dates from the late 16th century, with its front partly rebuilt in the 1600s. It has been a listed building since 1952, and is now listed at Grade II*.', look: 'The jettied, timber-framed gable and the stone-mullioned bay windows on the High Street', body: '', source: 'Victoria County History of Warwickshire, vol. 3 (1945); Historic England' },
      // HOTEL: "The exposed bit of wall you can see by table 9 in the bar area ... is said
      // to be wall stone taken from the castle." Not confirmed elsewhere. Moved here from
      // the castle entry: if true, the stone was reused when the inn was built.
      { year: '16th century', kind: 'Reported', title: 'Stone from the castle?', text: 'An exposed stretch of wall in the bar, by table 9, is said to be stone taken from the ruins of Beaudesert Castle across the road and reused when the present building went up.', look: 'The bare stone wall by table 9 in the bar', body: 'Reusing stone from a ruined castle was common, but no record confirms where this stone came from. It is a story the Swan tells.' },
      { year: '1358', kind: 'Hotel history', title: '“The White Swan” is written down', text: 'According to the Swan’s history, the name first appears in the records in 1358.', body: '' },
      { year: '1352', kind: 'Hotel history', title: 'An inn on this spot', text: 'The Swan’s history dates the first inn on this site to 1352. The building that stands here today came later.', body: '' },
    ],
  },
  {
    id: 'before-the-inn',
    name: 'Before the inn',
    range: '1265 to before 1066',
    intro: 'A castle across the road, and the crest that may have given the Swan its name.',
    entries: [
      // VCH: "After Peter de Montfort was slain at the Battle of Evesham in 1265 Henley
      // was burnt down, perhaps in revenge for the part he had taken against the king."
      // Castle destroyed: Hotel.
      { year: '1265', kind: 'Documented in part', title: 'Fire and ruin', text: 'Peter de Montfort of Beaudesert was killed fighting against Henry III at the Battle of Evesham in 1265. Afterwards Henley was burnt down, perhaps in revenge for the part he had taken against the King.', body: 'The Swan\u2019s history adds that the de Montforts\u2019 castle at Beaudesert was destroyed too, and that the town grew up again from the ruins.', look: 'The Mount, the castle mound by the Church of St Nicholas, across the road', source: 'Victoria County History of Warwickshire, vol. 3 (1945); the Swan\u2019s own history' },
      { year: 'Late 11th century', kind: 'Hotel history', title: 'Beaudesert Castle', text: 'Thurstan, the first of the de Montforts of Beaudesert, built a castle on the Mount, across the road from today’s hotel. Henley grew up under its protection.', body: '' },
      { year: 'After 1066', kind: 'Hotel history', title: '“Beautiful waste”', text: 'The Norman settlers named the place Beaudesert. Henley was a small part of the lands held in Wootton Wawen by Robert de Toeni, later known as Robert de Stafford. Heritage Centre records suggest the White Swan probably takes its name from the Staffords’ crest.', body: '' },
      { year: 'Before 1066', kind: 'Hotel history', title: 'Wagen’s land', text: 'Just before the Norman Conquest, the land was held by the Saxon thane Wagen, a name later worn down to Wawen.', body: '' },
    ],
  },
]

export const credits = [
  'Present-day photos: as used on the White Swan’s previous website.',
  ['Homepage photo of the White Swan, March 2010: ', { label: 'photo by Elliott Brown on Flickr', href: 'https://www.flickr.com/photos/ell-r-brown/4435838679/' }, ', licensed under ', { label: 'CC BY 2.0', href: 'https://creativecommons.org/licenses/by/2.0/' }, '. Resized, trimmed to fit the screen and darkened behind the text.'],
  ['Secret Garden sign, June 2016: ', { label: 'photo by Elliott Brown on Flickr', href: 'https://www.flickr.com/photos/ell-r-brown/27425128576/' }, ', licensed under ', { label: 'CC BY-SA 2.0', href: 'https://creativecommons.org/licenses/by-sa/2.0/' }, '. Resized, and on the page it may be trimmed to fit and lightly toned; the adapted photo is shared under the same licence.'],
  'The 1963 photo and the January 2013 snow photo are linked on Flickr, not reproduced here.',
  'Coach entrance, 2010: Elliott Brown, CC BY 2.0, via Wikimedia Commons.',
  'Three early photographs on Our story, before 1920: public domain.',
  'Trailer: I Bought a Vampire Motorcycle, from the film’s YouTube channel.',
  'History: the White Swan’s own history, drawing on the Henley-in-Arden Museum and Heritage Centre and Jonathan Dovey’s History of Henley-in-Arden; the Victoria County History of Warwickshire, vol. 3 (1945); Historic England list entry 1382311; the Heritage Centre’s Weeks in History; James Boswell’s Life of Johnson; The Torrington Diaries, ed. C. Bruyn Andrews.',
  'Website designed and developed by Andrew.',
]
