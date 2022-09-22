
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCBAyj8D0rhy6sJiWsYTtAXwlOK-MaQe6w",
  authDomain: "ticketing-system-62d9a.firebaseapp.com",
  projectId: "ticketing-system-62d9a",
  storageBucket: "ticketing-system-62d9a.appspot.com",
  messagingSenderId: "112850878709",
  appId: "1:112850878709:web:4c9f6bad88ab27355885bc",
  measurementId: "G-ZHX8T33KSC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth();

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, provider ,db};