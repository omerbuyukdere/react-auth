import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwSWDm45GZXAHugbxfkPeTIBqVuGJJzSw",
  authDomain: "reactauth-681e3.firebaseapp.com",
  projectId: "reactauth-681e3",
  storageBucket: "reactauth-681e3.appspot.com",
  messagingSenderId: "255252545127",
  appId: "1:255252545127:web:f90bdfdbd93115b7449ec2",
  measurementId: "G-KGLBCL4J8L",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
