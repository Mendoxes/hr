import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";



const app = firebase.initializeApp({
    apiKey: "AIzaSyDiVBazbO-blxjbgst_-JjFusCCHj1Ol28",
    authDomain: "human-res-fabc9.firebaseapp.com",
    projectId: "human-res-fabc9",
    storageBucket: "human-res-fabc9.appspot.com",
    messagingSenderId: "241910545751",
    appId: "1:241910545751:web:4f38f0983f388d1174d212"
  });

  console.log("ok2")
  export const db =  getFirestore()

console.log(db)
console.log(collection)

    
  export const auth = app.auth()

  export default db