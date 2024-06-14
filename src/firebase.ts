import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBMV9N03F3zPkpJUKR5KQJsTPcC2AAxnpc",
  authDomain: "silockbangladesh.firebaseapp.com",
  projectId: "silockbangladesh",
  storageBucket: "silockbangladesh.appspot.com",
  messagingSenderId: "889562469739",
  appId: "1:889562469739:web:e8d44ac01de66bcd8c682e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)