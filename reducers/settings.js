const defaultState = {
  dailyGoal: 2000
}

const settings = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_DAILY_GOAL':
      return {
        ...state,
        dailyGoal: action.goal
      }
    default:
      return state
  }
}

export default settings
