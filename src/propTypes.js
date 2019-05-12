import PropTypes from 'prop-types';
import SignalStrength from './SignalStrength';

export default {
  strength: PropTypes.oneOf([
    SignalStrength.EXCELLENT,
    SignalStrength.GREAT,
    SignalStrength.OKAY,
    SignalStrength.WEAK,
    SignalStrength.UNUSABLE,
    SignalStrength.DISCONNECTED
  ]).isRequired,
  statusImages: PropTypes.shape({
    [SignalStrength.EXCELLENT]: PropTypes.string.isRequired,
    [SignalStrength.GREAT]: PropTypes.string.isRequired,
    [SignalStrength.OKAY]: PropTypes.string.isRequired,
    [SignalStrength.WEAK]: PropTypes.string.isRequired,
    [SignalStrength.UNUSABLE]: PropTypes.string.isRequired,
    [SignalStrength.DISCONNECTED]: PropTypes.string.isRequired,
  }),
  style: PropTypes.object,
  alt: PropTypes.string,
};
