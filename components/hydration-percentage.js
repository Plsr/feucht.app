import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class HydrationPercentage extends Component {
  render() {
    const { drankToday, goal } = this.props
    const goalReachPercentage = (drankToday / goal) * 100

    return (
      <Text> {goalReachPercentage}% </Text>
    )
  }
}

HydrationPercentage.propTypes = {
  drankToday: PropTypes.number,
  dailyGoal: PropTypes.number
}


export default HydrationPercentage;
