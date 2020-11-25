import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = (event) => {
    const { search } = this.state;
    const { history } = this.props;
    history.push(`/search/${search}`); // on change de page avec le param
    this.setState({ search: '' }); // on vide la case du formulaire
    event.preventDefault();
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="cardName"
            value={search}
            onChange={this.handleChange}
            placeholder="Find a card"
          />

          <button type="submit" id="search-button">
            <span role="img" aria-label="emoji" id="emoji">
              🔍
            </span>
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(SearchBar);
