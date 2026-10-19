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
  place: 'Henley-in-Arden · Warwickshire',
  title: ['The warmest', 'welcome', 'at an inn'],
  since: '1352',
  intro: 'Rooms upstairs, good food downstairs, and a timber-framed bar that’s been pulling pints on the High Street for centuries.',
}

export const rooms = {
  intro: 'Seven bedrooms, including two suites, above the bar on the High Street. Free parking at the rear for guests.',
  // Each card flips to show the description, amenity icons and a Book Room button.
  //   code   the room's code in Seekda (the Book Room button opens that room's booking page)
  //   image  leave '' to show a "photo coming soon" card
  //   icons  any of: double, king, single, shower, bath, tv, kettle, heating, hairdryer, towels, bedding, historic
  list: [
    { name: 'Diamond Suite', code: 'DIAMOND_', sleeps: 2, image: 'https://res.cloudinary.com/seekda/image/upload/w_768,h_576,c_fill,f_auto,fl_lossy,q_auto/production/S006498/IMG_6602.jpg', text: 'Our suite with a king size bed and a bathroom with both a bath and a shower.', history: 'Rumour has it King Charles II stopped at the Swan in 1651, on the run and disguised as a servant. We like to think he stayed in our best room.', icons: ['king', 'bath', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
    { name: 'Johnson Suite', code: 'JOHNSON_', sleeps: 2, image: 'https://res.cloudinary.com/seekda/image/upload/w_768,h_576,c_fill,f_auto,fl_lossy,q_auto/production/S006498/IMG_6597.jpg', text: 'A large king size room, perfect for a special occasion.', history: 'Named after Dr Samuel Johnson, who rumour has it once stayed at the Swan. A copy of his famous Dictionary is kept in the room.', icons: ['king', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'bedding'] },
    { name: 'Room 11', code: 'DBL', sleeps: 2, image: 'https://res.cloudinary.com/seekda/image/upload/w_768,h_576,c_fill,f_auto,fl_lossy,q_auto/production/S006498/IMG_6598.jpg', text: 'A double room with an en-suite shower, full of old-building character.', icons: ['double', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
    { name: 'Room 12', code: 'SUPERKIN', sleeps: 2, image: '', text: 'A king size bed, an en-suite shower and plenty of old-inn character.', icons: ['king', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
    { name: 'Room 14', code: 'SUPERKI1', sleeps: 2, image: '', text: 'A king size bed and an en-suite shower, with plenty of old-inn character.', icons: ['king', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
    { name: 'Room 15', code: 'DOUBLE_R', sleeps: 2, image: 'https://res.cloudinary.com/seekda/image/upload/w_768,h_576,c_fill,f_auto,fl_lossy,q_auto/production/S006498/IMG_6600.jpg', text: 'A comfortable double with an en-suite shower.', icons: ['double', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
    { name: 'Room 16', code: 'SINGLE_R', sleeps: 1, image: '', text: 'A single room with an en-suite shower, ideal if you’re travelling on your own.', icons: ['single', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
    { name: 'Room 17', code: 'PERIOD_D', sleeps: 2, image: 'https://res.cloudinary.com/seekda/image/upload/w_768,h_576,c_fill,f_auto,fl_lossy,q_auto/production/S006498/IMG_6601.jpg', text: 'A period double room with an en-suite shower.', history: 'Legend says Virginia Black, who died after a fall on the stairs in 1845, haunts the corridor outside this room.', icons: ['double', 'shower', 'tv', 'kettle', 'heating', 'hairdryer', 'towels', 'historic'] },
  ],
  amenities: ['En-suite bathrooms with large drench showers', 'LCD TVs with Freeview', 'Free wifi', 'Drinks and biscuits', 'Shower gel, shampoo and conditioner', 'Hair dryer, iron and ironing board'],
  terms: [
    'Check in from 2pm until 9.30pm, and check out by 11am.',
    'Plans changed? Let us know at least 48 hours before you arrive and there’s nothing to pay. Later cancellations are charged in full.',
    'Sorry, we can’t take dogs in the bedrooms.',
  ],
}

export const food = {
  image: interiorToday,
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

export const privateHire = {
  intro: 'Rooms for any occasion: a wedding breakfast, Christmas party, business meeting, networking event, wake, baby shower or any other gathering. Catering is bespoke, from a buffet to a sit-down meal, and we can help with a DJ or band.',
  spaces: [
    { name: 'Sleepover', text: 'Our bedrooms, including two suites, with a group rate. End the night upstairs and wake up to breakfast.' },
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
    intro: 'Bowls on the lawn, a ghost on the landing, Dr Johnson in town and dinner for two shillings.',
    entries: [
      { year: '1855', title: 'A bowling green out the back', text: 'The lawn behind the hotel was a bowling green.', body: '' },
      // LEGEND. Source: the hotel's own earlier website history page, quoted on
      // Mysterious Britain (mysteriousbritain.co.uk/england/warwickshire/hauntings/
      // the-white-swan-hotel-henley-in-arden/): "an 18 year old lady of the night named
      // Virginia Black ... said to have died after falling down the stairs during a
      // quarrel with a gentleman in 1845. Virginia used to haunt the corridor outside
      // bedroom 17 ... she has not been seen in recent years." Andy: Room 17 and the
      // corridor outside are the same story. No independent record of her has been found.
      // The same old page also claims public hangings in the courtyard; left out, as
      // executions were never carried out at a local court or inn.
      { year: '1845', title: 'The girl outside Room 17', text: 'Legend says the Swan has a ghost: Virginia Black, eighteen years old, who died here in 1845.', body: 'The story goes like this. Virginia was a young woman of the night, just eighteen, and one evening in 1845 she fell into a furious quarrel with a gentleman at the top of the stairs. Whether she slipped or was pushed, nobody can say. She fell, and she never got up.\n\nRumour has it she never left, either. For years, guests and staff told of her in the corridor outside Room 17, the stretch of landing where it all happened. If you’re staying in Room 17 and you hear footsteps on the landing after the bar has closed, you’ll know whose they might be.', look: 'The corridor outside Room 17' },
      { year: '1792', title: 'Dinner for 2s 2d', text: 'In Jonathan Dovey’s History of Henley-in-Arden, the travel diarist John Byng “stayed at the (White) Swan and had food and drink for 2s 2d”. That is about £8.32 in 2017 money: not far off a main on our lunch menu.', body: '' },
      { year: '1781', title: 'A diarist arrives', text: 'John Byng, whose diaries ran from 1781 to 1794, is thought to have first visited Henley on 5 July 1781.', body: '' },
      // FACT: Boswell, Life of Johnson (1791), entries for Thursday 21 and Friday
      // 22 March 1776: they left Oxford by post-chaise, dined at Chapel House inn where
      // Johnson praised inns and "repeated, with great emotion, Shenstone's lines", then
      // "set out early from Henley, where we had lain the preceding night" and reached
      // Birmingham about nine. (Project Gutenberg #1564.) Boswell does not name the inn.
      // RUMOUR: that he stayed at the Swan and was working on something while here. The
      // hotel's old site said the Dictionary; Andy says the rumour is only that he was
      // working on SOMETHING, so the Dictionary is not claimed. VCH Warwick vol. 3 (1945)
      // calls the Johnson tradition at the Swan "groundless". Johnson's Lives of the
      // Poets (1779 to 1781) does include a life of Shenstone (Project Gutenberg #4678).
      { year: '1700s', title: 'Dr Johnson takes a seat', text: 'Rumour has it Dr Samuel Johnson once stayed at the Swan, and that he was hard at work on something.', look: 'A copy of the Dictionary in the Johnson Suite', body: 'Johnson loved an inn. He once declared that “there is nothing which has yet been contrived by man, by which so much happiness is produced as by a good tavern or inn”, and he could recite Shenstone’s lines about the warmest welcome at an inn by heart.\n\nRumour has it that on one of his journeys north to his home town of Lichfield, he stopped at the Swan and spent his time here bent over his papers, working on something. What exactly, the stories never agree. Years later he wrote his Lives of the Poets, and one of those lives belonged to William Shenstone. We’d like to think the Swan had something to do with it.' },
      { year: 'Coaching era', title: 'A 30-mile staging post', text: 'In the days of stagecoaches, the White Swan was a well-known stop on the road from Lichfield to London.', body: '' },
      { year: '1735', title: 'The fireplace', text: 'Some time after Shenstone wrote his famous lines, the current fireplace was put in.', look: 'The year 1735, still inscribed on the fireplace', body: '' },
      // HOTEL CLAIM. Poem: William Shenstone (1714 to 1763), "Written at an Inn at
      // Henley"; final stanza as quoted in Boswell's Life of Johnson (21 March 1776).
      // The poem names only "Henley": the Red Lion at Henley-on-Thames claims it too,
      // and VCH Warwick vol. 3 (1945) calls the Henley-in-Arden tradition "groundless".
      // The Guardian's Poem of the Week on it (Carol Rumens, 2010) names the White Swan
      // as the inn. Boswell shows Henley-in-Arden was on the Oxford to Birmingham road,
      // and Shenstone, from Halesowen near Birmingham, studied at Pembroke College,
      // Oxford. Andy: "Shenstone apparently did stay at the White Swan. We claim it
      // either way." Written as the hotel's claim, not as proven fact.
      { year: '1714–1763', title: 'The warmest welcome', quote: '“Whoe’er has travell’d life’s dull round, / Where’er his stages may have been, / May sigh to think he still has found / The warmest welcome at an inn.”', text: 'The poet William Shenstone stayed at the White Swan, and it’s here, we say, that he wrote “Written at an Inn at Henley”.', body: 'Shenstone grew up at the Leasowes in Halesowen, just outside Birmingham, and went up to Oxford as a young man. The road from Oxford up to Birmingham ran through Henley-in-Arden, right past our front door. We say he stopped here, stayed the night, and was so taken with the place that he wrote a poem about it.\n\nThe poem is called “Written at an Inn at Henley”, and it’s a love letter to the freedom of a good inn, where nobody fusses over you and you can come and go as you please. Its last verse became one of the most quoted in the language. Dr Johnson knew it by heart.\n\nA certain inn on the Thames likes to say the poem is about them. They’re welcome to their opinion. We know where the warmest welcome is.' },
    ],
  },
  {
    id: 'the-old-inn',
    name: 'The old inn',
    range: '1663 to 1352',
    intro: 'Hearths, a king in disguise, barns and stables.',
    entries: [
      { year: '1663', title: 'Six hearths, the most in town', text: 'The Hearth Tax returns record six hearths at the White Swan, more than any other building in Henley at the time.', body: '' },
      // FACT: Escape of Charles II (Wikipedia, citing Matthews 1966 and others); Jane
      // Lane entry (Wikipedia, citing DNB). Defeat at Worcester 3 Sept 1651; Moseley Old
      // Hall priest hole; at Bentley Hall early on 10 Sept he took the alias "William
      // Jackson" and rode as Jane Lane's servant, on the same horse in front of her, with
      // Henry Lascelles and the Petres. Route that day: Bromsgrove (he took the horse to
      // the blacksmith), Wootton Wawen (rode through Parliamentary cavalry gathered
      // outside the inn), Stratford, Long Marston (house of John Tomes, where the cook
      // set him to wind the roasting jack). Wootton Wawen is about 2 miles south of
      // Henley on the same road (Wikipedia, Wootton Wawen). No record names Henley or the
      // Swan; the Henley Heritage Centre says he "most probably" stayed here disguised as
      // a groom. Tied to the Diamond Suite at Andy's request, as the hotel's best room.
      { year: '1651', title: 'A king disguised as a groom', text: 'Rumour has it that King Charles II, on the run after the Battle of Worcester and dressed as a servant, stopped at the White Swan. We like to think he stayed in our best room.', look: 'The Diamond Suite, our best room, fit for a king', body: 'In September 1651 the young King Charles II lost the Battle of Worcester and became the most wanted man in England. For a week he hid wherever he could: up an oak tree, and squeezed into a priest hole at Moseley Old Hall while Parliament’s soldiers searched the house.\n\nOn the morning of 10 September he set out from Bentley Hall in Staffordshire in disguise. He called himself William Jackson, and he rode as the servant of a young woman named Jane Lane, sitting in front of her on the same horse and seeing to it like any groom. At Bromsgrove the horse threw a shoe, and the King of England had to take it to the blacksmith himself. A little further on, at Wootton Wawen, just two miles down the road from our door, the party rode straight through a troop of Parliamentary cavalry gathered outside the inn, and nobody looked twice. That night, at Long Marston, the cook told him off for not knowing how to turn the roasting spit.\n\nThe history books don’t mention Henley. But Henley sits just up the road from Wootton Wawen, and the Heritage Centre reckons the King most probably stopped here. Rumour has it he did, at the Swan. We like to think he stayed in our best room, the Diamond Suite.' },
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

