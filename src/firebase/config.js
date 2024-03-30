// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiWzVuJjqL3N6zkzB2UbBaFPDWeZ1aMc0",
  authDomain: "avi-pro-mobile.firebaseapp.com",
  projectId: "avi-pro-mobile",
  storageBucket: "avi-pro-mobile.appspot.com",
  messagingSenderId: "714379198452",
  appId: "1:714379198452:web:6fa537e74641a61f6403a1",
  measurementId: "G-B3QX0N2YZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);