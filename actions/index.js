export const setDailyGoal = goal => ({
  type: 'SET_DAILY_GOAL',
  goal
})

export const setStoreInitiated = ()  => ({
  type: 'SET_STORE_INITIATED'
})

export const disableInitialSetup = () => ({
  type: 'DISABLE_INITIAL_SETUP'
})

export const setDrankToday = amount => ({
  type: 'SET_DRANK_TODAY',
  amount
})

export const startNewDayWithAmount = (dayKey, amount) => ({
  type: 'START_NEW_DAY_WITH_AMOUNT',
  dayKey,
  amount
})
