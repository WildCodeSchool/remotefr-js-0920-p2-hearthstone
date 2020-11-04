import React from 'react';
import './Research.css';

function Research() {
  return (
    <main className="research-container">
      <div className="research-content">
        <h1>Advanced Research</h1>

        <section className="filters">
          <div className="class-card">
            Demon hunter Druid Hunter Magus Paladin Priest Thief Shaman Warlock
            Warrior Neutral
          </div>
          <div className="mana">1-10+</div>
          <div className="attack">1-10+</div>
          <div className="health">1-10+</div>
          <div className="rareness">Commune Free Rare Epic Legendary</div>
        </section>

        <section className="cards-list">
          <div>Catalogue</div>
        </section>
      </div>
    </main>
  );
}

export default Research;
