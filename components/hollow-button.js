import React, { Component} from 'react';
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import { black } from '../helpers/colors'

class HollowButton extends Component {
  render() {
    const { children, onPress } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

export default HollowButton;
