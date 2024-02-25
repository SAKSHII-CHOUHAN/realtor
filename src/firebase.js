// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1ILjiTYiBXWZknNgjzB9XZVpGC0OhsnE",
  authDomain: "realtor-react-dd9e2.firebaseapp.com",
  projectId: "realtor-react-dd9e2",
  storageBucket: "realtor-react-dd9e2.appspot.com",
  messagingSenderId: "841555518534",
  appId: "1:841555518534:web:6bab121c13513029a2d647",
  measurementId: "G-9GKF86KXY4"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();