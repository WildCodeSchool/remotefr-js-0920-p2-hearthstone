import React from 'react';
import PropTypes from 'prop-types';

function DisplayCard({ card }) {
  return (
    <div className="DisplayCard">
      <img src={card.img} alt={card.name} />
      <ul>
        <li>
          <strong>Name:</strong>
          {card.name}
        </li>
        <li>
          <strong>Class:</strong>
          {card.playerClass}
        </li>
        <li>
          <strong>Rarety:</strong>
          {card.rarety}
        </li>
        <li>
          <strong>Type:</strong>
          {card.type}
        </li>
        <li>
          <strong>Cost:</strong>
          {card.cost}
        </li>
        <li>
          <strong>Attack:</strong>
          {card.attack}
        </li>
        <li>
          <strong>Health:</strong>
          {card.health}
        </li>
        <li>
          <strong>Text:</strong>
          {card.text}
        </li>
        <li>
          <strong>Race:</strong>
          {card.race}
        </li>
        <li>
          <strong>Set:</strong>
          {card.cardSet}
        </li>
        <li>
          <strong>Flavor text:</strong>
          {card.flavor}
        </li>
        <li>
          <strong>Artist:</strong>
          {card.artist}
        </li>
      </ul>
    </div>
  );
}

DisplayCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    playerClass: PropTypes.string.isRequired,
    rarety: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    health: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    cardSet: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default DisplayCard;
