import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/logo.png';

export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>REACT NATIVE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
});
