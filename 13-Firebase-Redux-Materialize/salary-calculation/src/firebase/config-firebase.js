// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getFirestore, 
  Timestamp, 
  FieldPath, 
  doc, 
  addDoc, 
  setDoc, 
  collection, 
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { 
  signInWithPopup, 
  getAuth, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  GoogleAuthProvider, 
  updateProfile 
} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()
const provider = new GoogleAuthProvider()
const googleAuhtProvider = GoogleAuthProvider

const auth = getAuth()

export { 
  analytics, 
  db, 
  googleAuhtProvider, 
  signInWithPopup, 
  auth, 
  provider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile, 
  signOut,
  addDoc, 
  setDoc, 
  getDocs,
  updateDoc,
  deleteDoc,
  doc, 
  collection,
}