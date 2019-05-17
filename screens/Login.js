import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Button, TextInput, FormInput } from 'react-native';

const VALID_EMAIL = "test";
const VALID_PASSWORD = "test";

export default class Login extends React.Component {
  state = {
  email: VALID_EMAIL,
  password: VALID_PASSWORD,
  errors: [],
  loading: false,
}

handleLogin() {
  const { navigation } = this.props;
  const { email, password } = this.state;
  const errors = [];

  Keyboard.dismiss();
  this.setState({ loading: true });

  // check with backend API or with some static data
  if (email !== VALID_EMAIL) {
    errors.push('email');
  }
  if (password !== VALID_PASSWORD) {
    errors.push('password');
  }

  this.setState({ errors, loading: false });

  if (!errors.length) {
    navigation.navigate("Browse");
  }
}

render() {
  const { navigation } = this.props;
  const { loading, errors } = this.state;
  const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

    return (
      <View style={styles.login}>
        <Text>Login</Text>
        <TextInput
          id='email'
          placeholder='Enter Your Email'
          ref={(input) => {_email = input;}}/>
          <TextInput
            id='password'
            placeholder='Enter Your Password'
            ref={(input) => {_password = input;}}/>
        <Button color="#333333"
          title= "ENTER"
          onPress={this.handleLoginSubmission} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
 }
})
