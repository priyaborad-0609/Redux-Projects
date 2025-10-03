
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCfzuPJytv6fJZITiBrd3YK_xSMz7W71Tg",
  authDomain: "chatapp-clone-78ae3.firebaseapp.com",
  projectId: "chatapp-clone-78ae3",
  storageBucket: "chatapp-clone-78ae3.firebasestorage.app",
  messagingSenderId: "298620012338",
  appId: "1:298620012338:web:d248f26221391a4552f92b",
  measurementId: "G-5WR0D49VCF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);