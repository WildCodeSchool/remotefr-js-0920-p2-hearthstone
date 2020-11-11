import React, { Component } from 'react';
import ClassDemonHunterFilter from '../assets/Filters-images/demonhunter-unchecked.png';
import ClassDruidFilter from '../assets/Filters-images/druid-unchecked.png';
import ClassHunterFilter from '../assets/Filters-images/hunter-unchecked.png';
import ClassMageFilter from '../assets/Filters-images/mage-unchecked.png';
import ClassNeutralFilter from '../assets/Filters-images/neutral-unchecked.png';
import ClassPaladinFilter from '../assets/Filters-images/paladin-unchecked.png';
import ClassPriestFilter from '../assets/Filters-images/pretre-unchecked.png';
import ClassRogueFilter from '../assets/Filters-images/rogue-unchecked.png';
import ClassShamanFilter from '../assets/Filters-images/shaman-unchecked.png';
import ClassWarlockFilter from '../assets/Filters-images/warlock-unchecked.png';
import ClassWarriorFilter from '../assets/Filters-images/warrior-unchecked.png';

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
    return (
      <div className="class-filter-container">
        <h2>Filter by class</h2>
        <div>
          <img className="class-filter" src={ClassDruidFilter} alt=" " />
          <img className="class-filter" src={ClassHunterFilter} alt=" " />
          <img className="class-filter" src={ClassDemonHunterFilter} alt=" " />
          <img className="class-filter" src={ClassMageFilter} alt=" " />
          <img className="class-filter" src={ClassNeutralFilter} alt=" " />
          <img className="class-filter" src={ClassPaladinFilter} alt=" " />
          <img className="class-filter" src={ClassPriestFilter} alt=" " />
          <img className="class-filter" src={ClassRogueFilter} alt=" " />
          <img className="class-filter" src={ClassShamanFilter} alt=" " />
          <img className="class-filter" src={ClassWarlockFilter} alt=" " />
          <img className="class-filter" src={ClassWarriorFilter} alt=" " />
        </div>
      </div>
    );
  }
}

export default FilterClass;
