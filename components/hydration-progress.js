import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { black } from '../helpers/colors'

class HydrationProgress extends Component {
  prettyPrintAmount = (amount) => {
    return amount < 1000 ? `${amount} ML` : `${amount / 1000} L`
  }

  render() {
    const { drankToday, goal } = this.props

    return (
      <Text style={styles.text}>You drank {this.prettyPrintAmount(drankToday)} of {this.prettyPrintAmount(goal)} today!</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    width: '100%',
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 20,
    color: black,
    marginTop: -10
  }
})

export default HydrationProgress;
