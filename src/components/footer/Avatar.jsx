import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { bigUrl, smallUrl, name } = this.props;
    return (
      <a href={bigUrl}>
        <img src={smallUrl} alt={name} title={name} />
      </a>
    );
  }
}

CharAvatar.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
}.isRequired;

export default CharAvatar;
