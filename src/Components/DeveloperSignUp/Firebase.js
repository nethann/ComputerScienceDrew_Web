import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDCTp-mWD6PlmZwmJOTHjet70yF9VXoa1g",
    authDomain: "drew-computer-science.firebaseapp.com",
    projectId: "drew-computer-science",
    storageBucket: "drew-computer-science.appspot.com",
    messagingSenderId: "400369458765",
    appId: "1:400369458765:web:f2331e27981ccf5351c604",
    measurementId: "G-XQKQFXLL3S"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
export {auth, db}

