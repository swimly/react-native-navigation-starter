import { Navigation } from 'react-native-navigation';

import HomeScreen from './Home';
import MeScreen from './Me';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('example.MeScreen', () => MeScreen);
}