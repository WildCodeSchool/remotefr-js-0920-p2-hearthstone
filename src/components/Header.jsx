import React from 'react';
import Logo from '../img/logo-image.png';
import './Header.css';

/* const navButton = document.getElementById('menu-button');
const navList = document.getElementById('nav-list');

function unrollMenu() {
  navList.style.height = 'unset';
  navList.style.height = `0`;
}

function rollMenu() {
  navList.style.height = `0`;
}

let menuActive = false;

navButton.addEventListener('click', () => {
  if (menuActive) rollMenu();
  else unrollMenu();

  menuActive = !menuActive;
});
*/

function Header() {
  return (
    <nav className="header">
      <img className="logo" src={Logo} alt=" " />
      <h1 className="header-title">Hearthstone Finder</h1>
      <button
        type="button"
        className="menu-button"
        aria-label="Open the navbar"
      >
        <span className="icon-menu" aria-hidden="true">
          ☰
        </span>
      </button>
      <ul className="nav-list">
        <li className="nav-list-item">
          <a className="nav-link" href="nav1.html">
            Advanced search
          </a>
        </li>
        <li className="nav-list-item">
          <a className="nav-link" href="nav2.html">
            Random card{' '}
            <span role="img" aria-label="emoji">
              🎲
            </span>
          </a>
        </li>
        <li className="nav-list-item">
          <a className="nav-link" href="nav3.html">
            Deck building
          </a>
        </li>
        <li className="nav-list-item">
          <a className="nav-link" href="nav4.html">
            Tournaments
          </a>
        </li>
      </ul>
      <div className="search-bar">
        <input type="search" id="search" />
        <button type="button" id="search-button">
          <span role="img" aria-label="emoji">
            🔍
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
