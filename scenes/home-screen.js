import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HydrationProgress from '../components/hydration-progress';
import HydrationPercentage from '../components/hydration-percentage';
import SplashScreen from '../components/splash-screen';
import SetupContainer from '../containers/setup-container';
import GoalProgressBackground from '../components/goal-progress-background';

export default class HomeScreen extends React.Component {

  componentWillMount() {
    this.props.loadSettings()
  }

  handleDrinkButtonPress = () => {
    const amount = this.props.drankToday + 330
    this.props.setDrankToday(amount, this.props.currentDay)
  }


  render() {
    const { navigate } = this.props.navigation
    const { dailyGoal, storeInitiated, initialSetup, drankToday } = this.props

    if (storeInitiated) {
      if (initialSetup) {
        return (
          <SetupContainer />
        )
      } else {
        return (
          <View style={styles.container}>
            <GoalProgressBackground drankToday={drankToday} dailyGoal={parseInt(dailyGoal)}/>
            <HydrationProgress drankToday={drankToday} goal={dailyGoal} />
            <HydrationPercentage drankToday={drankToday} goal={dailyGoal} />
            <Button
              onPress={this.handleDrinkButtonPress}
              title="Drink 330ML"
              color="#FE4365"
              acessibilityLabel="Drink 330ML"
            />
            <Button
              onPress={() =>
                navigate('Settings')
              }
              title='Settings'
            />
          </View>
        );
      }
    } else {
      return <SplashScreen />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83AF9B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});  
