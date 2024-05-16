import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className="mobile-nav">
        <div className="left-nav">
          <button className="hamburger" id="hamburger">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="right-nav">
          <a href="reminders.html" className="logout">Log out</a>
        </div>
      </nav>
      <nav>
    <ul>
      <li><a href="index.html">Dashboard</a></li>
      <li><a href="logs.html">Logs</a></li>
      <li><a href="reading.html">Stats</a></li>
      <div class="right">
        <li><a href="cover.html">Log out</a></li>
        <li><a href="aboutUs.html">About us</a></li>  
      </div>
    </ul>
  </nav>

    </div>
  );
};

export default Nav;
