import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { black } from '../helpers/colors'

class HydrationPercentage extends Component {
  render() {
    const { drankToday, goal } = this.props
    const goalReachPercentage = (drankToday / goal) * 100
    const fixedPercentage = parseFloat(goalReachPercentage).toFixed(0)

    return (
      <Text style={styles.textStyles}>{fixedPercentage}%</Text>
    )
  }
}

HydrationPercentage.propTypes = {
  drankToday: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 100,
    fontWeight: '700',
    color: black,
    width: '100%',
    textAlign: 'left',
    lineHeight: 100
  }
})


export default HydrationPercentage;
