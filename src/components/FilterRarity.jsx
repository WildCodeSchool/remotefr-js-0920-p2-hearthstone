import React, { PureComponent } from 'react';
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

class FilterRarity extends PureComponent {
  render() {
    return (
      <div>
        <h2>Filter by rarity</h2>
        <div>
          <img className="mana-filter" src={Mana0Filter} alt=" " />
          <img className="mana-filter" src={Mana1Filter} alt=" " />
          <img className="mana-filter" src={Mana2Filter} alt=" " />
          <img className="mana-filter" src={Mana3Filter} alt=" " />
          <img className="mana-filter" src={Mana4Filter} alt=" " />
          <img className="mana-filter" src={Mana5Filter} alt=" " />
          <img className="mana-filter" src={Mana6Filter} alt=" " />
          <img className="mana-filter" src={Mana7Filter} alt=" " />
          <img className="mana-filter" src={Mana8Filter} alt=" " />
          <img className="mana-filter" src={Mana9Filter} alt=" " />
        </div>
      </div>
    );
  }
}

export default FilterRarity;
