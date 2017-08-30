import React, {Component} from 'react';
import {
  View,
  Text
}from 'react-native';
export default class MeScreen extends Component {
  static navigatorStyle = {
    navBarTextColor: '#fff',
    navBarBackgroundColor: '#EB3D00',
    statusBarColor:'#EB3D00'
  }
  render () {
    return (
      <View>
        <Text>首页</Text>
      </View>
    )
  }
}