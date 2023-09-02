// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVvAZW_9TrexVSvSsDAyXecuOPO41tKMM",
  authDomain: "netflixgpt-2002.firebaseapp.com",
  projectId: "netflixgpt-2002",
  storageBucket: "netflixgpt-2002.appspot.com",
  messagingSenderId: "424239295661",
  appId: "1:424239295661:web:19a67e3483779738c82a24",
  measurementId: "G-XRKNB4WFZT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
