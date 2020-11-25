import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import debug from 'debug';

const log = debug('resultpage');

export const DisplayCard = (props) => {
  const { card } = props;
  return (
    <div>
      <h1>
        {card.name} (<span>{card.cardSet}</span>)
      </h1>
      <div>
        <img src={card.pictures_normal} alt={card.name} />
      </div>

      <ul className="marker">
        {card.playerClass && (
          <li>
            <strong>Class: </strong>
            {card.playerClass}
          </li>
        )}

        {card.rarity && (
          <li>
            <strong>Rarity: </strong>
            {card.rarity}
          </li>
        )}
        {card.type && (
          <li>
            <strong>Type: </strong>
            {card.type}
          </li>
        )}
        {card.cost && (
          <li>
            <strong>Cost: </strong>
            {card.cost}
          </li>
        )}
        {card.attack && (
          <li>
            <strong>Attack: </strong>
            {card.attack}
          </li>
        )}
        {card.health && (
          <li>
            <strong>Health: </strong>
            {card.health}
          </li>
        )}
        {card.text && (
          <li>
            <strong>Text: </strong>
            {card.text}
          </li>
        )}
        {card.race && (
          <li>
            <strong>Race: </strong>
            {card.race}
          </li>
        )}
        {card.cardSet && (
          <li>
            <strong>Set: </strong>
            {card.cardSet}
          </li>
        )}
        {card.flavor && (
          <li>
            <strong>Flavor text: </strong>
            {card.flavor}
          </li>
        )}
        {card.artist && (
          <li>
            <strong>Artist: </strong>
            {card.artist}
          </li>
        )}
      </ul>
    </div>
  );
};

class SinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
    };
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname },
    } = this.props;
    if (pathname !== prevProps.location.pathname) {
      this.getCards();
    }
  }

  componentDidMount = () => {
    this.getCard();
  };

  getCard = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.setState({ card: [] });

    const options = {
      method: 'GET',
      url: `https://api-hearthstone.woozy.fr/v1/cards/single/id/${id}`,
    };

    const result = await axios
      .request(options)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        log(error);
      });

    this.setState({ card: result });
  };

  render() {
    const { card } = this.state;

    return (
      <div className="background">
        <div className="research-container">
          <DisplayCard card={card} />
        </div>
      </div>
    );
  }
}

DisplayCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    playerClass: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
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
    collectible: PropTypes.string.isRequired,
    pictures_normal: PropTypes.string.isRequired,
  }).isRequired,
};

SinglePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default SinglePage;
