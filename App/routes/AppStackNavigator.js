import {createStackNavigator} from 'react-navigation-stack';
import {screens} from '../configs';

// screens
import HomeScreen from '../screens/Home';

const AppStacknavigator = createStackNavigator({
  [screens.Home]: {
    screen: HomeScreen,
    path: 'home',
  },
});

export default AppStacknavigator;
