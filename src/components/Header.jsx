import React from 'react';
import './Header.css';
import Logo from '../img/logo-image.png';

function Header() {
  return (
    <nav className="Header">
      <img className="Logo" src={Logo} alt=" " />

      <h1 className="Header-title">Hearthstone Finder</h1>
      <button type="button" className="Nav-button" aria-label="Open the navbar">
        <span className="Icon-menu" aria-hidden="true">
          ☰ MENU
        </span>
      </button>
      <ul className="Nav-list">
        <li className="Nav-list-item">
          <a className="Nav-link" href="index.html">
            Nav1
          </a>
        </li>
        <li className="Nav-list-item">
          <a className="Nav-link" href="team.html">
            Nav2
          </a>
        </li>
        <li className="Nav-list-item">
          <a className="Nav-link" href="form.html">
            Nav3
          </a>
        </li>
      </ul>
      <div className="Research-bar">La barre de recherche ira ici</div>
    </nav>
  );
}

export default Header;
