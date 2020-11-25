import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import debug from 'debug';
import './MultiResultPage.css';
import DecorativeBorder from '../assets/decorative-border3.png';

const log = debug('resultpage');

export const DisplayListCard = (props) => {
  const { card } = props;
  const cardUrl = `/card/${card.id}`;

  return (
    <Link to={cardUrl} key={card.id}>
      <div className="imgCard">
        <img src={card.pictures_normal} alt={card.name} />
      </div>
    </Link>
  );
};

class MultiResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    this.getCards();
  };

  componentDidUpdate(prevProps) {
    const {
      location: { pathname },
    } = this.props;
    if (pathname !== prevProps.location.pathname) {
      this.getCards();
    }
  }

  getCards = async () => {
    const {
      match: {
        params: { name },
      },
    } = this.props;
    this.setState({ cards: [] });

    const options = {
      method: 'POST',
      url: 'https://api-hearthstone.woozy.fr/v1/cards/search',
      headers: { 'Content-Type': 'application/json' },
      data: { name: `%${name}%` },
    };
    const result = await axios
      .request(options)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        log(error);
      });
    this.setState({ cards: result });
  };

  render() {
    const { cards } = this.state;
    const {
      match: {
        params: { name },
      },
    } = this.props;
    return (
      <div className="background">
        <div className="container">
          <div>
            <h1 className="title-selection">
              First 20 results for : <i>{name}</i>
            </h1>
            <img
              className="decorative-border selection-border"
              src={DecorativeBorder}
              alt="Decorative border under title"
            />
          </div>
          <div className="imgList">
            {cards.map((card) => {
              return <DisplayListCard card={card} key={card.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

MultiResultPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

DisplayListCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    playerClass: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    pictures_normal: PropTypes.string.isRequired,
  }).isRequired,
};

export default MultiResultPage;
