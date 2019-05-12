import React, { Component } from 'react';
import propTypes from './propTypes';
import defaults from './defaults';

export default class WiFiIndicator extends Component {
  static propTypes = propTypes;
  static defaultProps = defaults;

  render() {
    const { strength, statusImages, ...rest } = this.props;
    return (
      <img
        src={statusImages[strength]}
        {...rest}
      />
    )
  }
}
