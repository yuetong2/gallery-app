
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmeTeSFdlEqtPfN_Pldc_kj2nvsouEOe0",
  authDomain: "gallery-app-7b680.firebaseapp.com",
  projectId: "gallery-app-7b680",
  storageBucket: "gallery-app-7b680.appspot.com",
  messagingSenderId: "374756665761",
  appId: "1:374756665761:web:42563f6a14415b285403e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage =getStorage(app)
const db = getFirestore(app);

export{storage, db};