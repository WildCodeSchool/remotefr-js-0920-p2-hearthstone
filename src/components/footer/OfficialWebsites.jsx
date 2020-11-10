import PropTypes from 'prop-types';

const OfficialWebsites = (props) => {
  const { name, url } = props;
  return <a href={url}>{name}</a>;
};

OfficialWebsites.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
}.isRequired;

export default OfficialWebsites;
