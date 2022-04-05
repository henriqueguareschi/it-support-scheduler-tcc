import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC_hseghjxKLuUS7iFFuECnXHcYG2JqCbY",
    authDomain: "tcc2-5b56e.firebaseapp.com",
    projectId: "tcc2-5b56e",
    storageBucket: "tcc2-5b56e.appspot.com",
    messagingSenderId: "971712178470",
    appId: "1:971712178470:web:0ca3a58e36317ebbbc79e7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);