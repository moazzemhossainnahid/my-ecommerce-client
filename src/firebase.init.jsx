// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_hFejbfHfeUP-kXFazCrHn7GgzrzQrDc",
  authDomain: "my-ecommerce-e6d83.firebaseapp.com",
  projectId: "my-ecommerce-e6d83",
  storageBucket: "my-ecommerce-e6d83.appspot.com",
  messagingSenderId: "11644642650",
  appId: "1:11644642650:web:0702b1186f3a80b45dff63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;