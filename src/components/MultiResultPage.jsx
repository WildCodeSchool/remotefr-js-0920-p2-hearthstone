import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import debug from 'debug';
import './Research.css';
import './MultiResultPage.css';

const log = debug('resultpage');

const DisplayListCard = (props) => {
  const { card } = props;
  const cardUrl = `/card/${card.id}`;

  return (
    <div key={card.id}>
      <Link to={cardUrl}>
        <div className="imgCard">
          <img src={card.pictures_normal} alt={card.name} />
        </div>
      </Link>
    </div>
  );
};

class MultiResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      loading: 'true',
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
    this.setState({ cards: [], loading: true });
    // console.log("SearchPages", this.props.match.params.name);//

    const options = {
      method: 'POST',
      url: 'https://api-hearthstone.woozy.fr/v1/cards/search',
      headers: { 'Content-Type': 'application/json' },
      data: { name: `%${name}%` },
    };
    const result = await axios
      .request(options)
      .then((response) => {
        // console.log("axios  : ", response.data);
        return response.data;
        // console.log(response.data);
      })
      .catch((error) => {
        log(error);
      });
    this.setState({ loading: false, cards: result });
  };

  render() {
    const { cards, loading } = this.state;
    const {
      match: {
        params: { name },
      },
    } = this.props;
    return (
      <div>
        <div>
          Votre recherche avec les mots clef : <b>{name}</b>
        </div>

        <p>{loading ? 'Loading....' : ''}</p>
        <div className="imgList">
          {cards.map((card) => {
            return <DisplayListCard card={card} key={card.id} />;
          })}
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
