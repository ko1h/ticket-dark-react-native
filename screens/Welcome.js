import React, { Component } from 'react'
import { Button, StyleSheet, ScrollView, View, Text} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';


export default class Welcome extends React.Component {

  render() {
    return (
      <View style = {styles.container}>
        <Text>Ticket Dark.</Text>

        <Button color="#FFFFFF"
            title="Login"
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Login' })
                ],
              }))
            }}
          />
          <Button color="#FFFFFF"
              title="Sign In"
              onPress={() => {
                this.props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Sign In' })
                  ],
                }))
              }}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    width: '40%'
  }
})
