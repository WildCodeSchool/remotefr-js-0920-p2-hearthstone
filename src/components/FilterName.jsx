import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { inputValue, handleChange } = this.props;
    const { handleSubmit } = this;

    return (
      <div className="name-research">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">
            <h2>Filter by card name</h2>
            <input
              value={inputValue}
              id="card-filter-search"
              placeholder="Find a card"
              type="text"
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

FilterName.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
};

export default FilterName;
