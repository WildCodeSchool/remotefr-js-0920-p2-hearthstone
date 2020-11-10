import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.singleCard,
    };
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        <h1>Cartes Recherche</h1>
        <div>{cards.name}</div>
      </div>
    );
  }
}

Catalogue.propTypes = {
  singleCard: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    mana: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default Catalogue;

//     console.log({ cards });

// const cards = [
//   {
//     id: 1,
//     name: 'Jongleuse de lames',
//     rarity: 'rare',
//     mana: '6',
//     class: 'demon-hunter',
//   },
//   {
//     id: 2,
//     name: 'Whatley, maître de la piste',
//     rarity: 'légendaire',
//     mana: '5',
//     class: 'warrior',
//   },
//   {
//     id: 3,
//     name: 'Griffon du manège',
//     rarity: 'common',
//     mana: '5',
//     class: 'paladin',
//   },
// ];
