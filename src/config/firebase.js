// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAaX93rSxLa621i1_ZY7yJdoGMDBgg0lA",
  authDomain: "technest-17.firebaseapp.com",
  projectId: "technest-17",
  storageBucket: "technest-17.appspot.com",
  messagingSenderId: "83721436725",
  appId: "1:83721436725:web:91fc27d0cbcfb017ccfb7c",
  measurementId: "G-V420SMBHN5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db=getFirestore(app);