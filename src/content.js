// ---------------------------------------------------------------------------
// ALL THE WORDS ON THE SITE LIVE IN THIS FILE.
// Edit text here and the page updates. No layout code needs touching.
//
// Timeline entries each have a `body` field that is empty for now.
// Put your longer story text there (plain text; blank line = new paragraph)
// and it appears under that entry automatically.
// ---------------------------------------------------------------------------

import heroToday from './assets/hero-today.jpg'
import interiorToday from './assets/interior-today.jpg'
import roomLive from './assets/room-live.jpg'
import roomLive2 from './assets/room-live-2.jpg'
import whatsonLive from './assets/whatson-live.jpg'
import garden from './assets/garden.jpg'
import cygnets from './assets/cygnets.jpg'
import exterior2012 from './assets/exterior-2012.jpg'
import coach2010 from './assets/coach-entrance-2010.jpg'
import pint1963 from './assets/pint-1963.jpg'
import postcardUndated from './assets/postcard-undated.jpg'
import postcard1914 from './assets/postcard-pre1914.jpg'
import lantern from './assets/lantern-c1900.jpg'

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
  title: 'The warmest welcome at an inn',
  titleSince: 'since 1352',
  intro: 'A 16th-century coaching inn in the heart of Shakespeare’s county, giving travellers a bed for the night for over 600 years.',
}

export const rooms = {
  intro: 'Seven bedrooms, including two suites, above the bar on the High Street. Free parking at the rear for guests.',
  images: [
    { src: roomLive, alt: 'A bedroom at the White Swan' },
    { src: roomLive2, alt: 'A bedroom at the White Swan' },
  ],
  types: [
    { name: 'The Johnson Suite', price: '£135', per: 'per night', text: 'Steeped in history and perfect for a special occasion. A large room with a king size bed, where a copy of Samuel Johnson’s Dictionary is kept.' },
    { name: 'Double', price: '£125', per: 'per room, per night', text: 'Three rooms with king size beds.' },
    { name: 'Twin', price: '£125', per: 'per room, per night', text: 'Two large twin rooms. Each can be made into a double with a super king size bed.' },
    { name: 'Single', price: '', per: '', text: 'En-suite shower, flat screen TV, free wifi, and complimentary tea and coffee. Non-smoking.' },
  ],
  amenities: ['En-suite bathrooms with large drench showers', 'LCD TVs with Freeview', 'Free wifi', 'Drinks and biscuits', 'Shower gel, shampoo and conditioner', 'Hair dryer, iron and ironing board'],
  terms: [
    'Please check in by 9.30pm. Check out by 11am.',
    '48 hours’ notice is needed to cancel. Without it, the full rate is payable.',
    'Dogs are not allowed in the hotel rooms.',
    'No food is served on Sunday evenings, but the High Street has plenty of restaurants a short walk away.',
  ],
}

export const food = {
  image: interiorToday,
  intro: 'True homemade pub classics, with something for everyone.',
  menus: [
    { name: 'Lunchtime menu', when: 'Monday to Saturday, 12pm to 6pm', href: 'https://www.whiteswanhenley.co.uk/_webedit/uploaded-files/All%20Files/Lunch%20Menu%20Front%20Page.png' },
    { name: 'Evening menu', when: 'Monday to Saturday, 6pm to 9pm', href: 'https://www.whiteswanhenley.co.uk/_webedit/uploaded-files/All%20Files/Evening%20Menu.PNG' },
    { name: 'Sunday lunch', when: 'Changes every week. Call for today’s menu.', href: 'tel:+441564660303' },
  ],
  drinks: [
    { name: 'Wine', text: 'Personally chosen from the best small vineyards around the world, at value-for-money prices.' },
    { name: 'Gins and vodkas', text: 'Always a great selection of favourites behind the bar.' },
    { name: 'Henley Mile Brewery', text: 'Local, authentic ales and beers, brewed in Henley since 2020.', href: 'https://www.thehenleymile.co.uk/' },
  ],
}

export const whatsOn = {
  image: whatsonLive,
  headline: 'Every Friday: live bands, DJs and karaoke',
  text: 'Free-entry live music in the bar, plus special nights with tribute acts and comedy in Jesters & Jazz, our vintage jazz club room.',
}

export const privateHire = {
  intro: 'Rooms for any occasion: a wedding breakfast, Christmas party, business meeting, networking event, wake, baby shower or any other gathering. Catering is bespoke, from a buffet to a sit-down meal, and we can help with a DJ or band.',
  spaces: [
    { name: 'Jesters & Jazz', text: 'A vintage jazz club room with its own bar and stage. Great for parties and wedding celebrations, and perfect for a band or DJ.' },
    { name: 'Sleepover', text: 'Seven bedrooms, including two suites, with a group rate. End the night upstairs and wake up to breakfast.' },
  ],
}

