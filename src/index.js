import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcNUsPg-VfITFXk06gPQcNQCFuSRVenHw",
  authDomain: "cart-web-app-5bef1.firebaseapp.com",
  projectId: "cart-web-app-5bef1",
  storageBucket: "cart-web-app-5bef1.appspot.com",
  messagingSenderId: "449878689661",
  appId: "1:449878689661:web:0c32a894f1f6c34826ae14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);

ReactDOM.render(<App />, document.getElementById('root'));
