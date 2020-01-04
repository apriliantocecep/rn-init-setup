import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {app, screens} from '../configs';

// TODO: Setup Navigation here
import AuthLoadingScreen from '../screens/AuthLoading';
import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';

const SwitchNavigator = createSwitchNavigator({
  [screens.AuthLoading]: {
    screen: AuthLoadingScreen,
    path: 'init',
  },
  [screens.Auth]: {
    screen: AuthStackNavigator,
    path: 'auth',
  },
  [screens.App]: {
    screen: AppStackNavigator,
    path: 'app',
  },
});

// App Container
const AppContainer = createAppContainer(SwitchNavigator);

// TODO: Setup deep link here
export default () => {
  const prefix = app.scheme;
  return <AppContainer uriPrefix={prefix} />;
};