export const nearby = [
  { name: 'Henley-in-Arden Museum and Heritage Centre', note: 'Just down the High Street', href: 'https://www.heritagehenley.org.uk/' },
  { name: 'Royal Shakespeare Theatre', note: 'Stratford-upon-Avon', href: 'http://www.rsc.org.uk/' },
  { name: 'Shakespeare Birthplace Trust', note: 'Stratford-upon-Avon', href: 'http://www.shakespeare.org.uk/' },
  { name: 'Warwick Castle', note: '9 miles', href: 'http://www.warwick-castle.com/' },
  { name: 'Baddesley Clinton', note: 'National Trust', href: 'http://www.nationaltrust.org.uk/baddesleyclinton/' },
  { name: 'Packwood House', note: 'National Trust', href: 'http://www.nationaltrust.org.uk/packwood-house' },
  { name: 'Coughton Court', note: 'National Trust', href: 'http://nationaltrust.org.uk/coughtoncourt' },
  { name: 'Kenilworth Castle', note: 'English Heritage', href: 'http://www.english-heritage.org.uk/daysout/properties/kenilworth-castle/' },
  { name: 'NEC and Resorts World Arena', note: 'Exhibitions and concerts', href: 'http://www.thenec.co.uk/' },
]

// ---------------------------------------------------------------------------
// THE TIMELINE: newest first, oldest last. The page gets older as you scroll.
// Each era sets the art direction for its entries.
//   year    big date shown on the left
//   title   one-line headline
//   text    short summary (from the current website's history page)
//   body    YOUR longer story text goes here (leave '' to hide)
//   look    optional 'look for it' note for things guests can still see
//   image / credit / rights   optional photo
// ---------------------------------------------------------------------------

