import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from './footer/Avatar';
import SocialNetworks from './footer/SocialNetworks';
import logo from '../assets/testlogo2.png';
import Cycy from '../assets/cycyrond.png';
import Juju from '../assets/jujurond.png';
import Vivi from '../assets/vivirond.png';
import CarteCycy from '../assets/AvatarCarteCyrille.png';
import CarteJuju from '../assets/AvatarCarteJustine.png';
import CarteVivi from '../assets/AvatarCarteVivien.png';
import './Footer.css';
import OfficialWebsites from './footer/OfficialWebsites';

const Footer = ({ avatar, socialNetwork, websiteUrl }) => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-footer">
          <Link to="/">
            <img src={logo} alt="Logo Hearthstone" />
          </Link>
        </div>
        <div className="links">
          <OfficialWebsites name={websiteUrl[0].name} url={websiteUrl[0].url} />
          <OfficialWebsites name={websiteUrl[1].name} url={websiteUrl[1].url} />
        </div>
        <div className="hidden-mobile team">
          <li>
            <Avatar name={avatar[0].name} bigUrl={CarteCycy} smallUrl={Cycy} />
            <Avatar name={avatar[1].name} bigUrl={CarteJuju} smallUrl={Juju} />
            <Avatar name={avatar[2].name} bigUrl={CarteVivi} smallUrl={Vivi} />
          </li>
        </div>
        <div className="socialLinks-container">
          <SocialNetworks
            name={socialNetwork[0].name}
            url={socialNetwork[0].url}
            imgUrl={socialNetwork[0].imgUrl}
          />
          <SocialNetworks
            name={socialNetwork[1].name}
            url={socialNetwork[1].url}
            imgUrl={socialNetwork[1].imgUrl}
          />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  avatar: PropTypes.Array,
  socialNetwork: PropTypes.Array,
  websiteUrl: PropTypes.Array,
}.isRequired;

export default Footer;
