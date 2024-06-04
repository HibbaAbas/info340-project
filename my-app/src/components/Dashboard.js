import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Nav } from './Nav';
import { Predictions } from './Predictions';
import { Container } from './Container';
import { Footer } from './Footer';

export function Dashboard(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        // Cleanup function to unsubscribe from the observer
        return () => unsubscribe();
    }, []);

    return (
        <div className="Dashboard">
            <Nav /> 
            <Predictions />
            <Container />
            <Footer />  
        </div>
    );
}
