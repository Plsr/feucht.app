import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage, Button } from 'react-native';

class SetupSheet extends Component {
  constructor(props) {
    super(props)

    this.state = { dailyGoal: '2000' }
  }

  render() {
    const { dailyGoal } = this.state
    return(
      <View>
        <Text> Set your daily goal</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({ dailyGoal: text })}
          value={dailyGoal}
        />
        <Button
          title='Save'
          onPress={ () => this.props.setDailyGoal(dailyGoal) }
        />
      </View>
    )
  }
}

export default SetupSheet
