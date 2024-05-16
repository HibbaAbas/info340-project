import React from 'react';

import { Nav } from './Nav';
import { Footer } from './Footer';

function LogContainer(props) {
    return (
        <section className="logs_container">
            <div className="logs_header">
                <p>Logs</p>
                <p>Filter</p>
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

