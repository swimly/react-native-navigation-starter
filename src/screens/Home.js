import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  ToastAndroid
}from 'react-native';
var firstClick = 0;
export default class HomeScreen extends Component {
  static navigatorStyle = {
    statusBarColor:'#FBFBFB',
    statusBarTextColorScheme: 'dark'
  }
  static navigatorButtons = {
    rightButtons: [{
      icon: require('../assets/images/homeRight.png'),
      id: 'message'
    }]
  }
  constructor (props) {
    super(props)
    console.log(this)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }
  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
  }
  handleBack = () => {
    var timestamp = (new Date()).valueOf();
    if (timestamp - firstClick > 2000) {
        firstClick = timestamp;
        ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
        return true;
    } else {
        return false;
    }
  }
  onNavigatorEvent (event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id == 'message') {
        this.props.navigator.push({
          screen: 'example.MessageScreen',
          title: '消息',
          animationType: 'slide-horizontal'
        })
      }
    }
  }
  render () {
    return (
      <ScrollView
      >
        <Text>首页</Text>
      </ScrollView>
    )
  }
}