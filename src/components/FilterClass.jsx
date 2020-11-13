import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ClassDemonHunterFilter from '../assets/Filters-images/demonhunter-checked.png';
import ClassDruidFilter from '../assets/Filters-images/druid-checked.png';
import ClassHunterFilter from '../assets/Filters-images/hunter-checked.png';
import ClassMageFilter from '../assets/Filters-images/mage-checked.png';
import ClassNeutralFilter from '../assets/Filters-images/neutral-checked.png';
import ClassPaladinFilter from '../assets/Filters-images/paladin-checked.png';
import ClassPriestFilter from '../assets/Filters-images/pretre-checked.png';
import ClassRogueFilter from '../assets/Filters-images/rogue-checked.png';
import ClassShamanFilter from '../assets/Filters-images/shaman-checked.png';
import ClassWarlockFilter from '../assets/Filters-images/warlock-checked.png';
import ClassWarriorFilter from '../assets/Filters-images/warrior-checked.png';

class FilterClass extends Component {
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
    const { cardClass, handleSelectClass } = this.props;
    return (
      <div className="class-filter-container">
        <h2>Filter by class</h2>
        <div>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectClass('druid')}
          >
            <img
              className={classNames('class-filter', {
                'class-filter-selected': cardClass === 'druid',
              })}
              src={ClassDruidFilter}
              alt="Druid class icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectClass('hunter')}
          >
            <img
              className={classNames('class-filter', {
                'class-filter-selected': cardClass === 'hunter',
              })}
              src={ClassHunterFilter}
              alt="Hunter class icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectClass('demon-hunter')}
          >
            <img
              className={classNames('class-filter', {
                'class-filter-selected': cardClass === 'demon-hunter',
              })}
              src={ClassDemonHunterFilter}
              alt="Demon hunter class icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectClass('mage')}
          >
            <img
              className={classNames('class-filter', {
                'class-filter-selected': cardClass === 'mage',
              })}
              src={ClassMageFilter}
              alt="Mage class icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectClass('neutral')}
          >
            <img
              className={classNames('class-filter', {
                'class-filter-selected': cardClass === 'neutral',
              })}
              src={ClassNeutralFilter}
              alt="Neutral class icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectClass('paladin')}
          >
            <img
              className={classNames('class-filter', {
                'class-filter-selected': cardClass === 'paladin',
              })}
              src={ClassPaladinFilter}
              alt="Paladin class icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectClass('priest')}
          >
            <img
              className={classNames('class-filter', {
                'class-filter-selected': cardClass === 'priest',
              })}
              src={ClassPriestFilter}
              alt="Priest class icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectClass('rogue')}
          >
            <img
              className={classNames('class-filter', {
                'class-filter-selected': cardClass === 'rogue',
              })}
              src={ClassRogueFilter}
              alt="Rogue class icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectClass('shaman')}
          >
            <img
              className={classNames('class-filter', {
                'class-filter-selected': cardClass === 'shaman',
              })}
              src={ClassShamanFilter}
              alt="Shaman class icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectClass('warlock')}
          >
            <img
              className={classNames('class-filter', {
                'class-filter-selected': cardClass === 'warlock',
              })}
              src={ClassWarlockFilter}
              alt="Warlock class icon"
            />
          </button>
          <button
            type="button"
            className="transparent-btn"
            onClick={() => handleSelectClass('warrior')}
          >
            <img
              className={classNames('class-filter', {
                'class-filter-selected': cardClass === 'warrior',
              })}
              src={ClassWarriorFilter}
              alt="Warrior class icon"
            />
          </button>
        </div>
      </div>
    );
  }
}

FilterClass.propTypes = {
  cardClass: PropTypes.string.isRequired,
  handleSelectClass: PropTypes.string.isRequired,
};

export default FilterClass;
