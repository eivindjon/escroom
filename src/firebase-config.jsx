// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUk9h-z-iiSC3XWBGVW4CsNPGupl_vOzY",
  authDomain: "escroom-a89e7.firebaseapp.com",
  projectId: "escroom-a89e7",
  storageBucket: "escroom-a89e7.appspot.com",
  messagingSenderId: "8616535627",
  appId: "1:8616535627:web:d51d977dfb7b2be4218fce",
  measurementId: "G-4HGJ91T21H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};