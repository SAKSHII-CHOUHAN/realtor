
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1ILjiTYiBXWZknNgjzB9XZVpGC0OhsnE",
  authDomain: "realtor-react-dd9e2.firebaseapp.com",
  projectId: "realtor-react-dd9e2",
  storageBucket: "realtor-react-dd9e2.appspot.com",
  messagingSenderId: "841555518534",
  appId: "1:841555518534:web:6bab121c13513029a2d647",
  measurementId: "G-9GKF86KXY4"
};


 initializeApp(firebaseConfig);
export const db = getFirestore();