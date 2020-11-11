import React from 'react';
import axios from 'axios';

class SinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      loading: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ loading: true });
      this.getCard();
    }
  }

  componentDidMount = () => {
    this.getCard();
  };

  getCard = async () => {
    this.setState({ card: [] });

    let options = {
      method: 'GET',
      url: `https://api-hearthstone.woozy.fr/v1/cards/single/id/${this.props.match.params.id}`,
    };

    const result = await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
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

DisplayCard = (props) => {
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
        <img src={card.pictures_normal} />
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

export default SinglePage;
