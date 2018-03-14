import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HydrationProgress from '../components/hydration-progress';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drankToday: 0 }
  }

  increaseDrankToday = (amount) => {
    this.setState((prevState) => {
      return { drankToday: prevState.drankToday + amount }
    })
  }

  handleDrinkButtonPress = () => this.increaseDrankToday(330)

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Feucht.app</Text>
        <HydrationProgress drankToday={this.state.drankToday} />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83AF9B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});  
