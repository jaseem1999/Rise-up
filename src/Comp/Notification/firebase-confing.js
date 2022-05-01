import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyD1Ie0q3FOU-4rqLRSNWP5q3J3PVwCPkio",
  authDomain: "rise-up-480a3.firebaseapp.com",
  projectId: "rise-up-480a3",
  storageBucket: "rise-up-480a3.appspot.com",
  messagingSenderId: "861313295609",
  appId: "1:861313295609:web:5e56b069772f0595dcee28",
  measurementId: "G-GM9P4M7YVK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();