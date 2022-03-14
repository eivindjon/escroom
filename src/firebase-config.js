import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCUk9h-z-iiSC3XWBGVW4CsNPGupl_vOzY",
    authDomain: "escroom-a89e7.firebaseapp.com",
    projectId: "escroom-a89e7",
    storageBucket: "escroom-a89e7.appspot.com",
    messagingSenderId: "8616535627",
    appId: "1:8616535627:web:d51d977dfb7b2be4218fce",
    measurementId: "G-4HGJ91T21H"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);