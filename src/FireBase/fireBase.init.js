// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd3u1va1c0Ts-928lk3o14ZF9jkWG8wNc",
  authDomain: "plateful-21a3d.firebaseapp.com",
  projectId: "plateful-21a3d",
  storageBucket: "plateful-21a3d.firebasestorage.app",
  messagingSenderId: "743686239247",
  appId: "1:743686239247:web:2f9d7afe330ac0d3e65f7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
