import { Navigation } from 'react-native-navigation';
import {Platform} from 'react-native';
import { registerScreens, registerScreenVisibilityListener } from './screens/index';

registerScreens(); // this is where you register all of your app's screens
registerScreenVisibilityListener();
// start the app
const tabs = [
  {
    label: '首页',
    screen: 'example.HomeScreen', // this is a registered name for a screen
    icon: require('./assets/images/nav1.png'),
    selectedIcon: require('./assets/images/nav1_active.png'), // iOS only
    titleImage: require('./assets/images/logo.png'),
    title: '首页'
  },
  {
    label: '客户管理',
    screen: 'example.CustomerScreen',
    icon: require('./assets/images/nav2.png'),
    selectedIcon: require('./assets/images/nav2_active.png'), // iOS only
    title: '客户管理'
  },
  {
    label: '车险报价',
    screen: 'example.OfferScreen',
    icon: require('./assets/images/nav3.png'),
    selectedIcon: require('./assets/images/nav3_active.png'), // iOS only
    title: '车险报价'
  },
  {
    label: '我的',
    screen: 'example.MeScreen',
    icon: require('./assets/images/nav4.png'),
    selectedIcon: require('./assets/images/nav4_active.png'), // iOS only
    title: '我的'
  }
]
Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: {
  },
  appStyle: {
    tabBarBackgroundColor:'#fbfbfb',
    tabBarButtonColor: '#999',
    tabBarSelectedButtonColor: '#EB3D00',
    tabBarTranslucent: false,
  }
});