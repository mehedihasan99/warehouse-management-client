// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD83bI5lPL3Xh_IsKIsO78kLIlqA78CNFY",
    authDomain: "perfect-size-d555a.firebaseapp.com",
    projectId: "perfect-size-d555a",
    storageBucket: "perfect-size-d555a.appspot.com",
    messagingSenderId: "462249909634",
    appId: "1:462249909634:web:66743d860ee0bb9161839b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;