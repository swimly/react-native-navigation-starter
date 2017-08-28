import Navigation from 'react-native-navigation';

Navigation.events().onAppLaunched(() => {
  Navigation.setRoot({
    container: {
      name: 'navigation.playground.WelcomeScreen'
    }
  });
});