import { connect } from 'react-redux';
import { setDailyGoal, disableInitialSetup } from '../actions'; 
import { STORAGE_KEY_GOAL } from '../helpers/constants';
import { AsyncStorage } from 'react-native';
import SetupSheet from '../components/setup-sheet';


const mapDispatchToProps = dispatch => ({
  setDailyGoal: goal => persistDailyGoal(goal, dispatch)
})

const persistDailyGoal = (goal, dispatch) => {
  writeGoalToAsyncStorage(goal).then(() => {
    dispatch(setDailyGoal(goal))
    dispatch(disableInitialSetup())
  })
}


const writeGoalToAsyncStorage = async (goal) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY_GOAL, goal.toString());
  } catch(error) {
    //TODO: Handle Error
    console.log(error)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SetupSheet)
