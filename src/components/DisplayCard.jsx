import React from 'react';

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

export default DisplayCard;
