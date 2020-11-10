import React, { Component } from 'react';
import ClassDruidImage from '../assets/Filters-images/druid-unchecked.png';

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
        <h2>Filter by class</h2>
        <div>
          <img className="demon-hunter-filter" src={ClassDruidImage} alt=" " />
        </div>
      </div>
    );
  }
}

export default FilterClass;
