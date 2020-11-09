import React, { Component } from 'react';
import FilterResearch from './FilterResearch';
import FilterClass from './FilterClass';
import FilterMana from './FilterMana';
import FilterRarity from './FilterRarity';

class Filters extends Component {
  render() {
    return () => {
      <div>
        <FilterResearch />
        <FilterClass />
        <FilterMana />
        <FilterRarity />
      </div>;
    };
  }
}

export default Filters;
