import React, { Component} from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { white } from '../helpers/colors'

class ButtonText extends Component {
  render() {
    const { children } = this.props
    return (
      <Text style={styles.text}>
        { children }
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: white,
    fontWeight: '700',
    fontSize: 20
  }
})

export default ButtonText;
