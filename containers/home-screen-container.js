import { connect } from 'react-redux';
import HomeScreen from '../scenes/home-screen';

const mapStateToProps = state => ({
  dailyGoal: state.settings.dailyGoal
})

export default connect(
  mapStateToProps
)(HomeScreen)
