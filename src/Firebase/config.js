// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhuOrh96HvkKN2P4KkeNoJayyC3St5O1U",
  authDomain: "react-e-commerce-33be2.firebaseapp.com",
  projectId: "react-e-commerce-33be2",
  storageBucket: "react-e-commerce-33be2.appspot.com",
  messagingSenderId: "311615744519",
  appId: "1:311615744519:web:2cc073a192b5905c7498a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}