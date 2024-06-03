import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export function Cover(props) {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');  // Redirect to the dashboard or home page
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');  // Redirect to the dashboard or home page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="cover">
      <img src="img/vulvas.png" alt="cover" />
      <div className="log-in">
        <div className="log-in-form">
          <h1>Health Harmony</h1>
          <h2>Empowering your period</h2>
          <h3>{isSignUp ? 'Sign Up' : 'Log In'}</h3>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
            <input 
              type="email" 
              placeholder="Email address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
          </form>
          <p>
            {isSignUp ? 'Already have an account?' : 'New user?'} 
            <button onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Log In' : 'Create an account'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
