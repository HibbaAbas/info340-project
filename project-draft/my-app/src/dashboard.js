import React from 'react';
import Nav from './Nav';
import Predictions from './Predictions';
import Container from './Container';
import MoodCheck from './MoodCheck';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Nav />
            <Predictions />
            <Container />
            <MoodCheck />
        </div>
    );
}

export default Dashboard;