import React from 'react'
import { View } from 'react-native'
import { shallow } from 'enzyme'
import GoalProgressBackground from '../components/goal-progress-background'

describe('GoalProgressBackground', () => {
  let props
  let renderedGoalProgressBackground

  const goalProgressBackground = () => {
    if (!renderedGoalProgressBackground) {
      renderedGoalProgressBackground = shallow(<GoalProgressBackground {...props} />)
    }
    return renderedGoalProgressBackground
  }

  beforeEach(() => {
    props = {
      drankToday: 300,
      dailyGoal: 2000
    }
    renderedGoalProgressBackground = undefined
  })

  it('always renders a View', () => {
    expect(goalProgressBackground().is(View)).toBe(true) 
  })

  it('represents the currently consumed amount in its height', () => {
    const expectedHeight = goalProgressBackground().instance().percentOfGoalReached(props.drankToday, props.dailyGoal)
    expect(goalProgressBackground().prop('style')).toContainEqual({height: `${expectedHeight}%` })
  })

  describe('dailyGoal is 0', () => {
    beforeEach(() => {
      props.dailyGoal = 0
    })

    it('renders a height of 0', () => {
      expect(goalProgressBackground().prop('style')).toContainEqual({height: '0%'}) 
    })
  })

  describe('drankToday is bigger than dailyGoal', () => {
    beforeEach(() => {
      props.drankToday = 4000
    })
    it('does not return a height above 100%', () => {
      expect(goalProgressBackground().prop('style')).toContainEqual({height: '100%'}) 
    })
  })
})
