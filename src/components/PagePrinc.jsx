import React from 'react';
import './PagePrinc.css';

const PagePrinc = () => {
  return (
    <div className="articles">
      <div className="firstArticle">
        <h1 className="titleFirstArticle+">Game presentation</h1>
        <p>
          {`Hearthstone is a free-to-play online digital collectible card game developed and published by Blizzard Entertainment. Hearthstone builds upon the existing lore of the Warcraft series by using the same elements, characters, and relics. It was first released for Microsoft Windows and macOS in March 2014, with ports for iOS and Android releasing later that year. The game features cross-platform play, allowing players on any supported device to compete with one another. 
        
        The game is a turn-based card game between two opponents, using constructed decks of 30 cards along with a selected hero with a unique power. Players use their limited mana crystals to play abilities or summon minions to attack the opponent, with the goal of destroying the opponent's hero. Winning matches and completing quests earn in-game gold, rewards in the form of new cards, and other in-game prizes. Players can then buy packs of new cards through gold or microtransactions to customize and improve their decks. The game features several modes of play, including casual and ranked matches, drafted arena battles, and single-player adventures. New content for the game involves the addition of new card sets and gameplay, taking the form of either expansion packs or adventures that reward the player with collectible cards upon completion.`}
        </p>
      </div>
      <div className="secondArticle">
        <h1 className="titleSecondArticle">Card Analyse</h1>
        <p>
          Cards are the basic pieces that make up the game of Hearthstone. Each
          card represents an action that the player can take by playing that
          card. The different specificities present on the card are:
        </p>
        <ul>
          <li>Name</li>
          <li>Class</li>
          <li>Rarety</li>
          <li>Cost</li>
          <li>Attack</li>
          <li>Health</li>
          <li>Effect</li>
        </ul>
      </div>
    </div>
  );
};

export default PagePrinc;
