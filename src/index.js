import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"

import logo from './assets/logo.svg'
const logImg = document.getElementById("logo");
logImg.src = logo

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBIgXhGsj-8HtHKQAsbCWu2di_cLjiz6V4",
    authDomain: "adminpannel-2625e.firebaseapp.com",
    databaseURL: "https://adminpannel-2625e.firebaseio.com",
    projectId: "adminpannel-2625e",
    storageBucket: "adminpannel-2625e.appspot.com",
    messagingSenderId: "388760984590",
    appId: "1:388760984590:web:cbf7be52964d07e9a6b05f"
})
const auth = getAuth(firebaseApp)
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log("logged in!");
    } else {
        console.log("no user!!");
    }
});