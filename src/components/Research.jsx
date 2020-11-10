import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';
import Catalogue from './Catalogue';

import './Research.css';

class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.singleCard,
    };
  }

  render() {
    const title = 'Advanced Research';
    const { cards } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <Filters singleCard={cards} />
        {cards.map((card) => (
          <Catalogue key={card.id} singleCard={card} />
        ))}
      </div>
    );
  }
}

Research.propTypes = {
  singleCard: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    mana: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default Research;
