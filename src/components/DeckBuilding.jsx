import React from 'react';
import './DeckBuilding.css';

import DeckBuildingDoor from '../assets/deckbuilding.jpg';

const DeckBuilding = () => {
  return (
    <main className="background">
      <div className="container">
        <h1>Deck building</h1>
        <img
          id="deckbuilding-door"
          src={DeckBuildingDoor}
          alt="Deckbuilding construction"
        />
      </div>
    </main>
  );
};

export default DeckBuilding;
