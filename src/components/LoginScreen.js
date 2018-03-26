import React, {Component} from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import PlatformLogin from "./PlatformLogin";
import {View, StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default class LoginScreen extends Component {
  render() {
    return (
            <Wallpaper>
                <Logo/>
                <Form/>
                <ButtonSubmit/>
                <SignupSection/>
                <PlatformLogin/>
        </Wallpaper>
    );
  }
}
