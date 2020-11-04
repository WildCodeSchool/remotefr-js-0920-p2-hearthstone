import './Research.css';
import DisplayCard from './components/DisplayCard';
import React from 'react';
import axios from 'axios';

const sampleCard = {
  name: 'Blowgill Sniper',
  playerClass: 'Neutral',
  rarity: 'Common',
  cost: 2,
  attack: 2,
  health: 1,
  text: '<b>Battlecry:</b> Deal 1 damage.',
  type: 'Minion',
  race: 'Murloc',
  cardSet: 'Mean Streets of Gadgetzan',
  flavor:
    'Imagine how much further his darts would go if he had lungs instead of gills!',
  artist: 'Tyler West Studio',
  img:
    'http://media.services.zam.com/v1/media/byName/hs/cards/enus/CFM_647.png',
};

class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: sampleCard,
    };
    this.getCard = this.getCard.bind(this);
  }

  getCard() {
    const config = {
      method: 'get',
      url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
      headers: {
        'x-rapidapi-key': 'ad80027f46msh8c1a1ed7780b8ccp130a6fjsnd21e03ec0703',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      },
    };

    axios(config)
      .then((response) => response.data)
      .then((data) => {
        console.log('axios:', data);
        this.setState({
          card: data[0],
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="Research">
        <DisplayCard card={this.state.card} />
        <button type="button" onClick={this.card}>
          Get card
        </button>
      </div>
    );
  }
}

export default Research;
