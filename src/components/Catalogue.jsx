import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DisplayListCard } from './MultiResultPage';
import './Research.css';

class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cards: props.card,
    };
  }

  render() {
    const { card } = this.props;
    return (
      <div className="searchList">
        {card.map((c) => (
          <DisplayListCard key={c.id} card={c} />
        ))}
      </div>
    );
  }
}

Catalogue.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rarity: PropTypes.string,
      mana: PropTypes.number.isRequired,
      class: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Catalogue;
