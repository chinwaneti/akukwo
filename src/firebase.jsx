import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"; // Import getFirestore for Firestore
import { getDatabase } from "firebase/database";
import "firebase/database"; // Import Firestore module

const firebaseConfig = {
  apiKey: "AIzaSyC8gRhFlUvMCW5p1scNXZBXh-pzSkSgnsQ",
  authDomain: "school-4f29f.firebaseapp.com",
  projectId: "school-4f29f",
  storageBucket: "school-4f29f.appspot.com",
  messagingSenderId: "1006522377196",
  appId: "1:1006522377196:web:7c138615072c79dc6b96c9",
  measurementId: "G-HQRNRL5QSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app); // Use getFirestore for Firestore

export { app, analytics, auth, database };
