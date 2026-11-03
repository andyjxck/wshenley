# The White Swan, Henley-in-Arden

A custom React + Vite website for the White Swan Hotel in Henley-in-Arden. The project replaces the older itseeze site with a static, lightweight front end that has:

- a long-form homepage with a historic timeline
- a dedicated story page (`/history/`)
- live room availability and booking links
- editable content via an in-page admin/editor workflow
- Firebase-backed draft/publish storage for site content and photos
- deployment to GitHub Pages via a GitHub Actions workflow

It is designed to be easy to edit without touching the page layout: most content lives in `src/content.js`, while the site editor can override text, photos and ordering in the browser when the Firebase rules are live.

## What this repo contains

- `src/` – React app, content, editor logic, styling, booking widgets, and timeline logic
- `history/` – the standalone story page build entry
- `firebase/` – Firebase rules and test scripts for the website editor
- `public/` – static assets and fallback files
- `.github/workflows/` – deployment pipeline for GitHub Pages
- `index.html` and `history/index.html` – site entry points for the main build

## Features

### Historic, immersive homepage
The site is structured around a single homepage that starts in the present day and then moves back through time as the visitor scrolls. The content is intentionally narrative and visual, with:

- warm modern colours at the top of the page
- sepia/aged styling as the story moves into older eras
- a time-travel / scrolling timeline on the story page
- historical entries, quotes, images, and photo comparisons

### Booking and live availability
The site includes the current Seekda property integration for room search and live room availability. The front end:

- presents booking dates and room cards
- checks current room availability where possible
- falls back to phone/email contact if the booking widget is unavailable

### In-page editing
The website editor is available under `#admin` in the running site. Once the relevant Firebase rules are deployed, approved staff accounts can:

- edit text in place
- update photos, reorder photos, and create slideshows
- change section order on the homepage
- save drafts and publish content
- review changes in a preview mode

The built-in content in `src/content.js` remains the fallback and is used when no override exists.

### Firebase-backed editor
The editor stores content and drafts in Firebase, not in the static files. The rules and tests live under `firebase/` and must be deployed before the live editor works.

See `firebase/README.md` for the security model and deployment instructions.

## Repository layout

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── firebase/
│   ├── README.md
│   ├── rules.test.mjs
│   ├── website-editor.firestore.rules
│   └── website-editor.storage.rules
├── history/
│   └── index.html
├── public/
│   └── 404.html
├── src/
│   ├── App.jsx
│   ├── BookingWidget.jsx
│   ├── BeforeAfter.jsx
│   ├── EnquiryForm.jsx
│   ├── RoomCards.jsx
│   ├── WeekCalendar.jsx
│   ├── ageing.js
│   ├── assets/
│   ├── content.js
│   ├── editables.js
│   ├── editor/
│   ├── firebase.js
│   ├── liveAvailability.js
│   ├── main.jsx
│   ├── richText.js
│   ├── site.jsx
│   ├── styles.css
│   ├── titleCase.js
│   ├── updateCheck.js
│   └── useTimeTravel.js
├── .gitignore
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── ...
```

## Branch overview

This repo has a few active branches and deployment-related branches:

- `main` – source of truth for the current site implementation
- `gh-pages` – deployed static output used by GitHub Pages
- `website-editor` – editor-focused changes and iterations
- `website-editor-modal-redesign` – modal redesign work for the admin editor
- `website-editor-nearby-map` – nearby map/editor improvements
- `website-editor-newlines` – newline handling and editor text fixes
- `website-editor-split-hire` – layout changes for the private hire section
- `website-editor-tag-colours` – styling/tag improvements in the editor
- `website-editor-upload-fix` – upload-related fixes

The main project work is still centered on the `main` branch, while the `gh-pages` branch tracks the built output.

## Local development

Install dependencies:

```bash
npm install
```

Run a local dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

This writes a static site to `dist/`.

Create a single-file build for previewing or portable distribution:

```bash
npm run build:single
```

This writes a self-contained HTML bundle to `dist-single/`.

## Deployment

The project deploys to GitHub Pages through `.github/workflows/deploy.yml`.

The workflow:

- checks out the repo
- sets up Node 20
- runs `npm ci`
- runs `npm run build`
- pushes the generated `dist/` contents to the `gh-pages` branch

This means the website can be published from the repository without a separate host.

## Content editing in code

Most written content is in `src/content.js`.

A few useful notes:

- timeline entries live inside `eras` and are ordered newest first
- each entry can include `body`, `quote`, `image`, and other metadata
- blank lines in `body` create paragraph breaks
- older entries are automatically aged/toned for the visual timeline effect

If you want to add a new historical entry, copy an existing object in the relevant era and adjust the text, title, year and image details.

## Firebase editor notes

Before the live site editor works, the Firebase rules in `firebase/` must be deployed to the Staff Hub Firebase project and approved for use.

The site expects:

- `#admin` mode in the browser
- a Staff Hub account with editor approval
- rules deployed for content + storage paths used by the editor

The `firebase/README.md` file documents the exact deployment and testing approach.

## Important project notes

There are a few practical considerations documented in the source and earlier project notes:

- the booking engine uses the same Seekda property code (`S006498`) as the current site
- the project has a two-page static build: homepage and history page
- content and images are intentionally static but can be overridden through the Firebase editor
- the `build` and `build:single` commands are tuned for static hosting and self-contained previewing

## Summary

This repo is a custom, hand-built hospitality website for the White Swan, built with React and Vite, with historical storytelling, booking tools, and an admin editor that saves over the default site content through Firebase. It is designed to be hosted as a static site while remaining easy to edit by staff without touching code.
