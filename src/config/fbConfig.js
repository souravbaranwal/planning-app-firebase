import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVgBOGlzXKDsN4hSCE5voTKEA9xy2UQ50",
  authDomain: "planning-app-22bf6.firebaseapp.com",
  databaseURL: "https://planning-app-22bf6.firebaseio.com",
  projectId: "planning-app-22bf6",
  storageBucket: "planning-app-22bf6.appspot.com",
  messagingSenderId: "489575297038",
  appId: "1:489575297038:web:d39e869347f5bae97b8c5f",
  measurementId: "G-YB08TG3MJM",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
