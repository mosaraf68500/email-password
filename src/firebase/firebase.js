// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_K4C7NtEjutvyZbEai_fH2RDNxr6RwzM",
  authDomain: "email-password-b5a53.firebaseapp.com",
  projectId: "email-password-b5a53",
  storageBucket: "email-password-b5a53.firebasestorage.app",
  messagingSenderId: "41336714082",
  appId: "1:41336714082:web:5ebf5c6b45326a6a19b23b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);