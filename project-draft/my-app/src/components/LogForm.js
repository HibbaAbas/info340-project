import React from 'react';

export function LogForm({ logData, handleInputChange, handleFormSubmit, selectedLog }) {
    return (
        <div>
            <h3>{selectedLog ? 'Edit Log' : 'Add New Log'}</h3>
            <form onSubmit={handleFormSubmit}>
                <ul className="log-form-list" style={{ listStyleType: 'none', padding: 0 }}>
                    <li>
                        Mark Unusual:
                        <label>
                            <input type="checkbox" name="markUnusual" checked={logData.markUnusual || false} onChange={handleInputChange} />
                        </label>
                    </li>
                    <li>
                        Date:
                        <label>
                            <input type="date" name="date" value={logData.date || ''} onChange={handleInputChange} required />
                        </label>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '10px' }}>Pain Level:</span>
                        <div className="circle-button-container" style={{ display: 'flex', gap: '10px' }}>
                            {[1, 2, 3, 4, 5].map((level) => (
                                <label key={level} className={`circle-button ${logData.painLevel === level ? 'selected' : ''}`}>
                                    <input type="radio" name="painLevel" value={level} checked={logData.painLevel === level} onChange={handleInputChange} />
                                    <span>{level}</span>
                                </label>
                            ))}
                        </div>
                    </li>
                    <li>
                        Mood:
                        <div className="mood-images" style={{ display: 'flex', gap: '10px' }}>
                            <label>
                                <input type="radio" name="mood" value="happy" checked={logData.mood === 'happy'} onChange={handleInputChange} />
                                <img src={`${process.env.PUBLIC_URL}/img/a_emoji1.png`} alt="Happy" style={{ width: '30px', height: '30px' }} />
                            </label>
                            <label>
                                <input type="radio" name="mood" value="sad" checked={logData.mood === 'sad'} onChange={handleInputChange} />
                                <img src={`${process.env.PUBLIC_URL}/img/a_emoji2.png`} alt="Sad" style={{ width: '30px', height: '30px' }} />
                            </label>
                            <label>
                                <input type="radio" name="mood" value="angry" checked={logData.mood === 'angry'} onChange={handleInputChange} />
                                <img src={`${process.env.PUBLIC_URL}/img/a_emoji3.png`} alt="Angry" style={{ width: '30px', height: '30px' }} />
                            </label>
                            <label>
                                <input type="radio" name="mood" value="neutral" checked={logData.mood === 'neutral'} onChange={handleInputChange} />
                                <img src={`${process.env.PUBLIC_URL}/img/a_emoji4.png`} alt="Neutral" style={{ width: '30px', height: '30px' }} />
                            </label>
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '10px' }}>Flow:</span>
                        <div className="flow-button-container" style={{ display: 'flex', gap: '10px' }}>
                            {[1, 2, 3, 4, 5].map((level) => (
                                <label key={level} className={`flow-button ${logData.flowLevel === level ? 'selected' : ''}`}>
                                    <input type="radio" name="flowLevel" value={level} checked={logData.flowLevel === level} onChange={handleInputChange} />
                                    <span>{'💧'.repeat(level)}</span>
                                </label>
                            ))}
                        </div>
                    </li>
                    <li>
                        Symptoms:
                        <label>
                            <input type="text" name="symptoms" value={logData.symptoms || ''} onChange={handleInputChange} required />
                        </label>
                    </li>
                    <li>
                        Notes:
                        <label>
                            <textarea name="notes" value={logData.notes || ''} onChange={handleInputChange} style={{ height: '60px', width: '100%' }} placeholder="Started new medication, allergies, etc." required></textarea>
                        </label>
                    </li>
                </ul>
                <div style={{ textAlign: 'right' }}>
                    <button type="submit" className="save-button">Save</button>
                </div>
            </form>
        </div>
    );
}