import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  ToastAndroid
}from 'react-native';
var firstClick = 0;
export default class HomeScreen extends Component {
  static navigatorStyle = {
    navBarTextColor: '#666',
    navBarBackgroundColor: '#FBFBFB',
    statusBarColor:'#FBFBFB',
    topBarElevationShadowEnabled: false,
    navBarTitleTextCentered: true,
    statusBarTextColorScheme: 'dark'
  }
  constructor (props) {
    super(props)
    console.log(this)
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
  jumpMessage () {
    this.props.navigator.push({
      screen: 'example.MessageScreen',
      title: '消息',
      animationType: 'slide_in_left'
    })
  }
  render () {
    return (
      <View>
        <TouchableOpacity
          onPress={()=>this.jumpMessage()}
        >
          <Text>消息</Text>
        </TouchableOpacity>
      </View>
    )
  }
}