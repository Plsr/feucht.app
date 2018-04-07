import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { shallow } from 'enzyme'
import PrimaryButton from '../components/primary-button'

describe('PrimaryButton', () => {
  let props
  let renderedPrimaryButton

  const primaryButton = () => {
    if (!renderedPrimaryButton) {
      renderedPrimaryButton = shallow(<PrimaryButton {...props} />)
    }
    return renderedPrimaryButton
  }

  beforeEach(() => {
    props = {
      onPress: () => {},
      children: <Text>Test</Text>
    }
    renderedPrimaryButton = undefined
  })

  it('Always renders a TouchableOpcaity', () => {
    expect(primaryButton().is(TouchableOpacity)).toBe(true) 
  })

  it('Renders the Children passed as props', () => {
    expect(primaryButton().prop('children')).toEqual(props.children) 
  })

  it('Passes the onPress prop on to TouchableOpacitys onPress', () => {
    expect(primaryButton().prop('onPress')).toEqual(props.onPress) 
  })

})
