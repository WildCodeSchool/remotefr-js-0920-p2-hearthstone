import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    const { history } = this.props;
    const { value } = this.state;
    history.push(`/use/${value}`);
    event.preventDefault();
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="cardName"
            value={value}
            onChange={this.handleChange}
            placeholder="Find a card"
          />
          <button type="button" id="search-button">
            <span role="img" aria-label="emoji" id="emoji">
              🔍
            </span>
          </button>
        </form>
      </div>
    );
  }
}

SearchName.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(SearchName);

//   // componentDidMount() {
//   //   this.getCards();
//   // }

//   // getCards = async () => {
//   //   let options = {
//   //     method: 'GET',
//   //     url: 'http://api-hearthstone.woozy.fr/v1/cards/single/id/3'
//   //   };

//   //   axios.request(options).then(function (response) {
//   //     console.log(response.data);
//   //   }).catch(function (error) {
//   //     console.error(error);
//   //   });

// //     const myData = await axios.request(options).then(DisplayCard (response) {
// //       // return (response.data[0]);
// //       console.log(response.data[0]);
// //     });

// //     this.setState({ items: myData });
// //   };

// //   render = () => {
// //     const { name, rarity, img } = this.state.items;

// //     console.log(img);
// //     return (
// //       <div>
// //         <h1>{name}</h1>
// //         <img
// //           src="https://media.services.zam.com/v1/media/byName/hs/cards/enus/DS1_175.png"
// //           alt="coucou"
// //         />
// //       </div>
// //     );
// //   };
// // }

// // export default SearchName;
