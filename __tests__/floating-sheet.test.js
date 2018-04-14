import React from 'react'
import { View } from 'react-native'
import { shallow } from 'enzyme'
import FloatingSheet from '../components/floating-sheet'

describe('FloatingSheet', () => {
  let props
  let renderedFloatingSheet

  const floatingSheet = () => {
    if (!renderedFloatingSheet) {
      renderedFloatingSheet = shallow(<FloatingSheet {...props} />)
    }
    return renderedFloatingSheet
  }

  beforeEach(() => {
    props = {
      children: <View />
    }
    renderedFloatingSheet = undefined
  })

  it('always renders a view', () => {
    expect(floatingSheet().is(View)).toBe(true)
  })

  it('always renders the children passed to it', () => {
    expect(floatingSheet().prop('children')).toEqual(props.children)
  })
})
