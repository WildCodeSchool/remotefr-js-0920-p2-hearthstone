import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    const { location, pathname } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      this.setState({ loading: true });
      this.getCards();
    }
  }

  getCards = async () => {
    const {
      match: {
        params: { name },
      },
    } = this.props;
    this.setState[{ card: [] }];
    // console.log("SearchPages", this.props.match.params.name);//
    const options = {
      method: 'POST',
      url: 'https://api-hearthstone.woozy.fr/v1/cards/search',
      headers: { 'Content-Type': 'application/json' },
      data: { name: `%${this.props.match.params.name}%` },
    };
    const result = await axios
      .request(options)
      .then(function (response) {
        //console.log("axios  : ", response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    this.setState({ loading: false });
    this.setState({ cards: result });
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
          Votre recherche avec les mots clef :{' '}
          <b>{this.props.match.params.name}</b>
        </div>

        <p>{loading ? 'Loading....' : ''}</p>

        {cards.map((card) => {
          return <DisplayListCard card={card} key={card.id} />;
        })}
      </div>
    );
  }
}

DisplayListCard = (props) => {
  const { card } = props;
  const card_url = `/card/${card.id}`;
  return (
    <div key={card.id}>
      <h2>{card.name}</h2>
      <div>
        <b>playerClass</b> : {card.playerClass}
      </div>
      <div>
        <b>cardSet</b> : {card.cardSet}
      </div>

      <div>
        <Link to={card_url}>Voir la carte</Link>
      </div>
      <hr />
    </div>
  );
};

export default MultiResultPage;
