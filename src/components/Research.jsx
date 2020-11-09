import React from 'react';
import Filter from './Filters';
import Catalogue from './Catalogue';

import './Research.css';

class Research extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          name: 'Jongleuse de lames',
          rarity: 'rare',
          mana: '6',
          class: 'demon-hunter',
        },
        {
          id: 2,
          name: 'Whatley, maître de la piste',
          rarity: 'légendaire',
          mana: '5',
          class: 'warrior',
        },
        {
          id: 3,
          name: 'Griffon du manège',
          rarity: 'common',
          mana: '5',
          class: 'paladin',
        },
      ],
    };
  }

  render() {
    const title = 'Advanced Research';
    const { cards } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <Filter />
        {cards.map((card) => (
          <Catalogue details={card} />
        ))}
      </div>
    );
  }
}

export default Research;
