import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCySf2vMYASfjqhTrdr5vPFZDNi01uKiTo",
  authDomain: "house-marketplace-app-1cd77.firebaseapp.com",
  projectId: "house-marketplace-app-1cd77",
  storageBucket: "house-marketplace-app-1cd77.appspot.com",
  messagingSenderId: "754208919156",
  appId: "1:754208919156:web:95ec3ad4e7ee04bc94cb21",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
