import React, { Component } from 'react';

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
      <div className="filterClassContainer">
        <h2>FilterClass</h2>
        <ul>
          <li>Demon Hunter</li>
          <li>Druid</li>
          <li>Hunter</li>
          <li>Mage</li>
          <li>Paladin</li>
          <li>Priest</li>
          <li>Rogue</li>
          <li>Shaman</li>
          <li>Warlock</li>
          <li>Warrior</li>
          <li>Neutral</li>
        </ul>
      </div>
    );
  }
}

export default FilterClass;
