import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"
const firebaseApp = initializeApp({

})
const auth = getAuth(firebaseApp)
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log("logged in!");
    } else {
        console.log("no user");
    }
});