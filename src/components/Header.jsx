import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/logo-image.png';
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
    return (
      <nav className="header">
        <img className="logo" src={Logo} alt=" " />
        <h1 className="header-title">Hearthstone Finder</h1>
        <button
          type="button"
          className="Rollmenu"
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
        <ul className={active ? 'nav-list-active' : 'nav-list-inactive'}>
          <li
            className={
              active ? 'nav-list-item-active' : 'nav-list-item-inactive'
            }
          >
            <a
              className={
                active ? 'nav-link-item-active' : 'nav-link-item-inactive'
              }
              href="nav1.html"
            >
              Advanced search
            </a>
          </li>
          <li
            className={
              active ? 'nav-list-item-active' : 'nav-list-item-inactive'
            }
          >
            <a
              className={
                active ? 'nav-link-item-active' : 'nav-link-item-inactive'
              }
              href="nav2.html"
            >
              Random card{' '}
              <span role="img" aria-label="emoji">
                🎲
              </span>
            </a>
          </li>
          <li
            className={
              active ? 'nav-list-item-active' : 'nav-list-item-inactive'
            }
          >
            <a
              className={
                active ? 'nav-link-item-active' : 'nav-link-item-inactive'
              }
              href="nav3.html"
            >
              Deck building
            </a>
          </li>
          <li
            className={
              active ? 'nav-list-item-active' : 'nav-list-item-inactive'
            }
          >
            <a
              className={
                active ? 'nav-link-item-active' : 'nav-link-item-inactive'
              }
              href="nav4.html"
            >
              Tournaments
            </a>
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
