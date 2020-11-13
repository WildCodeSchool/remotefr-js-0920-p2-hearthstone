import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.singleCard,
    };
  }

  render() {
    const { cards } = this.state;

    return (
      <div>
        <div>{cards}</div>
      </div>
    );
  }
}

Catalogue.propTypes = {
  singleCard: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    mana: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default Catalogue;
