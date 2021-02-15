import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBduDSgeHClgQ8KTTl37fJRE82k5luXP8g",
  authDomain: "sourcery-bf633.firebaseapp.com",
  databaseURL: "https://sourcery-bf633-default-rtdb.firebaseio.com",
  projectId: "sourcery-bf633",
  storageBucket: "sourcery-bf633.appspot.com",
  messagingSenderId: "107875920353",
  appId: "1:107875920353:web:7b7877c2f629fefd06caa0",
  measurementId: "G-M7S2K8SFMG",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
