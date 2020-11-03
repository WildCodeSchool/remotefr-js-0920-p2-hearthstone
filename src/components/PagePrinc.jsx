import React from 'react';
import './PagePrinc.css';
import zephrysEN from '../assets/zephrysEN.png';

const PagePrinc = () => {
  return (
    <body>
      <div className="articles">
        <div className="firstArticle">
          <h1 className="titleFirstArticle">Game presentation</h1>
          <p>
            {`Hearthstone is a free-to-play online digital collectible card game developed and published by Blizzard Entertainment. Hearthstone builds upon the existing lore of the Warcraft series by using the same elements, characters, and relics. It was first released for Microsoft Windows and macOS in March 2014, with ports for iOS and Android releasing later that year. The game features cross-platform play, allowing players on any supported device to compete with one another. 
            
            The game is a turn-based card game between two opponents, using constructed decks of 30 cards along with a selected hero with a unique power. Players use their limited mana crystals to play abilities or summon minions to attack the opponent, with the goal of destroying the opponent's hero. Winning matches and completing quests earn in-game gold, rewards in the form of new cards, and other in-game prizes. Players can then buy packs of new cards through gold or microtransactions to customize and improve their decks. The game features several modes of play, including casual and ranked matches, drafted arena battles, and single-player adventures. New content for the game involves the addition of new card sets and gameplay, taking the form of either expansion packs or adventures that reward the player with collectible cards upon completion.`}
          </p>
        </div>
        <div className="secondArticle">
          <h1 className="titleSecondArticle">Card Analyse</h1>
          <p>
            Cards are the basic pieces that make up the game of Hearthstone.
            Each card represents an action that the player can take by playing
            that card. The different specificities present on the card are:
          </p>
          <div className="grid-container">
            <article className="card_image">
              <img src={zephrysEN} alt="Zephrys" />
            </article>
            <article className="Name">
              <strong>Name:</strong> the name of the card.
            </article>
            <article className="Class">
              <strong>Class:</strong> 10 classes available (demon hunter, druid,
              hunter, mage, paladin, priest, rogue, shaman, warlock, warrior).
            </article>
            <article className="Rarety">
              <strong>Rarety:</strong>{' '}
              {`6 rarety available with gem color associated (no gem:
                free, white gem: common, blue gem: rare, purple gem: epic,
                orange gem: legendary).`}
            </article>
            <article className="Mana-cost">
              <strong>Mana cost:</strong> the number in blue crystal represent
              the cost in mana for playing the card.
            </article>
            <article className="Attack">
              <strong>Attack:</strong> the number in yellow circle represent the
              quantity of damage deals by the creature.
            </article>
            <article className="Health">
              <strong>Health:</strong> the number in red dropplet represent the
              quantity of damage for killing the creature.
            </article>
            <article className="Effect">
              <strong>Effect:</strong> some cards have an effect when entering
              in the battlefield or on the battlefield.
            </article>
          </div>
        </div>
      </div>
    </body>
  );
};

export default PagePrinc;