export const eras = [
  {
    id: 'living-memory',
    name: 'Living memory',
    range: '2020 to the 1950s',
    intro: 'Pandemics, TV detectives and a pint in 1963.',
    entries: [
      { year: '2020', title: 'The doors close, probably for the first time ever', text: 'The White Swan shut, as did every pub and hotel in the country during the pandemic. It reopened to carry on business as usual.', body: '' },
      { year: '2014', title: 'The Secret Garden', text: 'The garden behind the hotel, photographed in June 2014.', body: '', image: garden, credit: 'The White Swan on Flickr, 2014' },
      { year: '2013', title: 'Cygnets Bar', text: 'Cygnets Bar, photographed in November 2013.', body: '', image: cygnets, credit: 'The White Swan on Flickr, 2013' },
      { year: '2012', title: 'The White Swan Hotel', text: 'The hotel in 2012.', body: '', image: exterior2012, credit: 'The White Swan on Flickr, 2012' },
      { year: '2010', title: 'The coach entrance', text: 'The coach entrance at 100 High Street, photographed in March 2010.', body: '', image: coach2010, credit: 'Elliott Brown, March 2010, CC BY 2.0', creditHref: 'https://commons.wikimedia.org/wiki/File:The_White_Swan_Henley-in-Arden_(4435855095).jpg' },
      { year: '1990', title: 'I Bought a Vampire Motorcycle', text: 'During filming of the cult comedy-horror, starring Neil Morrissey as a despatch rider, the White Swan did the catering and put up the cast.', body: '' },
      { year: '1980s', title: 'A TV star behind the bar', text: 'Actor Michael Elphick became landlord. He is best remembered as Ken Boon in the hit series Boon (1986), and died aged just 55.', body: '' },
      { year: '1963', title: 'Enjoying a pint, 1963 style', text: 'Enjoying a pint at the Swan, more than sixty years ago.', body: '', image: pint1963, credit: 'The White Swan on Flickr' },
      { year: 'c.1960', title: 'The High Street frontage', text: 'Photographed by the Francis Frith company, which recorded towns and villages across Britain.', body: '' },
      { year: '1950s', title: 'A bar just for children', text: 'For a short time Cygnets Bar was a children’s bar. Children had soft drinks there while the grown-ups had much more interesting tipples in the main bar.', body: '' },
    ],
  },
  {
    id: 'postcards',
    name: 'Picture postcards',
    range: '1935 to the 1890s',
    intro: 'Beams uncovered, a path to the railway, and the Swan on glass and card.',
    entries: [
      { year: '1935', title: 'The beams come back', text: 'Covering timber was the fashion in Georgian times. During renovation in 1935 the plaster came off, revealing the original mid-16th-century beams.', look: 'The beams through the bar and restaurant', body: '' },
      { year: 'Undated', title: 'Sketched for Ansells', text: 'A sketch of the White Swan by R. G. Snary, made for the Ansells brewery.', body: '' },
      { year: 'Undated', title: 'A real photo postcard', text: 'The White Swan Hotel on an early photographic postcard.', body: '', image: postcardUndated, credit: 'Real photo postcard' },
      { year: 'Pre-1914', title: 'Wish you were here', text: 'The Swan on a postcard from before the First World War.', body: '', image: postcard1914, credit: 'Real photo postcard, before 1914' },
      { year: '1908', title: 'A walk to the railway', text: 'The path beside the hotel through to the new railway was created. Henley-in-Arden station is still only a short walk away.', body: '' },
      { year: 'c.1890–1910', title: 'Projected on glass', text: 'The White Swan on a magic lantern slide, shown on a screen by lamplight.', body: '', image: lantern, credit: 'Magic lantern slide, c.1890 to 1910' },
    ],
  },
  {
    id: 'coaching-days',
    name: 'Coaching days',
    range: '1855 to 1735',
    intro: 'Bowls on the lawn, a dictionary in the making, and dinner for two shillings.',
    entries: [
      { year: '1855', title: 'A bowling green out the back', text: 'The lawn behind the hotel was a bowling green.', body: '' },
      { year: '1792', title: 'Dinner for 2s 2d', text: 'In Jonathan Dovey’s History of Henley-in-Arden, the travel diarist John Byng “stayed at the (White) Swan and had food and drink for 2s 2d”. That is about £8.32 in 2017 money: not far off a main on our lunch menu.', body: '' },
      { year: '1781', title: 'A diarist arrives', text: 'John Byng, whose diaries ran from 1781 to 1794, is thought to have first visited Henley on 5 July 1781.', body: '' },
      { year: '1776', title: 'Dr Johnson takes a seat', text: 'Samuel Johnson, born in Lichfield in 1709, was a regular. He is said to have spent time here working on one of the most influential versions of his English Dictionary.', look: 'A copy of the Dictionary in the Johnson Suite', body: '' },
      { year: 'Coaching era', title: 'A 30-mile staging post', text: 'In the days of stagecoaches, the White Swan was a well-known stop on the road from Lichfield to London.', body: '' },
      { year: '1735', title: 'The fireplace', text: 'Some time after Shenstone wrote his famous lines, the current fireplace was put in.', look: 'The year 1735, still inscribed on the fireplace', body: '' },
      { year: '1714–1763', title: 'The warmest welcome', quote: '“Whoever has travelled life’s dull round, wherever his stages may have been, may sigh to think he still has found, the warmest welcome at an inn.”', text: 'The poet William Shenstone was inspired by the White Swan to write his famous lines.', body: '' },
    ],
  },
  {
    id: 'the-old-inn',
    name: 'The old inn',
    range: '1663 to 1352',
    intro: 'Hearths, a king in disguise, barns and stables.',
    entries: [
      { year: '1663', title: 'Six hearths, the most in town', text: 'The Hearth Tax returns record six hearths at the White Swan, more than any other building in Henley at the time.', body: '' },
      { year: '1651', title: 'A king disguised as a groom', text: 'After the Battle of Worcester, King Charles II most probably stayed here disguised as a groom, fleeing the Roundheads on his way to Bristol. So says the Heritage Centre.', body: '' },
      { year: '1608', title: '“An Inn called the Swan”', text: 'The tenant, Mr Tomas Kirby, ran “an Inn called the Swan with barns and stables, orchards and courtyards”.', body: '' },
      { year: '16th century', title: 'The building you stand in', text: 'The timber frame of today’s coaching inn goes up. Its mid-16th-century beams are still overhead.', body: '' },
      { year: '1358', title: '“The White Swan” is written down', text: 'The first time the name appears in the records.', body: '' },
      { year: '1352', title: 'An inn on this spot', text: 'The first record of an inn on the site. Travellers have been stopping here ever since.', body: '' },
    ],
  },
  {
    id: 'before-the-inn',
    name: 'Before the inn',
    range: '1265 to before 1066',
    intro: 'A castle across the road, and the crest that gave the Swan its name.',
    entries: [
      { year: '1265', title: 'The castle falls', text: 'After Henry III won the Battle of Evesham, the de Montforts’ castle at Beaudesert was destroyed for their leading part in the revolt against the King. Henley-in-Arden rose from the ruins.', look: 'The Mount, across the road by the Church of St Nicholas', body: '' },
      { year: 'Late 11th century', title: 'Beaudesert Castle', text: 'Thurstan, the first of the de Montforts of Beaudesert, built a castle on the Mount, across the road from today’s hotel. Henley grew up under its protection.', look: 'Castle wall stone, by table 9 in the bar', body: '' },
      { year: 'After 1066', title: '“Beautiful waste”', text: 'The Norman settlers named the place Beaudesert. Henley was a small part of the lands held in Wootton Wawen by Robert de Toeni, later Robert de Stafford. The White Swan probably takes its name from the Staffords’ crest.', body: '' },
      { year: 'Before 1066', title: 'Wagen’s land', text: 'Just before the Norman Conquest, the land was held by the Saxon thane Wagen, a name later worn down to Wawen.', body: '' },
    ],
  },
]

export const credits = [
  'Present-day photos: the White Swan’s current website.',
  '2012 to 2014 photos and the 1963 photo: the White Swan’s Flickr account.',
  'Coach entrance, 2010: Elliott Brown, CC BY 2.0, via Wikimedia Commons.',
  'History: the White Swan’s current website, drawing on the Henley-in-Arden Museum and Heritage Centre and Jonathan Dovey’s History of Henley-in-Arden.',
]

