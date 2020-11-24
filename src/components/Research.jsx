import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FilterName from './FilterName';
import FilterClass from './FilterClass';
import FilterMana from './FilterMana';
import FilterRarity from './FilterRarity';

import './Research.css';
import DecorativeBorder from '../assets/decorative-border3.png';

class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.singleCard,
      cardMana: -1,
      cardClass: '',
      cardRarity: '',
      cardName: '',
    };
  }

  handleSelectClass = (newCardClass) => {
    // setState prend un 2eme argument optionnel : un callback
    // seulement si vous voulez faire recherche temps reel
    this.setState({ cardClass: newCardClass }, this.getCards);
  };

  handleSelectRarity = (newCardRarity) => {
    this.setState({ cardRarity: newCardRarity }, this.getCards);
  };

  handleSelectMana = (newCardMana) => {
    this.setState({ cardMana: newCardMana }, this.getCards);
  };

  handleChange = (event) => {
    this.setState({ cardName: event.target.value }, this.getCards);
    event.preventDefault();
  };

  getCards = async () => {
    this.setState({ cards: [] });

    const data = {};
    const { cardClass, cardRarity, cardMana, cardName } = this.state;
    if (cardClass !== '') {
      data.playerClass = cardClass;
    }
    if (cardRarity !== '') {
      data.rarity = cardRarity;
    }
    if (cardMana !== -1) {
      data.cost = cardMana;
    }
    if (cardName !== '') {
      data.name = `%${cardName}%`;
    }

    const options = {
      method: 'POST',
      url: 'https://api-hearthstone.woozy.fr/v1/cards/search',
      headers: { 'Content-Type': 'application/json' },
      data,
    };
    const result = await axios
      .request(options)
      .then((response) => {
        console.log('axios  : ', response.data);
        return response.data;
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ cards: result });
  };

  render() {
    const title = 'Advanced Research';
    const { cards, cardClass, cardRarity, cardMana, cardName } = this.state;
    return (
      <div className="background">
        <div className="research-container">
          <h1>{title}</h1>
          <img className="decorative-border" src={DecorativeBorder} alt="" />
          <div className="research-content">
            <div className="filters">
              <FilterName
                singleCard={cards}
                handleChange={this.handleChange}
                inputValue={cardName}
              />
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
            <div className="cards-list">LE catalogue va ici lorem ipsum</div>
          </div>
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
