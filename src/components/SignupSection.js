import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
export default class SignupSection extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Create Account</Text>
        <Text style={styles.text}>Forgot Password?</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
