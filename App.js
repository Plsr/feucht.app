import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './scenes/home-screen.js';
import SettingsScreen from './scenes/settings-screen.js';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen }
})

export default App;
