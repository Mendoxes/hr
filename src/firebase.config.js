import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore"; 
const firebaseConfig = {
    apiKey: "AIzaSyDiVBazbO-blxjbgst_-JjFusCCHj1Ol28",
    authDomain: "human-res-fabc9.firebaseapp.com",
    projectId: "human-res-fabc9",
    storageBucket: "human-res-fabc9.appspot.com",
    messagingSenderId: "241910545751",
    appId: "1:241910545751:web:4f38f0983f388d1174d212"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;