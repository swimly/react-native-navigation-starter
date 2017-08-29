import React, {Component} from 'react';
import {
  View,
  Text
}from 'react-native';
export default class CustomerScreen extends Component {
  static navigatorStyle = {
    navBarTextColor: '#666',
    navBarBackgroundColor: '#FBFBFB',
    statusBarColor:'#FBFBFB',
    topBarElevationShadowEnabled: false,
    navBarTitleTextCentered: true,
    statusBarTextColorScheme: 'dark'
  }
  render () {
    return (
      <View>
        <Text>客户</Text>
      </View>
    )
  }
}