// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6dqSvmCI5q5ivrSLNUr0-XqM1FSQU3bE",
  authDomain: "netflixgpt-b964a.firebaseapp.com",
  projectId: "netflixgpt-b964a",
  storageBucket: "netflixgpt-b964a.appspot.com",
  messagingSenderId: "198329786435",
  appId: "1:198329786435:web:51781bd0a4ddb88ead34f6",
  measurementId: "G-7VB6HMY7HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();