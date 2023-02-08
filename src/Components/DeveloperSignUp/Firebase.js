import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCu8w90M61vnb3A7YJMv2l67An7f0aaMdQ",
    authDomain: "drew-computer-science-website.firebaseapp.com",
    projectId: "drew-computer-science-website",
    storageBucket: "drew-computer-science-website.appspot.com",
    messagingSenderId: "1029219332201",
    appId: "1:1029219332201:web:551050ba8f81168e4672f8",
    measurementId: "G-81NSRFSC3G"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


var database = firebase.database