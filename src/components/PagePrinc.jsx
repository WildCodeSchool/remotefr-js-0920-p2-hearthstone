import React from 'react';
import PropTypes from 'prop-types';
import './PagePrinc.css';

import DecorativeBorder from '../assets/decorative-border3.png';

import zephrysEN from '../assets/zephrysEN.png';
import attackCard from '../assets/Presentation-images/attack-zephrys-card.png';
import healthCard from '../assets/Presentation-images/health-zephrys-card.png';
import manaCard from '../assets/Presentation-images/mana-zephrys-card.png';
import rarityCard from '../assets/Presentation-images/rarity-zephrys-card.png';

class PagePrinc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: props.displayed,
    };
  }

  render() {
    const { displayed } = this.state;
    const introDisplayed = displayed ? 'intro-displayed' : 'intro-hidden';
    return (
      <div className="background">
        <div className="articles">
          <blockquote className="firstArticle">
            <h1 className="titleFirstArticle">Game Introduction</h1>
            <img
              className="decorative-border"
              src={DecorativeBorder}
              alt="Decorative border under title"
            />
            <p>
              {`Hearthstone is a free-to-play online digital collectible card game developed and published by Blizzard Entertainment. Hearthstone based upon the existing lore of the Warcraft series by using the same elements, characters, and relics. `}
            </p>
            <button
              type="button"
              className="displayed-intro-button"
              aria-label="Intro displayed"
              onClick={() => {
                const newDisplayedIntroBtn = !displayed;
                this.setState({ displayed: newDisplayedIntroBtn });
              }}
            >
              See more...
            </button>
            <div className={introDisplayed}>
              <p>
                {`It was first released for Microsoft Windows and macOS in March 2014, with ports for iOS and Android releasing later that year. Game includes a cross-platform play, allowing players on any supported device to compete with another. 
          This game is a turn-based card game opposing two players, using built decks of 30 cards.`}
              </p>

              <p>
                {`Each deck needs a selected hero with unique power. Players use their
          restricted mana crystals to play abilities or summon minions to attack
          the opponent, in order to win. You can earn new cards, hero skins and gold(in game currency) by achieving quests and winning games. `}
              </p>
              <p>
                {`Players can buy packs of new cards thanks to gold or
          microtransactions to customize and improve their decks. Game
          has several formats, including casual and ranked matches,
          drafted arena battles, and single-player adventures.`}
              </p>
            </div>
          </blockquote>
          <blockquote className="secondArticle">
            <h1 className="titleSecondArticle">Card Analysis</h1>
            <img
              className="decorative-border"
              src={DecorativeBorder}
              alt="Decorative border under title"
            />
            <p>
              Cards are the basic pieces of Hearthstone. Each one defines an
              action the player can do by playing that card. They contain
              several specificites:
            </p>
            <div className="grid-container">
              <article className="card_image">
                <div className="card-image-inner">
                  <img src={zephrysEN} alt="Zephrys" />
                  <img
                    className="card-attack-icon"
                    src={attackCard}
                    alt="Card attack icon"
                  />

                  <img
                    className="card-health-icon"
                    src={healthCard}
                    alt="Card health icon"
                  />
                  <img
                    className="card-mana-icon"
                    src={manaCard}
                    alt="Card mana icon"
                  />
                  <img
                    className="card-rarity-icon"
                    src={rarityCard}
                    alt="Card rarity icon"
                  />
                </div>
              </article>
              <article className="Mana-Cost">
                <strong className="center">Mana cost: </strong> Card mana cost.
              </article>
              <article className="Name">
                <strong className="center">Name: </strong>
                <span> Card name.</span>
              </article>
              <article className="Rarity">
                <strong className="center">Rarity: </strong>
                <span className="right">
                  From common(frequent) to legendary(rarest) .
                </span>
              </article>
              <article className="Health">
                <strong className="center">Health: </strong>
                <span className="right">Damge a minion can take.</span>
              </article>
              <article className="Effect">
                <strong>Effect:</strong> Some cards have a battlefield effect.
              </article>
              <article className="Attack">
                <strong>Attack:</strong> Damage dealt by the minion.
              </article>
              <article className="Class">
                <strong>Class:</strong> Ten classes are available.
              </article>
            </div>
          </blockquote>
        </div>
      </div>
    );
  }
}

PagePrinc.propTypes = {
  displayed: PropTypes.bool.isRequired,
};

export default PagePrinc;
