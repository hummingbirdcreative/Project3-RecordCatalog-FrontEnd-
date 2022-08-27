// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Luq0e3BYixyW635Lj8xdbU7jBFJYcTo",
  authDomain: "record-catalog.firebaseapp.com",
  projectId: "record-catalog",
  storageBucket: "record-catalog.appspot.com",
  messagingSenderId: "5517152097",
  appId: "1:5517152097:web:fe0adf09a4ac3122ec3f20"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//Initialize provider
const provider = new GoogleAuthProvider();

//Initialize reference to our auth object
//TODO: const auth = getAuth(app);
const auth = getAuth();

function login () {
  return signInWithPopup(auth, provider)
}

function logout () {
  return signOut(auth);
}

export { auth, login, logout, onAuthStateChanged }