import React, {Component} from 'react';
import {
  View,
  Text
}from 'react-native';
export default class HomeScreen extends Component {
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
        <Text>首页</Text>
      </View>
    )
  }
}