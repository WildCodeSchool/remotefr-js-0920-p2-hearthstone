import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Plan du site</p>
      </div>
      <div>
        <ul className="plan">
          <li>
            <Link
              to="../cgu.jsx"
              title="Les conditions générales d'utilisation"
            >
              <p>Terms of service</p>
            </Link>
          </li>
          <li>
            <Link to="../privacy.jsx" title="La politique de confidentialités">
              <p>Privacy policy</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="socialLinks">
        <Link to="https://www.twitter.com" title="Visitez notre page Twitter" />
        <svg src="../assets/twitter.svg" alt="Twitter" />
        <Link to="https://www.youtube.com" title="Visitez notre page Youtube" />
        <svg src="../assets/youtube.svg" alt="Youtube" />
      </div>
    </footer>
  );
};

export default Footer;
