// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Rb7eF6W7XX8frw8GPGlXdPEWbcaAsoM",
  authDomain: "jamal-training-center.firebaseapp.com",
  projectId: "jamal-training-center",
  storageBucket: "jamal-training-center.firebasestorage.app",
  messagingSenderId: "740316103651",
  appId: "1:740316103651:web:8e4f4644c70f0baa0496d6",
  measurementId: "G-NJGL201S3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);