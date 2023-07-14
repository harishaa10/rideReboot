import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import FIREBASE_API_KEY from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "incode-ridereboot.firebaseapp.com",
  projectId: "incode-ridereboot",
  storageBucket: "incode-ridereboot.appspot.com",
  messagingSenderId: "1008262866641",
  appId: "1:1008262866641:web:35109dd978df4c1dde87f0"
};

let app;

if (firebase.apps.length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };