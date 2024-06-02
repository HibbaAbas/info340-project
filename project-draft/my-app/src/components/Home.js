// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav className="mobile-nav">
        <div className="left-nav">
          <button className="hamburger" id="hamburger">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="right-nav">
          <Link to="/reminders" className="logout">Log out</Link>
        </div>
      </nav>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/logs">Logs</Link></li>
          <li><Link to="/reading">Stats</Link></li>
          <div className="right">
            <li><Link to="/reminders">Log out</Link></li>
            <li><Link to="/about">About us</Link></li>
          </div>
        </ul>
      </nav>
      {/* Additional sections */}
    </div>
  );
};

export default Home;
