import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'
import Input from './input'
import BoldText from './bold-text'

class InputWithUnit extends Component {
  render() {
    const { unit, ...rest } = this.props
    return (
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <Input {...rest} />
        </View>
        <View style={styles.unitWrapper}>
          <BoldText>{unit}</BoldText>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputWrapper: {
    flex: 1,
    marginBottom: 1
  },
  unitWrapper: {
    paddingLeft: 20
  }
})

InputWithUnit.propTypes = {
  unit: PropTypes.string.isRequired
}

export default InputWithUnit
