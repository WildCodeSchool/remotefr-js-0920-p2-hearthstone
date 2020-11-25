import React, { Component } from 'react';

class FilterResearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
    event.preventDefault();
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { inputValue } = this.state;
    const { handleSubmit, handleChange } = this;

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

export default FilterResearch;
