import React, { Component } from 'react';
import { Text } from 'react-native';

class HydrationProgress extends Component {
  prettyPrintAmount = (amount) => {
    return amount < 1000 ? `${amount} ML` : `${amount / 1000} L`
  }

  render() {
    const { drankToday } = this.props

    return (
      <Text>You drank {this.prettyPrintAmount(drankToday)} today!</Text>
    );
  }
}

export default HydrationProgress;
