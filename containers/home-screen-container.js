import { connect } from 'react-redux';
import { setDailyGoal, setStoreInitiated, disableInitialSetup, startNewDayWithAmount, setDrankToday } from '../actions'; 
import { STORAGE_KEY_GOAL, STORAGE_KEY_DAILY_PROGRESS } from '../helpers/constants';
import { dayKeyForDate, newDayStarted } from '../helpers/date-helper'
import { AsyncStorage } from 'react-native';
import HomeScreen from '../scenes/home-screen';

const mapStateToProps = state => ({
  dailyGoal: state.settings.dailyGoal,
  storeInitiated: state.settings.storeInitiated,
  initialSetup: state.settings.initialSetup,
  drankToday: state.dailyProgress.drankToday,
  currentDay: state.dailyProgress.currentDay
})

const mapDispatchToProps = dispatch => ({
  loadSettings: () => setupInitialStore(dispatch),
  setDrankToday: (amount, day) => handleTodayAmountIncrease(amount, day, dispatch)
})

setupInitialStore = (dispatch) => {
  readFromAsyncStore(dispatch)
}

handleTodayAmountIncrease = (amount, day, dispatch) => {
  if (newDayStarted(day)) {
    const dayKey = dayKeyForDate(new Date())
    writeDailyProgressToAsyncStorage(dayKey, amount).then(() => {
      dispatch(startNewDayWithAmount(dayKey, amount))
    })
  } else {
    writeDailyProgressToAsyncStorage(day, amount).then(() => {
      dispatch(setDrankToday(amount))
    })
  }
}

writeDailyProgressToAsyncStorage = async (day, amount) => {
  const storageString = JSON.stringify('currentDay': day, 'drankToday': amount)
  try {
    await AsyncStorage.setItem(STORAGE_KEY_DAILY_PROGRESS, storageString)
  } catch (err) {
    console.log(error)
  }
}


readFromAsyncStore = (dispatch) => {
  AsyncStorage.getAllKeys((err, keys) => {
    if (err) { return null }

    AsyncStorage.multiGet(keys, (err, stores) => {
      if (err) { return null }

      let storeFromAsyncStore = {}
      stores.forEach((store) => {
        storeFromAsyncStore[store[0]] = store[1]
      })
      writeAsyncStoreToReduxStore(storeFromAsyncStore, dispatch)
    })
  })
}

writeAsyncStoreToReduxStore = (asyncStore, dispatch) => {
  const dailyGoal = asyncStore[STORAGE_KEY_GOAL]
  dispatch(setDailyGoal(dailyGoal))
  dispatch(setStoreInitiated())

  if (dailyGoal) {
    dispatch(disableInitialSetup())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
