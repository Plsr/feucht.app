import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, StyleSheet, Dimensions } from 'react-native';
import { waterColor } from '../helpers/colors'

class GoalProgressBackground extends Component {
  percentOfGoalReached = (drank, goal) => {
    return parseFloat((drank / goal) * 100).toFixed(0)
  }

  render () {
    const { drankToday, dailyGoal } = this.props
    const calculatedHeight = this.percentOfGoalReached(drankToday, dailyGoal)


    return (
      <View style={[ styles.progress, { height: `${calculatedHeight}%` }]} />
    )
  }
}

const styles = StyleSheet.create({
  progress: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: waterColor
  }
})

GoalProgressBackground.propTypes = {
  drankToday: PropTypes.number.isRequired,
  dailyGoal: PropTypes.number.isRequired
}

export default GoalProgressBackground
