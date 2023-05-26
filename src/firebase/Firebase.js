// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfIKLaKI9gLH6uKX1e3K1R2jRsGtMUMmc",
    authDomain: "nupurverse.firebaseapp.com",
    projectId: "nupurverse",
    storageBucket: "nupurverse.appspot.com",
    messagingSenderId: "546529155374",
    appId: "1:546529155374:web:cff15204c6faa3535a02bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, 'movies')
export const reviewsRef = collection(db, 'reviews')
export const usersRef = collection(db, "users");


export default app;