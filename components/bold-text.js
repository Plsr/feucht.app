import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { black } from '../helpers/colors'

class BoldText extends Component {
  render() {
    const { style } = this.props
    return (
      <Text style={[style, styles.text]}>{this.props.children}</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: black
  }
})


BoldText.propTypes = {
  children: PropTypes.node.isRequired
}

export default BoldText
