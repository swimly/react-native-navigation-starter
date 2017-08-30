import React, {Component} from 'react';
import {
  View,
  Text
}from 'react-native';
export default class OfferScreen extends Component {
  static navigatorStyle = {
    statusBarColor:'#FBFBFB',
    statusBarTextColorScheme: 'dark'
  }
  render () {
    return (
      <View>
        <Text>车险报价</Text>
      </View>
    )
  }
}