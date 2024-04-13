// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtsorLUc5Wpenrp9YeaXA3NOVhk73jx5k",
  authDomain: "netflixgpt-4eeea.firebaseapp.com",
  projectId: "netflixgpt-4eeea",
  storageBucket: "netflixgpt-4eeea.appspot.com",
  messagingSenderId: "247202885460",
  appId: "1:247202885460:web:8a02a3a09caa724715a2c1",
  measurementId: "G-G3Q6RT5WKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();