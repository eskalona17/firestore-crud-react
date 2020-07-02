import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDERg-r0U-vryQZ54S_RU2TC-tZpQskXvA",
  authDomain: "fb-crud-react-33430.firebaseapp.com",
  databaseURL: "https://fb-crud-react-33430.firebaseio.com",
  projectId: "fb-crud-react-33430",
  storageBucket: "fb-crud-react-33430.appspot.com",
  messagingSenderId: "645662391707",
  appId: "1:645662391707:web:418d26bea2fd5c236bf53e",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
