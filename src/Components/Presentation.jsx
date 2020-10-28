import React from 'react';
import './Presentation.css';
import PropTypes from 'prop-types';

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, author, paragraphe } = this.props;
    return (
      <div className="Presentation">
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <p className="paragraphe">{paragraphe}</p>
      </div>
    );
  }
}

// function Presentation(props) {
//   const { title, author, paragraphe } = props;
//   return (
//     <div className="Presentation">
//       <h2 className="title">{title}</h2>
//       <p className="author">{author}</p>
//       <p className="paragraphe">{paragraphe}</p>
//     </div>
//   );
// }

Presentation.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  paragraphe: PropTypes.string.isRequired,
};

export default Presentation;
