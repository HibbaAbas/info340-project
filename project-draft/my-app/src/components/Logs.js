import React, { useState, useEffect } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { getDatabase, ref, push, onValue } from 'firebase/database';

function LogContainer() {
    const [isFilterOpen, setFilterOpen] = useState(false);
    const [logData, setLogData] = useState({ date: '', pain: '', anomaly: '', mood: '', notes: '' });
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const logRef = ref(db, 'logs');
        onValue(logRef, (snapshot) => {
            const data = snapshot.val();
            const logsArray = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
            setLogs(logsArray);
        });
    }, []);

    const handleFilterToggle = () => {
        setFilterOpen(!isFilterOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogData({ ...logData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase();
        const logRef = ref(db, 'logs');
        push(logRef, logData);
        setLogData({ date: '', pain: '', anomaly: '', mood: '', notes: '' });
    };

    return (
        <section className="logs_container">
            <div className="logs_header">
                <p>Logs</p>
                <div className="filter-container">
                    <button className="filter-bttn" onClick={handleFilterToggle}>Filter</button>
                    {isFilterOpen && (
                        <div className="filter-dropdown">
                            <p>filter by date</p>
                            <p>filter by pain</p>
                            <p>filter by anomaly</p>
                            <p>filter by mood</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="log-form">
                <form onSubmit={handleSubmit}>
                    <label>
                        Date:
                        <input type="date" name="date" value={logData.date} onChange={handleChange} required />
                    </label>
                    <label>
                        Pain:
                        <input type="text" name="pain" value={logData.pain} onChange={handleChange} required />
                    </label>
                    <label>
                        Anomaly:
                        <input type="text" name="anomaly" value={logData.anomaly} onChange={handleChange} required />
                    </label>
                    <label>
                        Mood:
                        <input type="text" name="mood" value={logData.mood} onChange={handleChange} required />
                    </label>
                    <label>
                        Notes:
                        <textarea name="notes" value={logData.notes} onChange={handleChange} required></textarea>
                    </label>
                    <button type="submit">Add Log</button>
                </form>
            </div>
            <div className="log-grid">
                {logs.map((log) => (
                    <div key={log.id} className="log-item">
                        <p>Date: {log.date}</p>
                        <p>Pain: {log.pain}</p>
                        <p>Anomaly: {log.anomaly}</p>
                        <p>Mood: {log.mood}</p>
                        <p>Notes: {log.notes}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function Logs() {
    return (
        <div>
            <Nav />
            <LogContainer />
            <Footer />
        </div>
    );
}
