import React from 'react';
import PropTypes from 'prop-types';
import './Research.css';

class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
    };
  }

  render() {
    const { selected } = this.state;
    return (
      <main className="research-container">
        <div className="research-content">
          <h1>Advanced Research</h1>

          <section className="filters">
            <div className="class-card">
              <form>
                <select name="class" size="1">
                  <option>Classes</option>
                  <option>Demon hunter</option>
                  <option>Druid</option>
                  <option>Hunter</option>
                  <option>Magus</option>
                  <option>Paladin</option>
                  <option>Priest</option>
                  <option>Thief</option>
                  <option>Shaman</option>
                  <option>Warlock</option>
                  <option>Warrior</option>
                  <option>Neutral</option>
                </select>
              </form>
            </div>

            <div className="rarities">
              <form>
                <select name="rarities" size="1">
                  <option>Rarity</option>
                  <option>Commune</option>
                  <option>Free</option>
                  <option>Rare</option>
                  <option>Epic</option>
                  <option>Legendary</option>
                </select>
              </form>
            </div>

            <div className="mana-button">
              <button
                type="button"
                onClick={() => {
                  const manaSelected = selected;
                  this.setState({ selected: manaSelected });
                }}
              >
                <p className={selected ? 'mana-selected' : 'mana'}>Mana</p>
              </button>
            </div>
          </section>

          <section className="cards-list">
            <div>Catalogue</div>
          </section>
        </div>
      </main>
    );
  }
}

Research.propTypes = {
  selected: PropTypes.bool.isRequired,
};

export default Research;
