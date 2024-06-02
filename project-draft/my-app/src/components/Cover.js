import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseUIConfig = {
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
    },
  ],
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
  credentialHelper: 'none',
};

export function Cover() {
  const auth = getAuth();

  return (
    <div className="cover">
      <img src="img/vulvas.png" alt="cover" className="cover-image" />
      <div className="log-in">
        <div className="log-in-form">
          <h1>Health Harmony</h1>
          <h2>Empowering your period</h2>
          <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
        </div>
      </div>
    </div>
  );
}
