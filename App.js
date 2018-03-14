import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import HomeScreen from './containers/home-screen-container.js';
import SettingsScreen from './containers/settings-screen-container.js';

const RootStack = StackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen }
})

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}

export default App;
