import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Button, TextInput, FormInput } from 'react-native';

const VALID_EMAIL = "test";
const VALID_PASSWORD = "test";

export default class Login extends React.Component {
  state = {
  email: VALID_EMAIL,
  password: VALID_PASSWORD,
  }

  _name = null;

  render(props) {
    return (
      <View>
        <Text>Login</Text>
        <TextInput
          id='name'
          placeholder='Enter Your Name'
          ref={(input) => {_name = input;}}/>
        <Button color="#333333"
          title= "ENTER"
          onPress={this.handleLoginSubmission} />
      </View>
    )
  }
}
