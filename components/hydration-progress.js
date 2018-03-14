import React, { Component } from 'react';
import { Text } from 'react-native';

class HydrationProgress extends Component {
  render() {
    return (
      <Text>You drank {this.props.drankToday} today!</Text>
    );
  }
}

export default HydrationProgress;
