import React, { Component } from 'react';
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native';

const STORAGE_KEY_GOAL = '@FeuchtStore:dailyGoal'

class SettingsScreen extends Component {
  constructor(props) {
    super(props)

    this.state = { dailyGoal: 0 }
  }

  componentWillMount() {
    let dailyGoal = this.getDailyGoalFromStorage()
    dailyGoal.then((val) => {
      console.log(val)
      this.setState({
        dailyGoal: val
      })
    })
  }

  getDailyGoalFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_GOAL);
      return value == null ? 0 : value
    } catch (error) {
      return 0
    }
  }

  writeDailyGoalToStorage = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_GOAL, value);
    } catch (error) {
      console.log(error) 
    }
  }

  handleDailyGoalChange = (value) => {
    let dailyGoal = this.writeDailyGoalToStorage(value)
    dailyGoal.then(() => {
      this.setState({ dailyGoal: value })
    })
  }

  render() {
    return (
      <View>
        <Text> Welcome to the Settings </Text>
        <Text> Your goal</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.handleDailyGoalChange(text)}
          value={this.state.dailyGoal.toString()}
        />
      </View>
    )
  }
}

export default SettingsScreen;
