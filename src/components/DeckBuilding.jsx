import React from 'react';
import './DeckBuilding.css';

import DecorativeBorder from '../assets/decorative-border3.png';
import DeckBuildingDoor from '../assets/deckbuilding.jpg';

const DeckBuilding = () => {
  return (
    <main className="background">
      <div className="container deckbuilding">
        <blockquote>
          <h1 className="titleFirstArticle">Deck building</h1>
          <img
            className="decorative-border"
            src={DecorativeBorder}
            alt="Decorative border under title"
          />
          <img
            id="deckbuilding-door"
            src={DeckBuildingDoor}
            alt="Deckbuilding construction"
          />
        </blockquote>
      </div>
    </main>
  );
};

export default DeckBuilding;
