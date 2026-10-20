// Firebase (project twsched-f8b16): the public events feed and the private hire enquiry form.
// Uses the lightweight Firestore build. This web config is public by design; security rules
// only let visitors read website events and create a well-formed enquiry.
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore/lite'

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

export async function sendEnquiry(f) {
  const guests = parseInt(f.guests, 10)
  await addDoc(collection(db, 'enquiries'), {
    name: f.name.trim().slice(0, 100),
    email: f.email.trim().slice(0, 150),
    phone: f.phone.trim().slice(0, 40),
    occasion: f.occasion.slice(0, 60),
    date: f.date || '',
    guests: Number.isFinite(guests) ? Math.max(0, Math.min(1000, guests)) : 0,
    message: f.message.trim().slice(0, 3000),
    source: 'website',
    status: 'new',
    createdAt: serverTimestamp(),
  })
}
