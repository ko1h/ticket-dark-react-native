import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Welcome from './screens/Welcome';

class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Navigation/>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
  }
}, {
    initialRouteName: 'Welcome',
});

export default createAppContainer(AppNavigator);
