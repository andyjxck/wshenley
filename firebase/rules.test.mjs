// Security rules tests for the website editor. Runs against the Firebase emulators with the Staff Hub's
// rules plus the two website-editor snippets merged in (see firebase/README.md for how to run).
import { readFileSync } from 'node:fs'
import { initializeTestEnvironment, assertSucceeds, assertFails } from '@firebase/rules-unit-testing'
import { doc, getDoc, setDoc, updateDoc, deleteDoc, serverTimestamp, collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getBytes, deleteObject } from 'firebase/storage'

const dir = process.env.RULES_DIR || '.'
const env = await initializeTestEnvironment({
  projectId: 'demo-wshenley',
  firestore: { rules: readFileSync(`${dir}/firestore.rules`, 'utf8'), host: '127.0.0.1', port: 8080 },
  storage: { rules: readFileSync(`${dir}/storage.rules`, 'utf8'), host: '127.0.0.1', port: 9199 },
})

let pass = 0, fail = 0
async function t(name, fn) {
  try { await fn(); pass++; console.log('  ok  ', name) } catch (e) { fail++; console.log('  FAIL', name, '\n      ', e.message) }
}

const who = {
  anon: env.unauthenticatedContext(),
  owner: env.authenticatedContext('owner1', { role: 'owner' }),
  ownerNewPw: env.authenticatedContext('owner2', { role: 'owner', pwChange: true }),
  manager: env.authenticatedContext('mgr1', { role: 'manager' }),
  approvedMgr: env.authenticatedContext('mgr2', { role: 'manager' }),
  staff: env.authenticatedContext('staff1', { role: 'staff' }),
  stranger: env.authenticatedContext('rando', {}),
}
const body = (uid, extra = {}) => ({ text: { 'home.eat.heading': 'Food' }, photos: {}, order: ['stay', 'eat', 'whatson', 'hire', 'visit'], updatedAt: serverTimestamp(), updatedBy: uid, ...extra })

await env.clearFirestore()
await env.clearStorage()
await env.withSecurityRulesDisabled(async (c) => {
  const db = c.firestore()
  await setDoc(doc(db, 'siteContent/published'), { text: {}, photos: {}, order: [] })
  await setDoc(doc(db, 'siteContent/draft'), { text: { secret: 'draft words' }, photos: {}, order: [] })
  await setDoc(doc(db, 'webEditors/mgr2'), { name: 'Approved manager' })
  await uploadBytes(ref(c.storage(), 'site/aaaaaaaaaaaaaaaaaaaaaaaa.jpg'), new Uint8Array([1, 2, 3]), { contentType: 'image/jpeg' })
  await uploadBytes(ref(c.storage(), 'site-draft/bbbbbbbbbbbbbbbbbbbbbbbb.jpg'), new Uint8Array([1, 2, 3]), { contentType: 'image/jpeg' })
})
const fs = (c) => c.firestore()

console.log('Firestore')
await t('visitor can read published content', () => assertSucceeds(getDoc(doc(fs(who.anon), 'siteContent/published'))))
await t('visitor cannot read the draft', () => assertFails(getDoc(doc(fs(who.anon), 'siteContent/draft'))))
await t('visitor cannot publish', () => assertFails(setDoc(doc(fs(who.anon), 'siteContent/published'), body('x'))))
await t('staff member cannot read the draft', () => assertFails(getDoc(doc(fs(who.staff), 'siteContent/draft'))))
await t('staff member cannot publish', () => assertFails(setDoc(doc(fs(who.staff), 'siteContent/published'), body('staff1'))))
await t('manager (not approved) cannot read the draft', () => assertFails(getDoc(doc(fs(who.manager), 'siteContent/draft'))))
await t('manager (not approved) cannot save a draft', () => assertFails(setDoc(doc(fs(who.manager), 'siteContent/draft'), body('mgr1'))))
await t('signed-in account with no role cannot read the draft', () => assertFails(getDoc(doc(fs(who.stranger), 'siteContent/draft'))))
await t('owner still on a temporary password cannot edit', () => assertFails(setDoc(doc(fs(who.ownerNewPw), 'siteContent/draft'), body('owner2'))))
await t('owner can read the draft', () => assertSucceeds(getDoc(doc(fs(who.owner), 'siteContent/draft'))))
await t('owner can save a draft', () => assertSucceeds(setDoc(doc(fs(who.owner), 'siteContent/draft'), body('owner1'))))
await t('owner can publish', () => assertSucceeds(setDoc(doc(fs(who.owner), 'siteContent/published'), body('owner1'))))
await t('approved manager can save and publish', async () => {
  await assertSucceeds(setDoc(doc(fs(who.approvedMgr), 'siteContent/draft'), body('mgr2')))
  await assertSucceeds(setDoc(doc(fs(who.approvedMgr), 'siteContent/published'), body('mgr2')))
})
await t('editor cannot write other siteContent documents', () => assertFails(setDoc(doc(fs(who.owner), 'siteContent/other'), body('owner1'))))
await t('editor cannot sign as someone else', () => assertFails(setDoc(doc(fs(who.owner), 'siteContent/published'), body('mgr2'))))
await t('extra fields are refused', () => assertFails(setDoc(doc(fs(who.owner), 'siteContent/published'), body('owner1', { script: 'x' }))))
await t('a client-chosen timestamp is refused', () => assertFails(setDoc(doc(fs(who.owner), 'siteContent/published'), body('owner1', { updatedAt: new Date(0) }))))
await t('text must be a map', () => assertFails(setDoc(doc(fs(who.owner), 'siteContent/published'), body('owner1', { text: 'x' }))))
await t('published content cannot be deleted', () => assertFails(deleteDoc(doc(fs(who.owner), 'siteContent/published'))))
await t('editor can add a history copy', () => assertSucceeds(addDoc(collection(fs(who.owner), 'siteContentHistory'), body('owner1'))))
await t('history cannot be changed', async () => {
  let id
  await env.withSecurityRulesDisabled(async (c) => { id = (await addDoc(collection(c.firestore(), 'siteContentHistory'), { text: {} })).id })
  await assertFails(updateDoc(doc(fs(who.owner), 'siteContentHistory', id), { text: { a: 'b' } }))
})
await t('visitor cannot read history', () => assertFails(getDoc(doc(fs(who.anon), 'siteContentHistory/x'))))
await t('manager cannot approve themselves as an editor', () => assertFails(setDoc(doc(fs(who.manager), 'webEditors/mgr1'), { name: 'me' })))
await t('owner can approve an editor', () => assertSucceeds(setDoc(doc(fs(who.owner), 'webEditors/staff1'), { name: 'Staff' })))
await t('approved staff member can then save a draft', () => assertSucceeds(setDoc(doc(fs(who.staff), 'siteContent/draft'), body('staff1'))))
await t('existing public website reads still work (events)', async () => {
  // sanity check that merging the snippet did not break the existing rules file
  await assertFails(setDoc(doc(fs(who.anon), 'events/x'), { title: 'x' }))
})

