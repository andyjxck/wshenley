// Firebase (project twsched-f8b16): the public events feed and the private hire enquiry form.
// Uses the lightweight Firestore build. This web config is public by design; security rules
// only let visitors read website events. Enquiries go through the submitEnquiry Cloud Function,
// which validates and rate-limits them on the server (visitors can't write to Firestore).
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'

const app = initializeApp({
  apiKey: 'AIzaSyDe67skrRZG6TcHFcDUI45zY6Az4Jn5Y2I',
  authDomain: 'twsched-f8b16.firebaseapp.com',
  projectId: 'twsched-f8b16',
  storageBucket: 'twsched-f8b16.firebasestorage.app',
  messagingSenderId: '293364223218',
  appId: '1:293364223218:web:0ddc66832378a1b74cd46b',
  measurementId: 'G-KTN344M0X3',
})
const db = getFirestore(app)

// Events the staff app marks "show on website" (kept up to date by a Cloud Function).
export async function loadEventsFeed() {
  const snap = await getDoc(doc(db, 'public', 'events'))
  return snap.exists() ? snap.data().events || [] : []
}

const ENQUIRY_URL = 'https://europe-west2-twsched-f8b16.cloudfunctions.net/submitEnquiry'

// Throws an Error with .code ('invalid-argument', 'resource-exhausted', ...) and a friendly message.
export async function sendEnquiry(f) {
  const data = {
    name: f.name.trim().slice(0, 100),
    email: f.email.trim().slice(0, 150),
    phone: f.phone.trim().slice(0, 40),
    occasion: f.occasion.slice(0, 60),
    date: f.date || '',
    guests: f.guests === '' ? '' : String(f.guests).trim().slice(0, 4),
    message: f.message.trim().slice(0, 3000),
    website: f.website || '',
  }
  const res = await fetch(ENQUIRY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  })
  let body = {}
  try { body = await res.json() } catch { /* not JSON */ }
  if (!res.ok || body.error || !body.result) {
    const err = new Error((body.error && body.error.message) || `HTTP ${res.status}`)
    err.code = body.error ? String(body.error.status || '').toLowerCase().replace(/_/g, '-') : 'unavailable'
    throw err
  }
  return body.result
}
