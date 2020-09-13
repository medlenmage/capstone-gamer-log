import PropTypes from 'prop-types';

const logShape = PropTypes.shape({
  screenshot: PropTypes.string.isRequired,
  dateOfLog: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gameId: PropTypes.string.isRequired,
});

export default logShape;
