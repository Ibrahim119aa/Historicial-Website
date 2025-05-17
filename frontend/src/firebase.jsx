import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-BltFlTQNWuYdArGDn5YYt687udbXAOQ",
  authDomain: "historicalweb-998f7.firebaseapp.com",
  projectId: "historicalweb-998f7",
  storageBucket: "historicalweb-998f7.firebasestorage.app",
  messagingSenderId: "657533815313",
  appId: "1:657533815313:web:f3161510d0ae859d70bfb0",
  measurementId: "G-7RK2CYJNTC"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
