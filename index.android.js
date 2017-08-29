import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens/index';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.HomeScreen', // this is a registered name for a screen
      icon: require('./src/assets/images/nav1.png'),
      selectedIcon: require('./src/assets/images/nav1_active.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.MeScreen',
      icon: require('./src/assets/images/nav4.png'),
      selectedIcon: require('./src/assets/images/nav4_active.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});