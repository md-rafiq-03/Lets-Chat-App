
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSTxeYXrbtYhPhu9a_oitL_AclOjIo9Iw",
  authDomain: "chat-a64d9.firebaseapp.com",
  projectId: "chat-a64d9",
  storageBucket: "chat-a64d9.appspot.com",
  messagingSenderId: "11199430625",
  appId: "1:11199430625:web:f33ee9bc0c363d2cb25ca0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db =getFirestore();