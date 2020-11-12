import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterResearch from './FilterResearch';
import FilterClass from './FilterClass';
import FilterMana from './FilterMana';
import FilterRarity from './FilterRarity';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.singleCard,
    };
  }

  render() {
    const { cards } = this.state;

    return (
      <div className="filters">
        <FilterResearch singleCard={cards} />
        <FilterClass />
        <FilterMana />
        <FilterRarity />
      </div>
    );
  }
}

Filters.propTypes = {
  singleCard: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    mana: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default Filters;
