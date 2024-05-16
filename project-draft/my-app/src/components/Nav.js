import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function Nav(props) {

  const PAGE_LIST = ['Dashboard', 'Logs', 'Stats'];
  const PAGE_LIST_RIGHT = ['Log out', 'About us'];

  const pageList = PAGE_LIST.map((pageNameString) => {
    const element = <li key={pageNameString}> {pageNameString} </li>
    return element;
  })

  const pageListRight = PAGE_LIST_RIGHT.map((pageNameString) => {
    const element = <li key={pageNameString}> {pageNameString} </li>
    return element;
  })

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
            {pageList}
            {pageListRight}
          </ul>
        </nav>
      )}
      <nav>
        <ul>
          {pageList}
          <div class="right">
            {pageListRight}
          </div>
        </ul>
      </nav>
    </div>
  )
}
