// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJN24iCQSnq0g8Eq5FqY-mwsAlk5SO4ds",
  authDomain: "asgard-f1996.firebaseapp.com",
  projectId: "asgard-f1996",
  storageBucket: "asgard-f1996.appspot.com",
  messagingSenderId: "983860094550",
  appId: "1:983860094550:web:ec8d0f70116a919199fdf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);