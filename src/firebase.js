import { initializeApp } from "firebase/app";
import { getauth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlnBSBBegFwxQ9FvmJhEoB0dwGrfi_4T4",
  authDomain: "realtimechat-75db4.firebaseapp.com",
  projectId: "realtimechat-75db4",
  storageBucket: "realtimechat-75db4.appspot.com",
  messagingSenderId: "750710689877",
  appId: "1:750710689877:web:b11a235d46e0b2ad2084dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getauth()
export const storage = getStorage();
export const db =getFirestore();
