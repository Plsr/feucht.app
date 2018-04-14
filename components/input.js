import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { grey, blueishGrey } from '../helpers/colors'

/*
 * Wrapper around the TextInput class.
 *
 * TODO:
 * - allow number keyboard ot be activated
 * - styling
 */
class Input extends Component {
  render() {
    return (
      <TextInput
        value={this.props.value}
        onChangeText={this.props.onChangeText}
        style={styles.input}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: grey,
    backgroundColor: blueishGrey,
    height: 50,
    paddingHorizontal: 10
  }
})

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Input
