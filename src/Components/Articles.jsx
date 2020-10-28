import React from 'react';
import Presentation from './Presentation';

const articles = [
  {
    title: 'Présentation du jeu',
    author: 'By Vivien Michelesi',
    paragraphe:
      "Hearthstone est un jeu de cartes à collectionner en ligne, développé et édité par la société Blizzard Entertainment. C'est un jeu gratuit s'inspirant de l'univers de fiction médiéval-fantastique du jeu vidéo Warcraft développé par Blizzard. Le nom du jeu est inspiré d'un objet, l’Hearthstone (la « Pierre de foyer » en français), issu du MMORPG World of Warcraft. Au début d'une partie, le joueur choisit un des dix héros du jeu, issus du jeu Warcrafta et un jeu de 30 cartes (deck), préalablement créé par le joueur, pour disputer une bataille contre un joueur adverse dans l'un des différents modes de jeu. Les deux adversaires s'affrontent sur un plateau de jeu virtuel, similaire à un jeu de plateau. Les héros disposent de 30 points de vie et d'un point de mana (ou 0) au premier tour de jeu, la mana augmentant d'un point par tour jusqu’à atteindre un maximum de 10 points. Les points de mana servent à activer les cartes du deck sur le plateau de jeu, ainsi que le pouvoir héroïque du héros. Le but du jeu est de réduire à zéro les points de vie du héros adverse, par l'utilisation de serviteurs, de sorts, d'armes (symbolisés par les cartes du deck du joueur) ou par l'utilisation du pouvoir héroïque du héros que contrôle le joueur (selon les cas). Si l'un des héros arrive à 0 point de vie, son icône sur le plateau de jeu explose, et son adversaire remporte la partie",
  },
  {
    title: "Analyse d'une carte",
    author: 'By Vivien Michelesi',
    paragraphe:
      "Chaque carte de Hearthstone a un coût en mana pour être jouée, indiqué en haut à gauche de la carte (icône bleue). Les points de mana disponibles pour le joueur à chaque tour de jeu sont indiqués à la droite du portrait du héros. Les cartes comprennent des serviteurs (notés x/x pour dégâts et points de vie), des armes (notés x/x pour dégâts et durabilité) et des sorts (avec le cout en mana uniquement). Toutes les cartes incluent une description de leur effet, et une illustration en couleur (qui peut s'animer, si la carte est dorée). Les cartes fonctionnent de la manière suivante : les serviteurs, qui invoquent une créature sur le terrain de jeu. Un serviteur possède une valeur d'attaque (indiquée en bas à gauche), un nombre de points de vie (indiqué en bas à droite) et éventuellement une action spéciale, indiquée sur le visuel de la carte (comme une action à son arrivée en jeu, appelée « cri de guerre », une action à sa mort, appelée « râle d'agonie », ou tout autre capacité décrite sur la carte). Quand il est posé sur le plateau de jeu, un serviteur doit attendre un tour avant de pouvoir attaquer (sauf pour ceux avec l'effet Charge ou Ruée qui peuvent attaquer immédiatement). Quand un serviteur attaque un serviteur adverse, il reçoit des dommages équivalents à l'attaque de ce dernier. Toutefois, un serviteur ne prend pas de dégâts s'il attaque le héros adverse ; les sorts, qui effectuent une ou plusieurs actions spéciales : faire des dégâts, soigner, piocher des cartes, préparer une action secrète, voler des cartes à l'adversaire, etc. ; les armes, qui permettent au héros d'attaquer en plus de ses serviteurs. Ces cartes possèdent une valeur d'attaque (indiquée en bas à gauche) et un nombre d'utilisation (la durabilité, en bas à droite). L'arme perd un point de durabilité lorsque le héros équipé de l'arme attaque. L'arme peut également être détruite de trois façons différentes : lorsqu'elle atteint 0 de durabilité, lorsque l'on équipe une seconde arme (l'arme équipée est alors remplacée par la nouvelle) ou lorsque l'adversaire joue certaines cartes spécifiques pour la détruire (« Limon des marais acides », « Sabotage », « Harrison Jones », etc.). Par la suite, d'autres fonctionnalités sont ajoutées : Les cartes peuvent avoir différentes raretés : « basique », « commune », « rare », « épique » et « légendaire ». Les cartes basiques sont débloquées après avoir atteint certains niveaux d'expérience avec les héros. Les autres sont facilement reconnaissables par la gemme qui se trouve sous leur illustration : une gemme blanche pour les communes, bleue pour les rares, violette pour les épiques et orange pour les légendaires ; les cartes légendaires ont en plus un dessin de dragon sur le dessus de l'illustration. En plus de leur rareté, les cartes sont divisées en deux groupes : les cartes « neutres » (accessibles à tous les joueurs) ou les cartes de « classe » (accessibles uniquement à une classe spécifique, c-à-d. à l'un des dix personnages du jeu). Les cartes sont toutes disponibles en deux exemplaires maximum dans la collection du joueur, sauf les cartes légendaires qui le sont en un exemplaire (cartes uniques) ; à cela, on peut rajouter pour chaque carte les versions dorées éventuelles (2 cartes normales plus 2 cartes dorées maximum, 1 + 1 pour les légendaires).",
  },
];

const Articles = () => (
  <div>
    {articles.map((article) => (
      <Presentation
        title={article.title}
        author={article.author}
        paragraphe={article.paragraphe}
      />
    ))}
  </div>
);

export default Articles;
