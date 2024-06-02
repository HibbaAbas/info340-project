import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Dashboard } from './Dashboard';
import { Logs } from './Logs';
import { About } from './About';
import {Cover} from './Cover';
import { Stats } from './Stats';

// import SignInPage from './SignInPage';
// import SignUpPage from './SignUpPage';
// import ProfilePage from './ProfilePage';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';





import {Nav} from './Nav';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate=useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if(user) {
        navigate('/');

      }else{
        navigate('/login');
      }
    });
  // })
  return () => unregisterAuthObserver();
  }, [auth, navigate]);

  const logoutUser = async () => {
    await signOut(auth);
    navigate('/login');
  };
  return (
    <>
    <Nav currentUser ={currentUser} logoutUser={logoutUser}/>
   
    <Routes> 
      <Route path="/" element={<Dashboard />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Cover/>} />
      {/* <Route Path="/signup" element={<SignUpPage/>} /> */}

      {/* CHECK */}
      {/* <Route path="/cover" element={<Cover/>}/> */}
    </Routes>
  </>
  );
}

export default App;