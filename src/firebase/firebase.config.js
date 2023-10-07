// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB31ibQf4T-oTDIc-awsKyQvfXBc_gXkPw",
  authDomain: "taiful-firebase.firebaseapp.com",
  projectId: "taiful-firebase",
  storageBucket: "taiful-firebase.appspot.com",
  messagingSenderId: "6376945654",
  appId: "1:6376945654:web:ab5655908bc0ff9ce179d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
