import React, {Component} from 'react';
//import Dimensions from 'Dimensions';
import {StyleSheet, View, Image} from 'react-native';

import weixinImg from '../images/wechat_login.png';
import weiboImg from '../images/weibo_login.png';


export default class PlatformLogin extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={weixinImg}  style={styles.image} />
                <Image source={weiboImg}  style={styles.image}/>
            </View>
        );
    }
}

//const DEVICE_WIDTH = Dimensions.get('window').width;
//const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    image: {
        width: 60,
        height: 60,
    },
});