import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Mana0Filter from '../assets/Filters-images/mana0-unchecked.png';
import Mana1Filter from '../assets/Filters-images/mana1-unchecked.png';
import Mana2Filter from '../assets/Filters-images/mana2-unchecked.png';
import Mana3Filter from '../assets/Filters-images/mana3-unchecked.png';
import Mana4Filter from '../assets/Filters-images/mana4-unchecked.png';
import Mana5Filter from '../assets/Filters-images/mana5-unchecked.png';
import Mana6Filter from '../assets/Filters-images/mana6-unchecked.png';
import Mana7Filter from '../assets/Filters-images/mana7-unchecked.png';
import Mana8Filter from '../assets/Filters-images/mana8-unchecked.png';
import Mana9Filter from '../assets/Filters-images/mana9-unchecked.png';

class FilterMana extends Component {
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
    const { cardMana, handleSelectMana } = this.props;
    return (
      <div className="mana-filter-container">
        <h2>Filter by mana cost</h2>
        <div>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectMana(0)}
          >
            <img
              className={classNames('mana-filter', {
                'mana-filter-selected': cardMana === 0,
              })}
              src={Mana0Filter}
              alt="Mana 0 icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectMana(1)}
          >
            <img
              className={classNames('mana-filter', {
                'mana-filter-selected': cardMana === 1,
              })}
              src={Mana1Filter}
              alt="Mana 1 icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectMana(2)}
          >
            <img
              className={classNames('mana-filter', {
                'mana-filter-selected': cardMana === 2,
              })}
              src={Mana2Filter}
              alt="Mana 2 icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectMana(3)}
          >
            <img
              className={classNames('mana-filter', {
                'mana-filter-selected': cardMana === 3,
              })}
              src={Mana3Filter}
              alt="Mana 3 icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectMana(4)}
          >
            <img
              className={classNames('mana-filter', {
                'mana-filter-selected': cardMana === 4,
              })}
              src={Mana4Filter}
              alt="Mana 4 icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectMana(5)}
          >
            <img
              className={classNames('mana-filter', {
                'mana-filter-selected': cardMana === 5,
              })}
              src={Mana5Filter}
              alt="Mana 5 icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectMana(6)}
          >
            <img
              className={classNames('mana-filter', {
                'mana-filter-selected': cardMana === 6,
              })}
              src={Mana6Filter}
              alt="Mana 6 icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectMana(7)}
          >
            <img
              className={classNames('mana-filter', {
                'mana-filter-selected': cardMana === 7,
              })}
              src={Mana7Filter}
              alt="Mana 7 icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectMana(8)}
          >
            <img
              className={classNames('mana-filter', {
                'mana-filter-selected': cardMana === 8,
              })}
              src={Mana8Filter}
              alt="Mana 8 icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectMana(9)}
          >
            <img
              className={classNames('mana-filter', {
                'mana-filter-selected': cardMana === 9,
              })}
              src={Mana9Filter}
              alt="Mana 9 icon"
            />
          </button>
        </div>
      </div>
    );
  }
}

FilterMana.propTypes = {
  cardMana: PropTypes.number.isRequired,
  handleSelectMana: PropTypes.func.isRequired,
};

export default FilterMana;
