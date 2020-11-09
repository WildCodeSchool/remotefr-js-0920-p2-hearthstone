import React from 'react';
import './PagePrinc.css';
import zephrysEN from '../assets/zephrysEN.png';

const PagePrinc = () => {
  return (
    <div className="articles">
      <blockquote className="firstArticle">
        <h1 className="titleFirstArticle">Game Introduction</h1>
        <p>
          {`Hearthstone is a free-to-play online digital collectible card game developed and published by Blizzard Entertainment. Hearthstone based upon the existing lore of the Warcraft series by using the same elements, characters, and relics. It was first released for Microsoft Windows and macOS in March 2014, with ports for iOS and Android releasing later that year. Game includes a cross-platform play, allowing players on any supported device to compete with another. 
            This game is a turn-based card game opposing two players, using built decks of 30 cards.`}
        </p>
        <p>
          {`Each deck needs a selected hero with unique power. Players use their
          restricted mana crystals to play abilities or summon minions to attack
          the opponent, in order to win. You can earn new cards, hero skins and gold(in game currency) by achieving quests and winning games.`}
        </p>
        <p>
          {`Players can buy packs of new cards thanks to gold or
          microtransactions to customize and improve their decks. Game
          has several formats, including casual and ranked matches,
          drafted arena battles, and single-player adventures.`}
        </p>
      </blockquote>
      <blockquote className="secondArticle">
        <h1 className="titleSecondArticle">Card Analysis</h1>
        <p>
          Cards are the basic pieces of Hearthstone. Each one defines an action
          the player can do by playing that card. They contain several
          specificites:
        </p>
        <div className="grid-container">
          <article className="card_image">
            <img src={zephrysEN} alt="Zephrys" />
          </article>
          <article className="Name">
            <strong>Name:</strong> Card name.
          </article>
          <article className="Class">
            <strong>Class:</strong> Ten classes are available (demon hunter,
            druid, hunter, mage, paladin, priest, rogue, shaman, warlock,
            warrior).
          </article>
          <article className="Rarety">
            <strong>Rarity: </strong>
            {`Six rarities available with gem color associated (no gem: free,
            white gem: common, blue gem: rare, purple gem: epic, orange gem:
            legendary)`}
            .
          </article>
          <article className="Mana-cost">
            <strong>Mana cost:</strong> Number in blue hexagon is the card mana
            cost.
          </article>
          <article className="Attack">
            <strong>Attack:</strong> Number in yellow circle is the quantity of
            damage dealt by the minion.
          </article>
          <article className="Health">
            <strong>Health: </strong>Number in red drop is the quantity of
            damage the minion can handle.
          </article>
          <article className="Effect">
            <strong>Effect:</strong> Some cards have a battlefield effect.
          </article>
        </div>
      </blockquote>
    </div>
  );
};

export default PagePrinc;
