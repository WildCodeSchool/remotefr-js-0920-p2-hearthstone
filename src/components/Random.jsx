import React from 'react';
import axios from 'axios';
import Benoit from '../assets/AvatarCarteBenoit.png';
import './Random.css';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: Benoit,
    };
  }

  randomCard = async () => {
    const {
      data: { pictures_normal: pictureNormal },
    } = await axios.get(
      `https://api-hearthstone.woozy.fr/v1/cards/single/random`,
    );
    this.setState({ img: pictureNormal });
  };

  render() {
    const { img } = this.state;

    return (
      <div className="background">
        <div className="articles">
          <h1 className="title">Random card </h1>
          <blockquote className="our-team">
            <img src={img} alt="Avatar de Benoit" />
          </blockquote>
          <div className="hs-wrapper gold">
            <button
              className="random-btn hs-button gold"
              type="button"
              onClick={() => this.randomCard()}
            >
              <span className="hs-border gold">
                <span className="hs-text gold">Another random card</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Random;
