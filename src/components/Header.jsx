import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../assets/testlogo2.png';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }

  render() {
    const { active } = this.state;
    const navIsActive = active ? 'nav-list-active' : 'nav-list-inactive';
    const navItemActive = active
      ? 'nav-list-item-active'
      : 'nav-list-item-inactive';
    const navLinkActive = active
      ? 'nav-link-item-active'
      : 'nav-link-item-inactive';
    return (
      <nav className="header">
        <img className="logo" src={Logo} alt=" " />
        <h1 className="header-title">Hearthstone Finder</h1>
        <button
          type="button"
          className="rollmenu"
          aria-label="Open the navbar"
          onClick={() => {
            const newRollMenu = !active;
            this.setState({ active: newRollMenu });
          }}
        >
          <span className="icon-menu" aria-hidden="true">
            ☰
          </span>
        </button>
        <ul className={navIsActive}>
          <li className={navItemActive}>
            <Link to="/research" className={navLinkActive}>
              Advanced search
            </Link>
          </li>
          <li className={navItemActive}>
            <Link to="/random" className={navLinkActive}>
              Random card{' '}
              <span role="img" aria-label="emoji">
                🎲
              </span>
            </Link>
          </li>
          <li className={navItemActive}>
            <Link to="/deckbuilding" className={navLinkActive}>
              Deck building
            </Link>
          </li>
          <li className={navItemActive}>
            <Link to="/tournament" className={navLinkActive}>
              Tournaments
            </Link>
          </li>
        </ul>
        <div className="search-bar">
          <input type="search" id="search" />
          <button type="button" id="search-button">
            <span role="img" aria-label="emoji" id="emoji">
              🔍
            </span>
          </button>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Header;
