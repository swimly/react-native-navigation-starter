import { Navigation } from 'react-native-navigation';

import HomeScreen from './Home';
import MeScreen from './Me';
import MovieScreen from './Movie';
import MusicScreen from './Music';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('example.MeScreen', () => MeScreen);
  Navigation.registerComponent('example.MovieScreen', () => MovieScreen);
  Navigation.registerComponent('example.MusicScreen', () => MusicScreen);
}