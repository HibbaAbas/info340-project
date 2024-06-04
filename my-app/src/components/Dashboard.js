import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Nav } from './Nav';
import { Predictions } from './Predictions';
import { Container } from './Container';
import { Footer } from './Footer';

export function Dashboard(props) {
    const [user, setUser] = useState(null);
    const auth = getAuth();
    const navigate = useNavigate();

    // observer to make sure user is logged in
    useEffect(() => {
        // tracking if user is logged out
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                console.log('logged in', firebaseUser.displayName);
            } else {
                console.log('logged out');
                navigate('/login');
            }
        });
        return () => unsubscribe();
    }, [auth, navigate]);


    return (
        <div className="Dashboard">
            <Nav />
            <Predictions />
            <Container />
            <Footer />
        </div>
    );
}
