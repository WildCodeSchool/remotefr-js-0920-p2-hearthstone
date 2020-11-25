import React from 'react';
import axios from 'axios';
import Benoit from '../assets/AvatarCarteBenoit.png';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: Benoit,
    };
  }

  randomCard = async () => {
    const id = Math.floor(Math.random() * Math.floor(20));
    const {
      data: { pictures_normal: pictureNormal },
    } = await axios.get(
      `https://api-hearthstone.woozy.fr/v1/cards/single/id/${id}`,
    );
    this.setState({ img: pictureNormal });
  };

  render() {
    const { img } = this.state;

    return (
      <div>
        <img src={img} alt="Avatar de Benoit" />
        <button className="btn" type="button" onClick={() => this.randomCard()}>
          Another random card
          <span role="img" aria-label="emoji">
            🎲
          </span>
        </button>
      </div>
    );
  }
}

export default Random;
