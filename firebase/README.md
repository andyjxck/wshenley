# Website editor: security rules

The website editor (`src/editor/`) saves to the Staff Hub's Firebase project (`twsched-f8b16`), so its
security rules live with the Staff Hub's rules in the **andyjxck/twsched** repo. This folder holds the
website's part and its tests. **The editor does not work on the live site until these rules are deployed.**
Until then, signing in at `#admin` just says the account isn't approved, and visitors see the site exactly
as it is built.

## What the rules allow

| | Visitors | Staff Hub accounts | Approved editors (owners, plus `webEditors/{uid}`) |
|---|---|---|---|
| `siteContent/published` | read | read | read, write |
| `siteContent/draft` | no | no | read, write |
| `siteContentHistory/*` | no | no | read, add (never change or delete) |
| `webEditors/*` | no | own entry only | owners add and remove editors |
| Storage `site-draft/*` (draft photos) | no | no | view, upload, delete |
| Storage `site/*` (published photos) | view | view | upload new (never overwrite or delete) |

Writes must have exactly the expected fields, the editor's own uid and the server's time. Photos must be
JPEGs of 8 MB or less with a random 24-character name.

To approve someone who isn't an owner: in the Firebase console, create a document `webEditors/<their uid>`
(for example `{ name: 'Sam' }`). Delete it to remove them.

## Deploying (needs approval first: this changes the live Staff Hub rules)

1. In andyjxck/twsched, paste `website-editor.firestore.rules` inside
   `match /databases/{database}/documents { ... }` in `firestore.rules`, and
   `website-editor.storage.rules` inside `match /b/{bucket}/o { ... }` in `storage.rules`.
2. Run the tests below against the merged files.
3. `firebase deploy --only firestore:rules,storage --project twsched-f8b16` from the twsched repo.

## Testing

`rules.test.mjs` runs 41 checks against the Firebase emulators with the merged rules files:

```
mkdir /tmp/rt && cd /tmp/rt
# copy the merged firestore.rules and storage.rules here, plus a firebase.json pointing at them
npm i @firebase/rules-unit-testing firebase
npx firebase-tools emulators:exec --only firestore,storage --project demo-wshenley "node /path/to/rules.test.mjs"
```

For a full local run of the site and editor against the emulators, build with
`VITE_FIREBASE_EMULATORS=1` (and `VITE_EMU_FIRESTORE`, `VITE_EMU_AUTH`, `VITE_EMU_STORAGE` for the ports).
Never set those for the real site.
