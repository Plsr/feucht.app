const defaultState = {
  drankToday: 0
}

const dailyProgress = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREASE_DRANK_TODAY':
      return {
        ...state,
        drankToday: state.drankToday + action.amount
      }
    default:
      return state
  }
}

export default dailyProgress
