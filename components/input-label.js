import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { black } from '../helpers/colors'

class InputLabel extends Component {
  render() {
    return (
      <Text style={styles.label}>
        {this.props.children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: black,
    marginBottom: 10
  }
})

InputLabel.propTypes = {
  children: PropTypes.node.isRequired
}

export default InputLabel
