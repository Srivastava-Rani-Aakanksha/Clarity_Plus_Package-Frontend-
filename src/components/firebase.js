// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDc_vFKpj2CFm8F0oQwqzluocYY57PfkoM",
  authDomain: "claritypluspackage.firebaseapp.com",
  projectId: "claritypluspackage",
  storageBucket: "claritypluspackage.appspot.com",
  messagingSenderId: "538871973898",
  appId: "1:538871973898:web:1a47eaf89e749e9f15f7f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);