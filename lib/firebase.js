import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_kEY,
  authDomain: "satyadevhospital-8e519.firebaseapp.com",
  projectId: "satyadevhospital-8e519",
  storageBucket: "satyadevhospital-8e519.appspot.com",
  messagingSenderId: "780520656513",
  appId: "1:780520656513:web:42cbedb2887ce761af0780",
  measurementId: "G-FKZZFS3V0B",
};

export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
