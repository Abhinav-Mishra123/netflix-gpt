// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMPkCjNx7dYvu1p6xsZnF7Ygm_2HrkOcs",
  authDomain: "netflixgpt-82713.firebaseapp.com",
  projectId: "netflixgpt-82713",
  storageBucket: "netflixgpt-82713.appspot.com",
  messagingSenderId: "408120587756",
  appId: "1:408120587756:web:8eeb8bba3a272429353cc9",
  measurementId: "G-QT884PPQ6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();