console.log('Storage')
const st = (c) => c.storage()
const jpg = new Uint8Array([255, 216, 255, 0])
const NAME = 'cccccccccccccccccccccccc.jpg'
await t('visitor can view a published photo', () => assertSucceeds(getBytes(ref(st(who.anon), 'site/aaaaaaaaaaaaaaaaaaaaaaaa.jpg'))))
await t('visitor cannot view a draft photo', () => assertFails(getBytes(ref(st(who.anon), 'site-draft/bbbbbbbbbbbbbbbbbbbbbbbb.jpg'))))
await t('staff member (not approved) cannot view a draft photo', async () => {
  await env.withSecurityRulesDisabled(async (c) => { await deleteDoc(doc(c.firestore(), 'webEditors/staff1')) })
  await assertFails(getBytes(ref(st(who.staff), 'site-draft/bbbbbbbbbbbbbbbbbbbbbbbb.jpg')))
})
await t('visitor cannot upload', () => assertFails(uploadBytes(ref(st(who.anon), `site/${NAME}`), jpg, { contentType: 'image/jpeg' })))
await t('manager (not approved) cannot upload', () => assertFails(uploadBytes(ref(st(who.manager), `site-draft/${NAME}`), jpg, { contentType: 'image/jpeg' })))
await t('owner can upload a draft photo', () => assertSucceeds(uploadBytes(ref(st(who.owner), `site-draft/${NAME}`), jpg, { contentType: 'image/jpeg' })))
await t('owner can view a draft photo', () => assertSucceeds(getBytes(ref(st(who.owner), `site-draft/${NAME}`))))
await t('approved manager can upload a draft photo', () => assertSucceeds(uploadBytes(ref(st(who.approvedMgr), 'site-draft/dddddddddddddddddddddddd.jpg'), jpg, { contentType: 'image/jpeg' })))
await t('owner can publish a photo', () => assertSucceeds(uploadBytes(ref(st(who.owner), `site/${NAME}`), jpg, { contentType: 'image/jpeg' })))
await t('a published photo cannot be overwritten', () => assertFails(uploadBytes(ref(st(who.owner), `site/${NAME}`), jpg, { contentType: 'image/jpeg' })))
await t('a published photo cannot be deleted', () => assertFails(deleteObject(ref(st(who.owner), `site/${NAME}`))))
await t('non-image files are refused', () => assertFails(uploadBytes(ref(st(who.owner), 'site-draft/eeeeeeeeeeeeeeeeeeeeeeee.jpg'), jpg, { contentType: 'text/html' })))
await t('odd file names are refused', () => assertFails(uploadBytes(ref(st(who.owner), 'site-draft/../evil.jpg'), jpg, { contentType: 'image/jpeg' })))
await t('files over 8 MB are refused', () => assertFails(uploadBytes(ref(st(who.owner), 'site-draft/ffffffffffffffffffffffff.jpg'), new Uint8Array(8 * 1024 * 1024 + 1), { contentType: 'image/jpeg' })))
await t('existing payslip rules untouched: staff cannot read another payslip', () => assertFails(getBytes(ref(st(who.staff), 'payslips/someoneelse/p.pdf'))))

await env.cleanup()
console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
