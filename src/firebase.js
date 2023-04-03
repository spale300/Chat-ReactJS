import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUN1YIXb_BuVjFhrPJZV87SSj1383OeeY",
  authDomain: "react-chat-44838.firebaseapp.com",
  projectId: "react-chat-44838",
  storageBucket: "react-chat-44838.appspot.com",
  messagingSenderId: "169195801074",
  appId: "1:169195801074:web:c0bb5644df3fd63fb2436b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
