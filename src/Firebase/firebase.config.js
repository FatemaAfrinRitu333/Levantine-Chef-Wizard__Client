// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaEKakEJGTRgfqhXHaLHWL_lEh2V2z6uo",
  authDomain: "levantine-cuisine.firebaseapp.com",
  projectId: "levantine-cuisine",
  storageBucket: "levantine-cuisine.appspot.com",
  messagingSenderId: "153189529441",
  appId: "1:153189529441:web:7f68fcd795ad99e16cf720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;