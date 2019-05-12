import SignalStrength from '../SignalStrength';
import DBMToSignalStrength from '../DBMToSignalStrength';

test('DBMToSignalStrength should match exepcted herustics', () => {
  expect(DBMToSignalStrength(-30)).toBe(SignalStrength.EXCELLENT);
  expect(DBMToSignalStrength(-42)).toBe(SignalStrength.EXCELLENT);
  expect(DBMToSignalStrength(-46)).toBe(SignalStrength.EXCELLENT);
  expect(DBMToSignalStrength(-47)).toBe(SignalStrength.GREAT);
  expect(DBMToSignalStrength(-60)).toBe(SignalStrength.GREAT);
  expect(DBMToSignalStrength(-61)).toBe(SignalStrength.OKAY);
  expect(DBMToSignalStrength(-72)).toBe(SignalStrength.OKAY);
  expect(DBMToSignalStrength(-80)).toBe(SignalStrength.WEAK);
  expect(DBMToSignalStrength(-81)).toBe(SignalStrength.UNUSABLE);
  expect(DBMToSignalStrength(-90)).toBe(SignalStrength.UNUSABLE);
  expect(DBMToSignalStrength(-91)).toBe(SignalStrength.DISCONNECTED);
});

test('DBMToSignalStrength should handle out of scope values', () => {
  expect(DBMToSignalStrength(1000)).toBe(SignalStrength.EXCELLENT);
  expect(DBMToSignalStrength(-1000)).toBe(SignalStrength.DISCONNECTED);
});

test('DBMToSignalStrength should handle edge cases gracefully', () => {
  expect(DBMToSignalStrength([])).toBe(SignalStrength.DISCONNECTED);
  expect(DBMToSignalStrength({})).toBe(SignalStrength.DISCONNECTED);
  expect(DBMToSignalStrength('')).toBe(SignalStrength.DISCONNECTED);
  expect(DBMToSignalStrength()).toBe(SignalStrength.DISCONNECTED);
});
