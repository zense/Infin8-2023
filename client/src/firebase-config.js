// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCr61Czqm7T0Ma8dUNc9-PhX2ddRhGAaHo",
    authDomain: "infin8-2023.firebaseapp.com",
    projectId: "infin8-2023",
    storageBucket: "infin8-2023.appspot.com",
    messagingSenderId: "318200594282",
    appId: "1:318200594282:web:0723c51dfcf4b59be6af13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = app.auth;
export const db = getFirestore(app);

// firebase.firestore();
// export default firebase;