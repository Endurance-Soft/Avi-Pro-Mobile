import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
import { getAnalytics } from "firebase/analytics";
// import 'dotenv/config';

const firebaseConfig = {
    apiKey: "AIzaSyBiWzVuJjqL3N6zkzB2UbBaFPDWeZ1aMc0",
    authDomain: "avi-pro-mobile.firebaseapp.com",
    projectId: "avi-pro-mobile",
    storageBucket: "avi-pro-mobile.appspot.com",
    messagingSenderId: "714379198452",
    appId: "1:714379198452:web:53e907ba46c524e06403a1",
    measurementId: "G-XVHVGNEVGE",
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
export const analytics = getAnalytics(app);
