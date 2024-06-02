import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function Nav({currentUser, logoutUser}) {

  const PAGE_LIST = [
    { name: 'Dashboard', link: '/' },
    { name: 'Logs', link: '/logs' },
    { name: 'Stats', link: '/stats' },
    {name: 'About Us', link:'/about'}

  ];
  const PAGE_LIST_RIGHT = currentUser
    ?[{name:'Log out', link:'#', onClick:logoutUser}]
    : [{name:'Log in', link:'/login'}, {name:'Sign Up', link:'/signup'}]
  //   { name: 'Log out', link: '/login' },
  //   { name: 'About us', link: '/about' },
  // ];

  // create Link to's for each page for routing
  const renderList = (list) => {
    return list.map((page, index) => (
      <li key={index}>
        {page.onClick ? (
          <button onClick={page.onClick} className="link">{page.name}</button>
        ) : (
          <Link to={page.link} className="link">{page.name}</Link>
     
        )} 
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
          {isMenuOpen && (
            <ul>
              {renderList(PAGE_LIST)}
              {renderList(PAGE_LIST_RIGHT)}
              
            </ul>
          )}

      </nav>

      {/* {isMenuOpen && (
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {renderList(PAGE_LIST)}
            {renderList(PAGE_LIST_RIGHT)}
          </ul>
        </nav>
      )} */}
      <nav>
        <ul>
        {renderList(PAGE_LIST)}
        <div className="right">
          {renderList(PAGE_LIST_RIGHT)}
          </div>
        </ul>
      </nav>
    </div>
  );
}
