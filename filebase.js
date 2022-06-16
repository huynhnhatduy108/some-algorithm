// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6KHrSWLlUOfjDnMTE79svuc4l89zB89I",
  authDomain: "blog-file.firebaseapp.com",
  projectId: "blog-file",
  storageBucket: "blog-file.appspot.com",
  messagingSenderId: "421625825005",
  appId: "1:421625825005:web:f341d2aa1c6179d17b2ee4",
  measurementId: "G-W0FP7VD4SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
