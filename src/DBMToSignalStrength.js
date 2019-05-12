import SignalStrength from './SignalStrength';

/**
 * dBm is a negative number where:
 * -30 dBm is the maximum achievable signal strength. Heuristic show -42 is still an amazing, but realistic signal strength.
 * -90 dBm is unusable and approaching or drowning in the noise floor. Any functionality is highly unlikely.
 * @param {*} dBm
 * @return {SignalStrength}
 */
const DBMToSignalStrength = (dBm) => {
  if ((typeof dBm !== 'string' && typeof dBm !== 'number') || dBm === '') {
    return SignalStrength.DISCONNECTED;
  }

  const num = Number.isFinite(dBm) ? dBm : Number(dBm);

  if (num >= -46) {
    return SignalStrength.EXCELLENT;
  }
  if (num >= -60) {
    return SignalStrength.GREAT;
  }
  if (num >= -72) {
    return SignalStrength.OKAY;
  }
  if (num >= -80) {
    return SignalStrength.WEAK;
  }
  if (num >= -90) {
    return SignalStrength.UNUSABLE;
  }
  return SignalStrength.DISCONNECTED;
};

export default DBMToSignalStrength;
