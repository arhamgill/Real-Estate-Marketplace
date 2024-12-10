// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-real-estate-app-80606.firebaseapp.com",
  projectId: "mern-real-estate-app-80606",
  storageBucket: "mern-real-estate-app-80606.firebasestorage.app",
  messagingSenderId: "403274579725",
  appId: "1:403274579725:web:a09f20836a999042f7fa44",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
