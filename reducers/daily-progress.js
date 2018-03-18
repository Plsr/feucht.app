import { dayKeyForDate } from '../helpers/date-helper';

const defaultState = {
  drankToday: 0,
  currentDay: dayKeyForDate(new Date())
}

const dailyProgress = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_DRANK_TODAY':
      return {
        ...state,
        drankToday: action.amount
      }
    case 'START_NEW_DAY_WITH_AMOUNT':
      return {
        ...state,
        drankToday: action.amount,
        currentDay: action.dayKey
      }
    default:
      return state
  }
}

export default dailyProgress
