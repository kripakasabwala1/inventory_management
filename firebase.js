// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAnalytics} from 'firebase/analytics'
import {getFireStore, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwK8-WnopRcqHygOlM3wBFDNIXoqgoIZs",
  authDomain: "inventory-management-36f83.firebaseapp.com",
  projectId: "inventory-management-36f83",
  storageBucket: "inventory-management-36f83.appspot.com",
  messagingSenderId: "630331017013",
  appId: "1:630331017013:web:a1cb1fb1637762df9bae7c",
  measurementId: "G-R4YEH6ZN62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)
const firestore = getFirestore(app)

export{firestore}