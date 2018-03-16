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
