// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfzuPJytv6fJZITiBrd3YK_xSMz7W71Tg",
  authDomain: "chatapp-clone-78ae3.firebaseapp.com",
  projectId: "chatapp-clone-78ae3",
  storageBucket: "chatapp-clone-78ae3.firebasestorage.app",
  messagingSenderId: "298620012338",
  appId: "1:298620012338:web:d248f26221391a4552f92b",
  measurementId: "G-5WR0D49VCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);