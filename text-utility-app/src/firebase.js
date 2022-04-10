// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrSjn47XgGUZmW-afq0aI9G-eNVmz1kCw",
  authDomain: "text-utility-app.firebaseapp.com",
  projectId: "text-utility-app",
  storageBucket: "text-utility-app.appspot.com",
  messagingSenderId: "998720664837",
  appId: "1:998720664837:web:432a90f64b65c1a2d0736c",
  measurementId: "G-VR7WEPY5QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;