// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjfaUXq7ctVSv0XQLJ75TyVuQZ0Ohu354",
    authDomain: "business-directory-app-28654.firebaseapp.com",
    projectId: "business-directory-app-28654",
    storageBucket: "business-directory-app-28654.appspot.com",
    messagingSenderId: "34924531579",
    appId: "1:34924531579:web:df648d88440aa95c6037de",
    measurementId: "G-RBL2XN1K8V"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);