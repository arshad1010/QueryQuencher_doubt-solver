// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0EZMT0rYLx9gNbNQQd9qKCPPSBopAYUU",
  authDomain: "doubt-solver-e37aa.firebaseapp.com",
  projectId: "doubt-solver-e37aa",
  storageBucket: "doubt-solver-e37aa.appspot.com",
  messagingSenderId: "889801166772",
  appId: "1:889801166772:web:9a113651066bf1c2f22ce1",
  measurementId: "G-CENSE9LE8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth=getAuth();
const provider=new GoogleAuthProvider();
export {auth,provider};