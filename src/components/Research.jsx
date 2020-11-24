import React from 'react';
import PropTypes from 'prop-types';

import FilterName from './FilterName';
import FilterClass from './FilterClass';
import FilterMana from './FilterMana';
import FilterRarity from './FilterRarity';

import './Research.css';
import DecorativeBorder from '../assets/decorative-border3.png';

class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.singleCard,
      cardMana: -1,
      cardClass: '',
      cardRarity: '',
    };
  }

  // lancer l'appel API avec tous les criteres
  fetchData = () => {
    const data = {};
    const { cardClass, cardRarity, cardMana } = this.state;
    if (cardClass !== '') {
      data.playerClass = cardClass;
    }
    if (cardRarity !== '') {
      data.rarity = cardRarity;
    }
    if (cardMana !== -1) {
      data.cost = cardMana;
    }
  };

  handleSelectClass = (newCardClass) => {
    // setState prend un 2eme argument optionnel : un callback
    // seulement si vous voulez faire recherche temps reel
    this.setState({ cardClass: newCardClass }, this.fetchData);
  };

  handleSelectRarity = (newCardRarity) => {
    this.setState({ cardRarity: newCardRarity }, this.fetchData);
  };

  handleSelectMana = (newCardMana) => {
    this.setState({ cardMana: newCardMana }, this.fetchData);
  };

  render() {
    const title = 'Advanced Search';
    const { cards, cardClass, cardRarity, cardMana } = this.state;
    return (
      <div className="background">
        <div className="research-container">
          <h1>{title}</h1>
          <img className="decorative-border" src={DecorativeBorder} alt="" />
          <div className="research-content">
            <div className="filters">
              <FilterName singleCard={cards} />
              <FilterClass
                cardClass={cardClass}
                handleSelectClass={this.handleSelectClass}
              />
              <FilterMana
                cardMana={cardMana}
                handleSelectMana={this.handleSelectMana}
              />
              <FilterRarity
                cardRarity={cardRarity}
                handleSelectRarity={this.handleSelectRarity}
              />
            </div>
            <div className="cards-list">
              Le catalogue sera ici ! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Harum officiis ab earum ex nostrum corporis
              quasi esse, enim ipsum beatae tempora quo, iure aspernatur, eius
              omnis et doloremque perferendis expedita. Saepe fugiat temporibus
              ad delectus rerum beatae earum nihil libero dignissimos rem enim
              est odio reprehenderit, dolorem, possimus iure aut exercitationem
              recusandae? Aspernatur, laborum! Quam enim libero illo hic saepe.
              Voluptates, aperiam aspernatur! Suscipit repellat tempora
              reiciendis illo aperiam cum, voluptatum veniam, at, est veritatis
              nostrum? Accusamus corporis molestias voluptates aspernatur modi
              ut quam quia eligendi, iste, illum, maiores voluptatem? Earum
              neque quaerat quis temporibus debitis facere ad vitae quas
              consequuntur consequatur, unde suscipit in asperiores, voluptates
              blanditiis enim distinctio placeat voluptate deleniti quod sit hic
              ut, repudiandae mollitia! Saepe? Laborum provident veniam iusto,
              unde adipisci corrupti aliquid ipsam suscipit vel, placeat
              doloremque distinctio nam ullam! Nisi quia ab ratione totam minus.
              Atque enim et minus nulla quisquam aut excepturi. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Doloremque, dolorem
              magni atque dolor sed, vero quos cum expedita repellendus,
              similique tempora animi? Voluptate ea voluptates repudiandae natus
              eius commodi quo. Fugit, praesentium aliquam velit, aperiam
              debitis placeat distinctio magnam facere similique aut alias,
              deserunt consequatur assumenda officia qui. Eaque unde dolores
              aliquid non ex modi eum atque aperiam nam reiciendis. Nesciunt
              vero nisi, harum accusantium veniam unde ipsam debitis? Qui
              voluptatibus, facilis ex similique repudiandae unde voluptate
              officia fugit nemo, dolorem sit non nostrum aliquam fugiat maiores
              incidunt quaerat nobis. Dolore vel vitae veritatis magni aliquid
              nihil sunt earum explicabo sed libero nam ut quos nulla itaque
              iure aut voluptas soluta deserunt, praesentium neque amet illo
              autem eum. Inventore, repudiandae! Est, quasi architecto atque,
              non laborum debitis nam labore cumque ducimus cum eos ipsum.
              Maxime, autem neque! Dolorum excepturi, blanditiis sint non saepe
              libero, laborum reprehenderit ullam omnis sit consequuntur. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Ea temporibus,
              voluptatum cupiditate dolor id odit? Aliquid sed odit aspernatur
              animi, iste nisi quasi cum molestias inventore repellendus sequi
              perspiciatis corporis. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Consectetur modi numquam adipisci et impedit
              qui, dolorem harum ratione ut animi cum similique. Tempora eos
              enim repudiandae consequatur recusandae! Illum, officia! Ut hic,
              deserunt illum voluptatum vitae natus. Quas sit optio rem,
              quisquam doloribus voluptas aliquid necessitatibus. Sapiente,
              laboriosam ipsam? Expedita ex cum quasi neque distinctio commodi
              maxime aut dolore in. Laboriosam iusto nisi amet doloribus at.
              Fugit omnis autem accusamus id soluta doloremque sequi nesciunt
              ullam earum a? Saepe consequatur illo obcaecati architecto
              voluptatem enim molestias repellendus nostrum ad veniam. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Quod officia
              voluptate accusantium veniam iure debitis distinctio, sed non, aut
              praesentium sit numquam delectus tempore at, in suscipit eos dicta
              nam.Magnam quo iusto debitis possimus pariatur blanditiis quia
              error ipsa est quisquam aliquam assumenda quos fugiat repudiandae
              perspiciatis nihil odio voluptate, incidunt eligendi repellendus
              magni exercitationem vitae! Magnam, dignissimos beatae?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Research.propTypes = {
  singleCard: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    mana: PropTypes.number.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default Research;
