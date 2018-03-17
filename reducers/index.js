import { combineReducers } from 'redux';
import settings from './settings';
import dailyProgress from './daily-progress';

export default combineReducers({
  settings,
  dailyProgress
})
