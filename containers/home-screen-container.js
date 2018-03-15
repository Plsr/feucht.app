import { connect } from 'react-redux';
import { setDailyGoal, setStoreInitiated } from '../actions'; 
import { STORAGE_KEY_GOAL } from '../helpers/constants';
import { AsyncStorage } from 'react-native';
import HomeScreen from '../scenes/home-screen';

const mapStateToProps = state => ({
  dailyGoal: state.settings.dailyGoal,
  storeInitiated: state.settings.storeInitiated
})

const mapDispatchToProps = dispatch => ({
  loadSettings: () => setupInitialStore(dispatch)
})

setupInitialStore = (dispatch) => {
  readFromAsyncStore(dispatch)
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
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
