import { connect } from 'react-redux';
import { setDailyGoal } from  '../actions';
import { AsyncStorage } from 'react-native';
import { STORAGE_KEY_GOAL } from '../helpers/constants'
import SettingsScreen from '../scenes/settings-screen';

const mapStateToProps = state => ({
  dailyGoal: state.settings.dailyGoal
})

const mapDispatchToProps = dispatch => ({
  setDailyGoal: goal => persistNewGoal(goal, dispatch)
})

const persistNewGoal = (goal, dispatch) => {
  writeGoalToAsyncStorage(goal).then(() => {
    dispatch(setDailyGoal(goal))
  })
}

const writeGoalToAsyncStorage = async (goal) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY_GOAL, goal);
  } catch(error) {
    //TODO: Handle Error
    console.log(error)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen)
