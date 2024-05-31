import React, { useEffect } from 'react';
import {getAuth, EmailAuthProvider, GoogleAuthProvider} from 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const firebaseUIConfig = {
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        {provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName:true},

    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    },
};


export function Cover(props) {
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if(user) {
            console.log('User Logged In:', user.displayName);

        }
    }, [user]);

    return (
        <div className="cover">
            <img src="img/vulvas.png" alt="cover"/>
            <div className="log-in">
                <div className="log-in-form">
                    <h1>Health Harmony</h1>
                    <h2>Empowering your period</h2>
                    <h3>{user ? `Welcome, ${user.displayName}` : 'Log in'}</h3>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                    {!user && !loading && (
                        <>
                        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth}/>
                        <p>New User? Create an Account</p>
                        </>
                    )}
                    {user && (
                        <button onClick={() => auth.signOut()}>Log Out</button>
                    )}
                   
                </div>
            </div> 
        </div>
    );
}

