<<<<<<< HEAD
import './Research.css';
import DisplayCard from './components/DisplayCard';
import React from 'react';
import axios from 'axios';

class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getCards();
  }

  getCards = async () => {
    const options = {
      method: 'GET',
      url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/DS1_175',
      headers: {
        'x-rapidapi-key': '49a3b1f4e2mshf415725f12dbc29p1fcee0jsnd6406242952a',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      },
    };

    const myData = await axios.request(options).then(DisplayCard (response) {
      // return (response.data[0]);
      console.log(response.data[0]);
    });

    this.setState({ items: myData });
  };

  render = () => {
    const { name, rarity, img } = this.state.items;

    console.log(img);
    return (
      <div>
        <h1>{name}</h1>
        <img
          src="https://media.services.zam.com/v1/media/byName/hs/cards/enus/DS1_175.png"
          alt="coucou"
        />
      </div>
    );
  };
}

export default SingleCard;
=======
import React from 'react';
import Filter from './Filters';
import Catalogue from './Catalogue';

import './Research.css';

class Research extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          name: 'Jongleuse de lames',
          rarity: 'rare',
          mana: '6',
          class: 'demon-hunter',
        },
        {
          id: 2,
          name: 'Whatley, maître de la piste',
          rarity: 'légendaire',
          mana: '5',
          class: 'warrior',
        },
        {
          id: 3,
          name: 'Griffon du manège',
          rarity: 'common',
          mana: '5',
          class: 'paladin',
        },
      ],
    };
  }

  render() {
    const title = 'Advanced Research';
    const { cards } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <Filter />
        {cards.map((card) => (
          <Catalogue details={card} />
        ))}
      </div>
    );
  }
}

export default Research;
>>>>>>> dev
