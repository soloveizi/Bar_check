import Service from '@ember/service';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI9BXhRUSLfDI3bT2XS0-KqOwhPR5RHH8",
  authDomain: "first-try-df8a6.firebaseapp.com",
  projectId: "first-try-df8a6",
  storageBucket: "first-try-df8a6.firebasestorage.app",
  messagingSenderId: "743031833091",
  appId: "1:743031833091:web:0ad30480f18dd176098436",
  measurementId: "G-DMZSJXEVNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default class FirebaseService extends Service {
    app = initializeApp(firebaseConfig);
    db = getFirestore(this.app);
}
