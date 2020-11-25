import React from 'react';
import CarteCycy from '../assets/AvatarCarteCyrille.png';
import CarteJuju from '../assets/AvatarCarteJustine.png';
import CarteVivi from '../assets/AvatarCarteVivien.png';

const Team = () => {
  return (
    <div className="background">
      <div className="articles">
        <h1 className="title">Our Team</h1>
        <blockquote className="our-team">
          <img src={CarteCycy} alt="CarteCyrille" />
          <img src={CarteJuju} alt="CarteJustine" />
          <img src={CarteVivi} alt="CarteVivien" />
        </blockquote>
      </div>
    </div>
  );
};

export default Team;
