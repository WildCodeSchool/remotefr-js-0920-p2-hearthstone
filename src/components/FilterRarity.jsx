import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RarityCommonFilter from '../assets/Filters-images/common.png';
import RarityEpicFilter from '../assets/Filters-images/epic.png';
import RarityFreeFilter from '../assets/Filters-images/free.png';
import RarityLegendaryFilter from '../assets/Filters-images/legendary.png';
import RarityRareFilter from '../assets/Filters-images/rare.png';

class FilterRarity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  handleClickChecked = () => {
    const { isChecked } = this.state;
    this.setState({
      isChecked: !isChecked,
    });
  };

  render() {
    const { cardRarity, handleSelectRarity } = this.props;
    return (
      <div className="rarity-filter-container">
        <h2>Filter by rarity</h2>
        <div>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectRarity('free')}
          >
            <p>Free</p>
            <img
              className={classNames('rarity-filter', {
                'rarity-filter-selected': cardRarity === 'free',
              })}
              src={RarityFreeFilter}
              alt="Free rarity icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectRarity('common')}
          >
            <p>Common</p>
            <img
              className={classNames('rarity-filter', {
                'rarity-filter-selected': cardRarity === 'common',
              })}
              src={RarityCommonFilter}
              alt="Common rarity icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectRarity('rare')}
          >
            <p>Rare</p>
            <img
              className={classNames('rarity-filter', {
                'rarity-filter-selected': cardRarity === 'rare',
              })}
              src={RarityRareFilter}
              alt="Rare rarity icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectRarity('epic')}
          >
            <p>Epic</p>
            <img
              className={classNames('rarity-filter', {
                'rarity-filter-selected': cardRarity === 'epic',
              })}
              src={RarityEpicFilter}
              alt="Epic rarity icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectRarity('legendary')}
          >
            <p>Legendary</p>
            <img
              className={classNames('rarity-filter', {
                'rarity-filter-selected': cardRarity === 'legendary',
              })}
              src={RarityLegendaryFilter}
              alt="Legendary rarity icon"
            />
          </button>
        </div>
      </div>
    );
  }
}

FilterRarity.propTypes = {
  cardRarity: PropTypes.string.isRequired,
  handleSelectRarity: PropTypes.func.isRequired,
};

export default FilterRarity;
