import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {initializeApp} from 'firebase/app';

import './index.css';

import App from './components/App';


// const firebaseConfig = {
//   apiKey:"",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "", 
//   appId: "",


// };

// initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
