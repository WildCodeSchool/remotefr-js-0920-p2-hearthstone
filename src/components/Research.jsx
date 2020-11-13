import React from 'react';
import PropTypes from 'prop-types';

import FilterName from './FilterName';
import FilterClass from './FilterClass';
import FilterMana from './FilterMana';
import FilterRarity from './FilterRarity';

import './Research.css';

class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.singleCard,
      cardMana: -1,
      cardClass: '',
      cardRarity: '',
    };
  }

  // lancer l'appel API avec tous les criteres
  fetchData = () => {};

  handleSelectClass = (newCardClass) => {
    // setState prend un 2eme argument optionnel : un callback
    // seulement si vous voulez faire recherche temps reel
    this.setState({ cardClass: newCardClass }, this.fetchData);
  };

  handleSelectRarity = (newCardRarity) => {
    this.setState({ cardRarity: newCardRarity }, this.fetchData);
  };

  handleSelectMana = (newCardMana) => {
    this.setState({ cardMana: newCardMana }, this.fetchData);
  };

  render() {
    const title = 'Advanced Research';
    const { cards, cardClass, cardRarity, cardMana } = this.state;
    return (
      <div>
        <div className="research-content">
          <h1>{title}</h1>
          <FilterName singleCard={cards} />
          <FilterClass
            cardClass={cardClass}
            handleSelectClass={this.handleSelectClass}
          />
          <FilterMana
            cardMana={cardMana}
            handleSelectMana={this.handleSelectMana}
          />
          <FilterRarity
            cardRarity={cardRarity}
            handleSelectRarity={this.handleSelectRarity}
          />
        </div>
      </div>
    );
  }
}

Research.propTypes = {
  singleCard: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    mana: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default Research;
