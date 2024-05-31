import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import './index.css';

import App from './components/App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw3NOPo_sTjzdoflksL1MEkSPJ0S2PtRc",
  authDomain: "info340group-5.firebaseapp.com",
  projectId: "info340group-5",
  storageBucket: "info340group-5.appspot.com",
  messagingSenderId: "292450042823",
  appId: "1:292450042823:web:db53547a3f5b6514670fe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
