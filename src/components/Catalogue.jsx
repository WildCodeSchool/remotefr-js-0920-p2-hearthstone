import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DisplayListCard } from './MultiResultPage';

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
      <div>
        <div>
          {card.map((c) => (
            <DisplayListCard key={c.id} card={c} />
          ))}
        </div>
      </div>
    );
  }
}

Catalogue.propTypes = {
  card: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    mana: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default Catalogue;
