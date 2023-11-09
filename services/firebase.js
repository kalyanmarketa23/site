// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { Console } from "console";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCl2IUOvRsFlwPsWDtQa_zxaEB_y1Qwp7w",
  authDomain: "kalyan-market-b3b86.firebaseapp.com",
  projectId: "kalyan-market-b3b86",
  storageBucket: "kalyan-market-b3b86.appspot.com",
  messagingSenderId: "442548039871",
  appId: "1:442548039871:web:661a312d1b40b95162160a",
  measurementId: "G-6EC9C7V43D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app); 
const database = firebase.database();

onAuthStateChanged(auth, user => {
    if(user!=null){
        console.log('logged in!');
    }
    else{
        console.log('No user');
    }
})