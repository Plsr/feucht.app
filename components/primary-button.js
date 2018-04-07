import React, { Component} from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import { accentColor } from '../helpers/colors'

class PrimaryButton extends Component {
  render() {
    const { children, onPress } = this.props
    return (
      <TouchableOpacity onPress={onPress} style={styles.background}>
        {children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: accentColor,
    borderRadius: 4,
    paddingHorizontal: 48,
    paddingVertical: 12
  }
})

export default PrimaryButton;
