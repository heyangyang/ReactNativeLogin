import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, ImageBackground,Image} from 'react-native';

import bgSrc from '../images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.Wallpaper} source={bgSrc}>
          {this.props.children}
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
    Wallpaper: {
        flex:1,
        width: null,
        height: null,
    },
});
