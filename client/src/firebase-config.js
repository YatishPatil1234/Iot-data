// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzAJ7d__qjtC0FkrDosmKJoV95nUaIWv0",
  authDomain: "iot-data-1cd92.firebaseapp.com",
  projectId: "iot-data-1cd92",
  storageBucket: "iot-data-1cd92.appspot.com",
  messagingSenderId: "35613654193",
  appId: "1:35613654193:web:4251c4951680234b4c3690",
  measurementId: "G-NYJ737QYQE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
