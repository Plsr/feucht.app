import React, { Component} from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import { accentColor, grey } from '../helpers/colors'

class PrimaryButton extends Component {
  render() {
    const { children, onPress, disabled } = this.props
    const backgroundColor = disabled ? grey : accentColor
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[{backgroundColor}, styles.background]}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    borderRadius: 4,
    paddingHorizontal: 48,
    paddingVertical: 12
  }
})

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

PrimaryButton.defaultProps = {
  disabled: false
}

export default PrimaryButton;
