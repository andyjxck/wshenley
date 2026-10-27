# The White Swan, Henley-in-Arden: custom website (prototype)

A hand-coded React site to replace the it'seeze site at whiteswanhenley.co.uk.
One long homepage: today's hotel at the top (book, stay, eat, what's on, private hire, find us),
then the page travels back in time as you scroll, from 2020 to before 1066. Colours warm to
sepia, then go grey; photos get older and more faded; the typeface turns old-fashioned; the
last era goes dark.

## Editing on the page (website editor)
Open the site with `#admin` on the end of the address (for example `.../wshenley/#admin`) and sign in with
a Staff Hub account that's approved to edit (owners, plus anyone an owner adds; see `firebase/README.md`).

- Click any outlined heading or paragraph and type. Paragraphs have a toolbar for bold, italic, links
  and lists. Headings are put in Title Case automatically. "Back to original" undoes a change.
- "Edit photos" on a photo spot replaces, adds, removes and reorders photos. Two or more photos become a
  slideshow (a gentle crossfade every 10 seconds).
- "Sections" changes the order of the homepage sections.
- "Preview" shows the page exactly as visitors will see it. "Save draft" keeps changes privately.
  "Publish" puts them on the live site.

Edits are stored in Firebase and laid over the built-in words and photos below, so the built-in content
is always the fallback. The editor needs the rules in `firebase/` deployed first.

## Editing the words in code
The built-in words are in `src/content.js`.

- Timeline entries are in `eras`, newest first.
- Each entry has an empty `body: ''`. Write your longer story text there. A blank line starts a
  new paragraph. Empty bodies are hidden.
- Add an entry by copying one `{ year, title, text, body }` line into the right era.
- Add a photo: put the JPG in `src/assets/`, import it at the top of `content.js`, then add
  `image: myPhoto, credit: 'Who took it'` to the entry. Older entries are toned automatically.

## Running it
```
npm install
npm run dev          # local preview with live reload
npm run build        # static site in dist/ (upload this anywhere)
npm run build:single # one self-contained index.html in dist-single/
```

## Booking
Uses the same Seekda booking engine as the current site (property code S006498): the date
search bar near the top and the room-by-room list with live prices in the Stay section.
Tested loading from a non-itseeze address. If Seekda ever fails to load, the site shows the
phone number and an email link instead. Seekda may need the new domain adding on their side
once the site moves.

## Putting it live
Any static host works (GitHub Pages, Netlify, Cloudflare Pages: all free). Pointing
whiteswanhenley.co.uk at it needs whoever controls the domain's DNS settings.

## Before it goes live
- Frith c.1960 photo and R. G. Snary sketch are marked "Permission needed" on the page.
- 2012 to 2014 photos are from the hotel's Flickr; check they still match the building.
- The enquiry form on the old site posts to it'seeze; this version uses phone and email.
- The old site's "Email us" button has a typo (westbounre.co). This site uses westbourne.co.
- The old Entertainment page lists a second number, 01564 792623. Confirm which is current.
