import PropTypes from 'prop-types';

const gameShape = PropTypes.shape({
  gameName: PropTypes.string.isRequired,
  gameGenre: PropTypes.string.isRequired,
  currentlyPlaying: PropTypes.bool.isRequired,
  dateStarted: PropTypes.string.isRequired,
  gameImage: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default gameShape;
