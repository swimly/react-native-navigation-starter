import React, {Component} from 'react';
import {
  View,
  Text
}from 'react-native';
export default class CustomerScreen extends Component {
  static navigatorStyle = {
    statusBarColor:'#FBFBFB',
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