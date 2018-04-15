import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage, Button } from 'react-native';
import FloatingSheet from './floating-sheet'
import InputLabel from './input-label'
import Input from './input'
import InputWithUnit from './input-with-unit'

class SetupSheet extends Component {
  constructor(props) {
    super(props)

    this.state = { dailyGoal: '2000' }
  }

  render() {
    const { dailyGoal } = this.state
    return(
      <FloatingSheet>
        <InputLabel> Set your daily goal</InputLabel>
        <InputWithUnit
          unit='ML'
          onChangeText={(text) => this.setState({ dailyGoal: text })}
          value={dailyGoal}
        />
        <Button
          title='Save'
          onPress={ () => this.props.setDailyGoal(dailyGoal) }
        />
      </FloatingSheet>
    )
  }
}

export default SetupSheet
