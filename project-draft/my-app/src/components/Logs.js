import React, { useState } from 'react';

import { Nav } from './Nav';
import { Footer } from './Footer';

function LogContainer(props) {
    const [isFilterOpen, setFilterOpen] = useState(false);

    const handleFilterToggle = () => {
        setFilterOpen(!isFilterOpen);
    }

    return (
        <section className="logs_container">
            <div className="logs_header">
                <p>Logs</p>
                <div className="filter-container">
                <button className="filter-bttn" onClick={handleFilterToggle}>Filter</button>
            </div>
            {isFilterOpen && (
                <div className="filter-dropdown">
                    <p>filter by date</p>
                    <p>filter by pain</p>
                    <p>filter by anomaly</p>
                    <p>filter by mood</p>
                    </div>
            )}
            </div>
            <div class="log-grid">
                <img src="../img/addLog.png" alt="create Log button" />
            </div>
        </section>
    );
}



export function Logs(props) {
    return (
        <div>
            <Nav />
            <LogContainer />
            <Footer />
        </div>
    );
}

