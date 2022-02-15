import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWUrDCvfI29LVV-k5_NIovB6iTaGWzP3I",
  authDomain: "netflix-nextjs-yt.firebaseapp.com",
  projectId: "netflix-nextjs-yt",
  storageBucket: "netflix-nextjs-yt.appspot.com",
  messagingSenderId: "18250634212",
  appId: "1:18250634212:web:4b942c3209b825fbc2adf1",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
