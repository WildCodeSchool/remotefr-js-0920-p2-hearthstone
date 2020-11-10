import PropTypes from 'prop-types';

// const SocialNetworks = (imgUrl, name, url)
const SocialNetworks = (props) => {
  const { imgUrl, name, url } = props;
  return (
    <a href={url}>
      <img className="socialLinks" alt={name} src={imgUrl} />
    </a>
  );
};

SocialNetworks.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  url: PropTypes.string,
}.isRequired;

export default SocialNetworks;
