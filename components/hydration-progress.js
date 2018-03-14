import React, { Component } from 'react';
import { Text } from 'react-native';

class HydrationProgress extends Component {
  prettyPrintAmount = (amount) => {
    return amount < 1000 ? `${amount} ML` : `${amount / 1000} L`
  }

  render() {
    const { drankToday, goal } = this.props

    return (
      <Text>You drank {this.prettyPrintAmount(drankToday)} of {this.prettyPrintAmount(goal)} today!</Text>
    );
  }
}

export default HydrationProgress;
