import React from 'react';
import renderer from 'react-test-renderer';
import WiFiIndicator from '../WiFiIndicator';
import SignalStrength from '../SignalStrength';
import DBMToSignalStrength from '../DBMToSignalStrength';

test('snapshot #1 matches', () => {
  const tree = renderer
    .create(<WiFiIndicator strength={SignalStrength.EXCELLENT} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('snapshot #2 matches', () => {
  const tree = renderer
    .create(
      <WiFiIndicator
        strength={SignalStrength.GREAT}
        style={{ height: '240px', display: 'block' }}
        className='wifi-icon'
        alt='Awesome WiFi Signal'
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('snapshot #3 matches', () => {
  const tree = renderer
    .create(
      <WiFiIndicator strength={DBMToSignalStrength(-40)} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('snapshot #4 matches', () => {
  const tree = renderer
    .create(
      <WiFiIndicator
        strength={SignalStrength.WEAK}
        statusImages={{
          [SignalStrength.WEAK]: 'demo.png'
        }}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

