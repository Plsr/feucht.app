const defaultState = {
  dailyGoal: 2000,
  storeInitiated: false
}

const settings = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_DAILY_GOAL':
      return {
        ...state,
        dailyGoal: action.goal
      }
    case 'SET_STORE_INITIATED':
      return {
        ...state,
        storeInitiated: true
      }
    default:
      return state
  }
}

export default settings
