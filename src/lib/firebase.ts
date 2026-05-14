import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_vh4U3I6mz9T7yFbrBO8sSmeRmgqX5HY",
  authDomain: "stillmind-8907e.firebaseapp.com",
  projectId: "stillmind-8907e",
  storageBucket: "stillmind-8907e.firebasestorage.app",
  messagingSenderId: "44238536739",
  appId: "1:44238536739:web:d273efe07c65832e81b196",
  measurementId: "G-ZJMFVL7TWM"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();