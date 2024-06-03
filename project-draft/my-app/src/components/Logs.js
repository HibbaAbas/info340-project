import React, { useState } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import Model from './Model';

import happyFace from '../img copy/happyface.png';
import sadFace from '../img copy/sadface.png';
import angryFace from '../img copy/angryface.png';
import neutralFace from '../img copy/neutralface.png';


function LogContainer(props) {
    const [isFilterOpen, setFilterOpen] = useState(false);
    const [isFormOpen, setFormOpen] = useState(false);
    const [logData, setLogData] = useState({}); // state to store form data

    const handleFilterToggle = () => {
        setFilterOpen(!isFilterOpen);
    };

    const handleFormToggle = () => {
        setFormOpen(!isFormOpen);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLogData({
            ...logData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // we need to change this, store user data in firebase somehow
        console.log(logData);
        setFormOpen(false);
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
            <div className="log-grid">
                <div className="add-log-button" onClick={handleFormToggle}>
                    <img src="../img copy/addLog.png" alt="create Log button" />
                </div>
                <img src="../img copy/log_1.png" alt="log 1" />
                <img src="../img copy/log_2.png" alt="log 2" />
                <img src="../img copy/log_2.png" alt="log 2" />
                <img src="../img copy/log_2.png" alt="log 2" />
                <img src="../img copy/log_2.png" alt="log 2" />
            </div>
            <Model show={isFormOpen} handleClose={handleFormToggle}>
                <h3>Add New Log</h3>
                <form onSubmit={handleFormSubmit}>
                    <ul className="log-form-list" style={{ listStyleType: 'none', padding: 0 }}>
                        <li>
                            Mark Unusual:
                            <label>
                                <input type="checkbox" name="markUnusual" onChange={handleInputChange} />
                            </label>
                        </li>
                        <li>
                            Date:
                            <label>
                                <input type="date" name="date" onChange={handleInputChange} required />
                            </label>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '10px' }}>Pain Level:</span>
                            <div className="circle-button-container">
                                {[1, 2, 3, 4, 5].map((level) => (
                                    <label key={level} className={`circle-button ${logData.painLevel === level ? 'selected' : ''}`}>
                                        <input type="radio" name="painLevel" value={level} onChange={handleInputChange} />
                                        {level}
                                    </label>
                                ))}
                            </div>
                        </li>
                        <li>
                            Mood:
                            <div className="mood-images" style={{ display: 'flex', gap: '10px' }}>
                                <label>
                                    <img src={happyFace} alt="Happy" style={{ width: '30px', height: '30px' }} />
                                    <input type="radio" name="mood" value="happy" onChange={handleInputChange} />
                                </label>
                                <label>
                                    <img src={sadFace} alt="Sad" style={{ width: '30px', height: '30px' }} />
                                    <input type="radio" name="mood" value="sad" onChange={handleInputChange} />
                                </label>
                                <label>
                                    <img src={angryFace} alt="Angry" style={{ width: '30px', height: '30px' }} />
                                    <input type="radio" name="mood" value="angry" onChange={handleInputChange} />
                                </label>
                                <label>
                                    <img src={neutralFace} alt="Neutral" style={{ width: '30px', height: '30px' }} />
                                    <input type="radio" name="mood" value="neutral" onChange={handleInputChange} />
                                </label>
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '10px' }}>Flow:</span>
                            <div className="flow-button-container">
                                {[1, 2, 3, 4, 5].map((level) => (
                                    <label key={level} className={`flow-button ${logData.flowLevel === level ? 'selected' : ''}`}>
                                        <input type="radio" name="flowLevel" value={level} onChange={handleInputChange} />
                                        <span style={{ fontSize: '24px' }}>💧</span> {/* Replace with image if available */}
                                    </label>
                                ))}
                            </div>
                        </li>
                        <li>
                            Symptoms:
                            <label>
                                <input type="text" name="symptoms" onChange={handleInputChange} required />
                            </label>
                        </li>
                        <li>
                            Notes:
                            <label>
                                <textarea name="notes" onChange={handleInputChange} style={{ height: '60px', width: '100%' }} placeholder="Started new medication, allergies, etc." required></textarea>
                            </label>
                        </li>
                    </ul>
                    <div style={{ textAlign: 'right' }}>
                        <button type="submit" className="save-button">Save</button>
                    </div>
                </form>
            </Model>
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
