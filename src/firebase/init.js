import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyDt9dY0WTXXLDyfENj7-Kv2tI2YUbU1xkM",
  authDomain: "the-next-bill.firebaseapp.com",
  databaseURL: "https://the-next-bill.firebaseio.com",
  projectId: "the-next-bill",
  storageBucket: "",
  messagingSenderId: "803322993871",
  appId: "1:803322993871:web:d7614f16a8cb5d3c"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

// export firestore database
export default firebaseApp.firestore();
