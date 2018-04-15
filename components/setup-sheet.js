import React, { Component } from 'react';
import { View, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import FloatingSheet from './floating-sheet'
import InputLabel from './input-label'
import Input from './input'
import InputWithUnit from './input-with-unit'
import { waterColor } from '../helpers/colors'
import PrimaryButton from './primary-button'
import ButtonText from './button-text'

class SetupSheet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dailyGoal: '2000',
      buttonValue: '2000',
      buttonDisabled: false
    }
  }

  handleTextChange = text => {
    if(
      text.length === 0 ||
      text.length > 5 ||
      parseInt(text) === 0 ||
      !this.isNumeric(text)
    ) {
      this.setState({
        buttonValue: text,
        buttonDisabled: true
      })
    } else {
      this.setState({
        buttonValue: text,
        buttonDisabled: false,
        dailyGoal: text
      })
    }
  }

  isNumeric = candidate => /^\d+$/.test(candidate)

  render() {
    const { dailyGoal, buttonDisabled, buttonValue } = this.state
    return(
      <KeyboardAvoidingView style={styles.background} behavior="padding">
        <FloatingSheet>
          <InputLabel> Set your daily goal</InputLabel>
          <InputWithUnit
            unit='ML'
            onChangeText={(text) => this.handleTextChange(text)}
            keyboardType="numeric"
            returnKeyType="done"
            value={buttonValue}
          />
          <View style={styles.buttonWrapper}>
            <PrimaryButton
              onPress={ () => this.props.setDailyGoal(dailyGoal) }
              disabled={buttonDisabled}
            >
              <ButtonText>Save</ButtonText>
            </PrimaryButton>
          </View>
        </FloatingSheet>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: waterColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
  buttonWrapper: {
    marginTop: 60
  }
})

export default SetupSheet
