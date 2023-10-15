// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnclQsY795oWkn3lDOSjWTB8Fu83w8Qac",
  authDomain: "weather-authentication-app.firebaseapp.com",
  projectId: "weather-authentication-app",
  storageBucket: "weather-authentication-app.appspot.com",
  messagingSenderId: "1084144074352",
  appId: "1:1084144074352:web:0c7dd747a04a4509b97eb5",
  measurementId: "G-JJSVXTLCMM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export{auth,provider};