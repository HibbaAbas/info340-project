import React from 'react';

import {Nav } from './Nav';
import { Predictions } from './Predictions';
import { Container } from './Container';
import { MoodCheck } from './MoodCheck';
import { Footer } from './Footer';

export function Dashboard(props) {
    return (
        <div className="Dashboard">
            {/* <Nav /> */}
            <Predictions />
            <Container />
            <MoodCheck />
            <Footer />  
        </div>
    );
}

