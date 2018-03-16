const defaultState = {
  dailyGoal: 2000,
  storeInitiated: false,
  initialSetup: true
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
    case 'DISABLE_INITIAL_SETUP':
      return {
        ...state,
        initialSetup: false
      }
    default:
      return state
  }
}

export default settings
