// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, signInWithPopup, signOut, getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn9KnjY_-6IzKjpzgNS1qI7UNkthDesuA",
  authDomain: "web-pt-32.firebaseapp.com",
  projectId: "web-pt-32",
  storageBucket: "web-pt-32.appspot.com",
  messagingSenderId: "161400493540",
  appId: "1:161400493540:web:fa23248bd744cdb4c563f1",
  measurementId: "G-0114WCDWRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const login = () => {
    signInWithPopup(auth, provider).then(res => {
        localStorage.setItem('token', res.user.accessToken);
        window.location.href = '/home';
    })
}

export const logout = () => {
    signOut(auth).then(() => {
        localStorage.removeItem('token');
        window.location.href = '/';
    })  
}