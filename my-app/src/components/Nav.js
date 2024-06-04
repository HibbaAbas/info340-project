import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function Nav(props) {

  const PAGE_LIST = [
    { name: 'Dashboard', link: '/' },
    { name: 'Logs', link: '/logs' },
    { name: 'Stats', link: '/stats' },
  ];
  const PAGE_LIST_RIGHT = [
    { name: 'Log out', link: '/login' },
    { name: 'About us', link: '/about' },
  ];

  // create Link to's for each page for routing
  const renderList = (list) => {
    return list.map((page, index) => (
      <li key={index}>
        <Link to={page.link} className="link">{page.name}</Link>
      </li>
    ));
  };

  // hide menu by default
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // show menu when hamburger is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <nav className="mobile-nav">
          <button className="hamburger" id="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
      </nav>

      {isMenuOpen && (
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {renderList(PAGE_LIST)}
            {renderList(PAGE_LIST_RIGHT)}
          </ul>
        </nav>
      )}
      <nav>
        <ul>
        {renderList(PAGE_LIST)}
          <div class="right">
          {renderList(PAGE_LIST_RIGHT)}
          </div>
        </ul>
      </nav>
    </div>
  )
}