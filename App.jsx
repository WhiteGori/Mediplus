import 'react-native-gesture-handler';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';

requestMultiple([PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION]);

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Screens from './screens';
import {Header} from './components';
import * as Res from './resources';
import * as Backend from './backend';

const Drawer = createDrawerNavigator();

export let userID;

const App = () => {
  userID = Backend.createUser('admin', 'admin', Backend.USER_TYPES.USER);

  function GetScreenOptions(info) {
    if (!info.showInDrawer) {
      return {
        drawerItemStyle: {
          height: 0,
        },
      };
    } else {
      return {
        drawerLabel: info.nameToShow,
      };
    }
  }

  function RenderScreens() {
    let screensArray = [];
    for (let screenID in Screens.ScreenRefByID) {
      let info = Screens.ScreenInfo[Screens.ScreenRefByID[screenID]];
      screensArray.push(
        <Drawer.Screen
          key={screenID}
          name={info.name}
          component={info.component}
          options={GetScreenOptions(info)}
        />,
      );
    }
    return screensArray;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="AppIntro"
        screenOptions={{
          drawerStyle: {
            backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
            width: 240,
          },
          drawerLabelStyle: Res.CommonStyles.texts.paragraph,
          drawerActiveTintColor: Res.COMPONENT_COLOR.PRIMARY,
          drawerItemStyle: {
            backgroundColor: Res.COMPONENT_COLOR.SECONDARY,
            marginBottom: 30,
          },
          header: props => <Header {...props} />,
        }}>
        {RenderScreens()}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
