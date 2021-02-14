import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings205014Navigator from '../features/Settings205014/navigator';
import UserProfile205007Navigator from '../features/UserProfile205007/navigator';
import Settings205006Navigator from '../features/Settings205006/navigator';
import Settings205004Navigator from '../features/Settings205004/navigator';
import SignIn2205002Navigator from '../features/SignIn2205002/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings205014: { screen: Settings205014Navigator },
UserProfile205007: { screen: UserProfile205007Navigator },
Settings205006: { screen: Settings205006Navigator },
Settings205004: { screen: Settings205004Navigator },
SignIn2205002: { screen: SignIn2205002Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
