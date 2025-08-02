// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4b9I0V0HRpRscDh9ouf9Kd0p76cZ8Psk",
    authDomain: "mindnest-825f1.firebaseapp.com",
    projectId: "mindnest-825f1",
    storageBucket: "mindnest-825f1.appspot.com", // ✅ Corrected here
    messagingSenderId: "768644538399",
    appId: "1:768644538399:web:75ffe9c18ec0d427ab352a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };