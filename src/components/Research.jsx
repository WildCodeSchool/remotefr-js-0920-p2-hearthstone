import React from 'react';
// import MageUnchecked from '../assets/mage-unchecked.png';
import './Research.css';

class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="research-container">
        <div className="research-content">
          <h1>Advanced Research</h1>

          <section className="filters">
            <div className="class-filter">
              <h2>Recherche</h2>

              <h2>Classes</h2>
              <label htmlFor="class-demon-hunter">
                <input
                  type="checkbox"
                  name="class-demon-hunter"
                  id="class-demon-hunter"
                />
                Demon hunter
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="class-druid">
                <input type="checkbox" name="class-druid" id="class-druid" />
                Druid
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="class-hunter">
                <input type="checkbox" name="class-hunter" id="class-hunter" />
                Hunter
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="class-mage">
                <input type="checkbox" name="class-mage" id="class-mage" />
                Mage
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="class-paladin">
                <input
                  type="checkbox"
                  name="class-paladin"
                  id="class-paladin"
                />
                Paladin
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="class-priest">
                <input type="checkbox" name="class-priest" id="class-priest" />
                Priest
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="class-rogue">
                <input type="checkbox" name="class-rogue" id="class-rogue" />
                Rogue
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="class-shaman">
                <input type="checkbox" name="class-shaman" id="class-shaman" />
                Shaman
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="class-warlock">
                <input
                  type="checkbox"
                  name="class-warlock"
                  id="class-warlock"
                />
                Warlock
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="class-warrior">
                <input
                  type="checkbox"
                  name="class-warrior"
                  id="class-warrior"
                />
                Warrior
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="class-neutral">
                <input
                  type="checkbox"
                  name="class-neutral"
                  id="class-neutral"
                />
                Neutral
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>
            </div>

            <div className="rarities-filter">
              <h2>Rarities</h2>
              <label htmlFor="rarity-common">
                <input
                  type="checkbox"
                  name="rarity-common"
                  id="rarity-common"
                />
                Common
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="rarity-free">
                <input type="checkbox" name="rarity-free" id="rarity-free" />
                Free
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="rarity-rare">
                <input type="checkbox" name="rarity-rare" id="rarity-rare" />
                Rare
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>

              <label htmlFor="rarity-epic">
                <input type="checkbox" name="rarity-epic" id="rarity-epic" />
                Epic
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>
              <label htmlFor="rarity-legendary">
                <input
                  type="checkbox"
                  name="rarity-legendary"
                  id="rarity-legendary"
                />
                Legendary
                <img
                  className="class-filter-img"
                  src=""
                  alt=" "
                  id="class-filter-img"
                />
              </label>
            </div>

            <div className="mana-filter">Mana</div>
            <h2>Mana cost</h2>

            <label htmlFor="mana-1">
              <input type="checkbox" name="mana-1" id="mana-1" />
              <img
                className="class-filter-img"
                src=""
                alt=" "
                id="class-filter-img"
              />
            </label>
            <label htmlFor="mana-2">
              <input type="checkbox" name="mana-2" id="mana-2" />
              <img
                className="class-filter-img"
                src=""
                alt=" "
                id="class-filter-img"
              />
            </label>
            <label htmlFor="mana-3">
              <input type="checkbox" name="mana-3" id="mana-3" />
              <img
                className="class-filter-img"
                src=""
                alt=" "
                id="class-filter-img"
              />
            </label>
            <label htmlFor="mana-4">
              <input type="checkbox" name="mana-4" id="mana-4" />
              <img
                className="class-filter-img"
                src=""
                alt=" "
                id="class-filter-img"
              />
            </label>
            <label htmlFor="mana-5">
              <input type="checkbox" name="mana-5" id="mana-5" />
              <img
                className="class-filter-img"
                src=""
                alt=" "
                id="class-filter-img"
              />
            </label>
            <label htmlFor="mana-6">
              <input type="checkbox" name="mana-6" id="mana-6" />
              <img
                className="class-filter-img"
                src=""
                alt=" "
                id="class-filter-img"
              />
            </label>
            <label htmlFor="mana-7">
              <input type="checkbox" name="mana-7" id="mana-7" />
              <img
                className="class-filter-img"
                src=""
                alt=" "
                id="class-filter-img"
              />
            </label>
            <label htmlFor="mana-8">
              <input type="checkbox" name="mana-8" id="mana-8" />
              <img
                className="class-filter-img"
                src=""
                alt=" "
                id="class-filter-img"
              />
            </label>
          </section>

          <section className="cards-list">
            <div>Catalogue</div>
          </section>
        </div>
      </main>
    );
  }
}

export default Research;
