import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Catalogue from './Catalogue';

class FilterResearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      cards: props.singleCard, // cards = Tableau d'objets Cartes (3 objets)
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
    event.preventDefault();
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  getFilteredCards = () => {
    const { cards, inputValue } = this.state;
    return inputValue === ''
      ? cards
      : cards.filter((card) => card.name.includes(inputValue));
  };

  // inputValue = filterName , filteredValues = filteredPokemons, cards = pokemons

  render() {
    const { inputValue } = this.state;
    const filteredValues = this.getFilteredCards();
    const { handleSubmit, handleChange } = this;

    return (
      <div className="name-research">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">
            <h2>Filter by card name</h2>
            <input
              value={inputValue}
              id="search"
              placeholder="Find a card"
              type="text"
              onChange={handleChange}
            />
          </label>
          <button type="button" id="search-button">
            <span role="img" aria-label="emoji" id="emoji">
              🔍
            </span>
          </button>
        </form>
        <div>
          <Catalogue cards={filteredValues} />
        </div>
      </div>
    );
  }
}

FilterResearch.propTypes = {
  singleCard: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    mana: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilterResearch;
