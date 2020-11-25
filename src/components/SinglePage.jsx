import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import debug from 'debug';

const log = debug('resultpage');

const DisplayCard = (props) => {
  const { card } = props;
  return (
    <div>
      <h1>
        {card.name} (<span>{card.cardSet}</span>)
      </h1>
      <div>{card.text}</div>

      <div>Type :{card.type}</div>
      <div>PlayerClass :{card.playerClass}</div>
      <div>type :{card.type}</div>
      <div>
        Collectible :{card.collectible}
        {card.collectible ? 'yes' : 'no'}
      </div>
      <div>
        <img src={card.pictures_normal} alt={card.name} />
      </div>

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
          <strong>Rarity:</strong>
          {card.rarity}
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
};

class SinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      loading: true,
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
    this.setState({ card: [], loading: true });

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
    this.setState({ loading: false });
    this.setState({ card: result });
  };

  render() {
    const { card, loading } = this.state;

    return (
      <div>
        <p>{loading ? 'Loading.....' : ''}</p>
        <DisplayCard card={card} />
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
