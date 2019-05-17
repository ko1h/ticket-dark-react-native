import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Welcome from './src/components/Welcome';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Welcome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
  }
  },
{
    initialRouteName: 'Welcome',
})  ;

export default createAppContainer(AppNavigator);
