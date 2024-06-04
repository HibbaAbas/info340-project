import React, { useState, useEffect } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import Model from './Model';
import happyFace from '../img copy/happyface.png';
import sadFace from '../img copy/sadface.png';
import angryFace from '../img copy/angryface.png';
import neutralFace from '../img copy/neutralface.png';
import addLog from '../img copy/addLog copy.png';
import log1 from '../img copy/log_1 copy.png';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, push, onValue } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

function LogContainer(props) {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [logData, setLogData] = useState({});
  const [logs, setLogs] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const navigate = useNavigate();

  // observer to make sure user is logged in
  useEffect(() => {
    // tracking if user is logged out
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // read the user's logs
        console.log('logged in', firebaseUser.displayName);
        fetchUserLogs(firebaseUser.uid);
      } else {
        console.log('logged out');
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [auth, navigate]);

  // read the user's logs from the database
  const fetchUserLogs = (uid) => {
    setLoading(true);
    const db = getDatabase();
    const logsRef = ref(db, `users/${uid}/logs`);

    // if user adds a log, then add it to the logs array
    onValue(logsRef, (snapshot) => {
      const data = snapshot.val();
      const logsList = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setLogs(logsList);
      setLoading(false);
    });
  };

  const handleFilterToggle = () => {
    setFilterOpen(!isFilterOpen);
  };

  const handleFormToggle = () => {
    setFormOpen(!isFormOpen);
    setSelectedLog(null);
    setLogData({});
  };

  // adds the user's input to the log data
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLogData({
      ...logData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // write user's saved log to the database
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase();
    const user = auth.currentUser;

    // save log to user's data
    if (user) {
      const logRef = selectedLog ? ref(db, `users/${user.uid}/logs/${selectedLog.id}`) : push(ref(db, `users/${user.uid}/logs`));
      set(logRef, logData)
        .then(() => {
          console.log('Log Saved!');
          setFormOpen(false);
          setLogData({});
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      // user not logged in
      console.log('No user signed in');
    }
  };

  // logic for user to re-open their logs
  const handleLogClick = (log) => {
    setLogData(log);
    setSelectedLog(log);
    setFormOpen(true);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

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
          <img src={`${process.env.PUBLIC_URL}/img/addLog.png`} alt="Add Log button" />
        </div>
        {logs.map((log) => (
          <img key={log.id} src={`${process.env.PUBLIC_URL}/img/log1.png`} alt={`log ${log.id}`} onClick={() => handleLogClick(log)} />
        ))}
      </div>
      <Model show={isFormOpen} handleClose={handleFormToggle}>
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
                  <input type="radio" name="mood" value="happy" checked={logData.mood === 'happy'} onChange={handleInputChange} />
                </label>
                <label>
                  <img src={sadFace} alt="Sad" style={{ width: '30px', height: '30px' }} />
                  <input type="radio" name="mood" value="sad" checked={logData.mood === 'sad'} onChange={handleInputChange} />
                </label>
                <label>
                  <img src={angryFace} alt="Angry" style={{ width: '30px', height: '30px' }} />
                  <input type="radio" name="mood" value="angry" checked={logData.mood === 'angry'} onChange={handleInputChange} />
                </label>
                <label>
                  <img src={neutralFace} alt="Neutral" style={{ width: '30px', height: '30px' }} />
                  <input type="radio" name="mood" value="neutral" checked={logData.mood === 'neutral'} onChange={handleInputChange} />
                </label>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>Flow:</span>
              <div className="flow-button-container" style={{ display: 'flex', gap: '10px' }}>
                {[1, 2, 3, 4, 5].map((level) => (
                  <label key={level} className={`flow-button ${logData.flowLevel === level ? 'selected' : ''}`}>
                    <input type="radio" name="flowLevel" value={level} checked={logData.flowLevel === level} onChange={handleInputChange} />
                    {'💧'.repeat(level)} {/* Increasing number of drops for each level */}
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
