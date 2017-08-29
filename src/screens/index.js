import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';

import HomeScreen from './Home';
import MeScreen from './Me';
import CustomerScreen from './Customer';
import OfferScreen from './Offer';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('example.MeScreen', () => MeScreen);
  Navigation.registerComponent('example.CustomerScreen', () => CustomerScreen);
  Navigation.registerComponent('example.OfferScreen', () => OfferScreen);
}
export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}