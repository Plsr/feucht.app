import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import BoldText from './bold-text'

class InputLabel extends Component {
  render() {
    return (
      <BoldText style={{ marginBottom: 10 }}>
        {this.props.children}
      </BoldText>
    )
  }
}

InputLabel.propTypes = {
  children: PropTypes.node.isRequired
}

export default InputLabel
