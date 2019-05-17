import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default class Welcome extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
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
