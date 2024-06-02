import React, { useState } from 'react';

import { Nav } from './Nav';
import { Footer } from './Footer';

function StatsHeader(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState('Year');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectYear = (year) => {
        setSelectedYear(year);
        setIsOpen(false);
    };


    return (
        <div className="stats-year">
            <p>Viewing stats for </p>
            <div className={`year-dropdown ${isOpen ? 'open' : ''}`}>
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                    {selectedYear}
                </button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={() => selectYear('2024')}>2024</li>
                    <li className="dropdown-item" onClick={() => selectYear('2023')}>2023</li>
                    <li className="dropdown-item" onClick={() => selectYear('2022')}>2022</li>
                    <li className="dropdown-item" onClick={() => selectYear('2021')}>2021</li>
                </ul>
            </div>
        </div>
    );
}

function StatsGraphs(props) {
    return (
        <div className="stats-graphs">
        <img className="graph" src="../img/graph1.png" alt="stats" />
        </div>
    );
}

export function Stats(props) {
    return (
        <div>
            {/* <Nav /> */}
            <StatsHeader />
            <StatsGraphs />
            <Footer />
        </div>
    )
}