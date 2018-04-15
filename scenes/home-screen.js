import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HydrationProgress from '../components/hydration-progress';
import HydrationPercentage from '../components/hydration-percentage';
import SplashScreen from '../components/splash-screen';
import SetupContainer from '../containers/setup-container';
import GoalProgressBackground from '../components/goal-progress-background';
import PrimaryButton from '../components/primary-button'
import HollowButton from '../components/hollow-button'
import ButtonText from '../components/button-text'
import Icon from '@expo/vector-icons/Octicons';
import { black, white } from '../helpers/colors'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  
  componentWillMount() {
    this.props.loadSettings()
  }

  handleDrinkButtonPress = () => {
    const amount = this.props.drankToday + 330
    this.props.setDrankToday(amount, this.props.currentDay)
  }


  render() {
    const { navigate } = this.props.navigation
    const { storeInitiated, initialSetup, drankToday } = this.props
    const dailyGoal = parseInt(this.props.dailyGoal)

    if (storeInitiated) {
      if (initialSetup) {
        return (
          <SetupContainer />
        )
      } else {
        return (
          <View style={styles.container}>
            <GoalProgressBackground drankToday={drankToday} dailyGoal={dailyGoal}/>
            <View style={styles.settingsButton}>
              <HollowButton
                onPress={() =>
                  navigate('Settings')
                }
              >
                <Icon name="gear" color={black} size={32} />
              </HollowButton>
            </View>
            <View style={styles.contentWrapper}>
              <HydrationPercentage drankToday={drankToday} goal={dailyGoal} />
              <HydrationProgress drankToday={drankToday} goal={dailyGoal} />
              <View style={styles.drinkButton}>
                <PrimaryButton
                  onPress={this.handleDrinkButtonPress}
                >
                  <ButtonText>Drink 330ML</ButtonText>
                </PrimaryButton>
              </View>
            </View>
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
    height: '100%',
    backgroundColor: white
  },
  contentWrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  settingsButton: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 40,
    padding: 20
  },
  drinkButton: {
    marginTop: 60
  }
});  
