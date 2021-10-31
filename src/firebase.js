// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp5z5AqMiSYBpQqkXFM9tlfHKHS3Nnz80",
  authDomain: "adresor.firebaseapp.com",
  projectId: "adresor",
  storageBucket: "adresor.appspot.com",
  messagingSenderId: "534025497761",
  appId: "1:534025497761:web:934b3f2406c4876e29d4e0"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

export default db;