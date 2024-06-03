import React, { useState } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';

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
          <img src="../img/addLog.png" alt="create Log button" />
        </div>
          <img src="../img/log_1.png" alt="log 1" />
          <img src="../img/log_2.png" alt="log 2" />
          <img src="../img/log_2.png" alt="log 2" />
          <img src="../img/log_2.png" alt="log 2" />
          <img src="../img/log_2.png" alt="log 2" />
        </div>
        {isFormOpen && (
          <div className="log-form-popup">
            <form onSubmit={handleFormSubmit}>
              <h3>Add New Log</h3>
              <label>
                Date:
                <input type="date" name="date" onChange={handleInputChange} required />
              </label>
              <label>
                Pain Level:
                <input type="number" name="painLevel" onChange={handleInputChange} required />
              </label>
              <label>
                Anomaly:
                <input type="text" name="anomaly" onChange={handleInputChange} required />
              </label>
              <label>
                Mood:
                <input type="text" name="mood" onChange={handleInputChange} required />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={handleFormToggle}>Cancel</button>
            </form>
          </div>
        )}
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