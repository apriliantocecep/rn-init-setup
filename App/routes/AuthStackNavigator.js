import {createStackNavigator} from 'react-navigation-stack';
import {screens} from '../configs';

// screens
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

const AuthStacknavigator = createStackNavigator({
  [screens.Login]: {
    screen: LoginScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Login',
    }),
    path: 'login',
  },
  [screens.Register]: {
    screen: RegisterScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Register',
    }),
    path: 'register',
  },
});

export default AuthStacknavigator;
