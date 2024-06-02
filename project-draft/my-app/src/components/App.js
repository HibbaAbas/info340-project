import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { About } from './About';
import { Cover } from './Cover';
import { Stats } from './Stats';
import LogViewer from './LogViewer';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { Nav } from './Nav';

function App({ auth }) {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        navigate('/');
      } else {
        navigate('/login');
      }
    });
    return () => unregisterAuthObserver();
  }, [auth, navigate]);

  const logoutUser = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <>
      <Nav currentUser={currentUser} logoutUser={logoutUser} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/logs" element={<LogViewer />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Cover />} />
        {/* <Route path="/signup" element={<SignUpPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
