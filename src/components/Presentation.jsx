// import React from 'react';
// import './Presentation.css';
// import PropTypes from 'prop-types';

// class Presentation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nonVisible: props.nonVisible,
//     };
//   }

//   render() {
//     const { title, author, paragraphe, button } = this.props;
//     const { nonVisible } = this.state;
//     return (
//       <div className="Presentation">
//         <h2 className="title">{title}</h2>
//         <p className="author">{author}</p>
//         <p
//           className={nonVisible ? 'paragraphe-invisble' : 'paragraphe-visible'}
//         >
//           {paragraphe}
//         </p>
//         <button
//           type="button"
//           className="buttonPlus"
//           onClick={() => {
//             const voirPlus = !nonVisible;
//             this.setState({ nonVisible: voirPlus });
//           }}
//         >
//           {button}
//         </button>
//       </div>
//     );
//   }
// }

// // function Presentation(props) {
// //   const { title, author, paragraphe } = props;
// //   return (
// //     <div className="Presentation">
// //       <h2 className="title">{title}</h2>
// //       <p className="author">{author}</p>
// //       <p className="paragraphe">{paragraphe}</p>
// //     </div>
// //   );
// // }
// // test

// Presentation.propTypes = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   paragraphe: PropTypes.string.isRequired,
//   button: PropTypes.string.isRequired,
//   nonVisible: PropTypes.bool.isRequired,
// };

// export default Presentation;
