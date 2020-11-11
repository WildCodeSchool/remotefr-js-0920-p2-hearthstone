// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// class SearchName extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       card: {}
//       loading: true
//     };
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.location.pathname !== prevProps.location.pathname) {
//       this.setState({ loading: true });
//       this.getCard();
//     }
//   }

//   componentDidMount = () => {
//     this.getCards();
//   };

//   getCards = async () => {
//     const {
//       match: {
//         params: { name },
//       },
//     } = this.props;
//     this.setState[{card:[]}];

//     let options = {
//       method: "GET",
//       url: `https://api-hearthstone.woozy.fr/v1/cards/single/id/${this.props.match.params.id}`
//     };

//    const result = await axios
//       .request(options)
//       .then(function (response) {
//         console.log(response.data);
//         return response.data;
//       })
//       .catch(function (error) {
//         console.error(error);
//       });

//     this.setState({ loading: false });
//     this.setState({ card: result });
//   };

//   // handleChange = (event) => {
//   //   this.setState({ value: event.target.value });
//   // };

//   // handleSubmit = (event) => {
//   //   const { history } = this.props;
//   //   const { value } = this.state;
//   //   history.push(
//   //     `/https://api-hearthstone.woozy.fr/v1/cards/single/id/${value}`,
//   //   );
//   //   event.preventDefault();
//   // };

//   render() {
//     const { card, loading} = this.state;
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             id="cardName"
//             value={value}
//             onChange={this.handleChange}
//             placeholder="Find a card"
//           />
//           <button type="button" id="search-button">
//             <span role="img" aria-label="emoji" id="emoji">
//               🔍
//             </span>
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// SearchName.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired,
//   }).isRequired,
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// export default withRouter(SearchName);
