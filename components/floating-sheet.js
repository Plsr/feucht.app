import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { white, shadowColor } from '../helpers/colors'

class FloatingSheet extends Component {
  render() {
    return (
      <View style={styles.sheet}>
        { this.props.children }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: white,
    padding: 20,
    shadowColor: shadowColor,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 11,
    borderRadius: 4,
    width: '100%'
  } 
})

FloatingSheet.propTypes = {
  children: PropTypes.node.isRequired
}

export default FloatingSheet
