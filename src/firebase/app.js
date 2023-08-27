// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

const API_KEY = import.meta.env.VITE_API_KEY
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID
const APP_ID = import.meta.env.VITE_APP_ID

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgQQnGd6usJthieMfq6K2wRJV9KkZovVg",
    authDomain: "ecommerce-ch-8b2c4.firebaseapp.com",
    projectId: "ecommerce-ch-8b2c4",
    storageBucket: "ecommerce-ch-8b2c4.appspot.com",
    messagingSenderId: "782062233383",
    appId: "1:782062233383:web:6dca4c07c637321cd16b02"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)