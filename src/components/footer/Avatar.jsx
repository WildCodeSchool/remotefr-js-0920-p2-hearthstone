import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeImage = (id, url) => {
    const img = document.getElementById(id);
    img.setAttribute('src', url);
  };

  render() {
    const { smallUrl, name, id, bigUrl } = this.props;
    return (
      <Link to="/ourteam">
        <img
          className="change"
          id={id}
          src={smallUrl}
          alt={name}
          title={name}
          onMouseEnter={() => this.changeImage(id, bigUrl)}
          onMouseLeave={() => this.changeImage(id, smallUrl)}
        />
      </Link>
    );
  }
}

Avatar.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
}.isRequired;

export default Avatar;
