import 'react-native-gesture-handler';
import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
requestMultiple([PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION]);

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider, useSelector } from 'react-redux';

import store from './Redux/Store';
import * as Screens from './screens';
import { Header } from './components';
import * as Res from './resources';
import authProps from './resources/authProps';
import { navigationRef } from './navigationRef';

const Drawer = createDrawerNavigator();

export let userID;

function AppScreen() {
  const auth = useSelector(state => state.auth);
  const sharedProps = authProps();

  const allowedPublicScreens = ["AppIntro", "SignIn", "SignUp"];
  const isLoggedIn = !!auth.user;

  function GetScreenOptions(info) {
    if (!info.showInDrawer) {
      return { drawerItemStyle: { height: 0 } };
    }
    return { drawerLabel: info.nameToShow };
  }

  function RenderScreens() {
    let screensArray = [];
    const isLoggedIn = !!auth.user;

    for (let screenID in Screens.ScreenRefByID) {
      let info = Screens.ScreenInfo[Screens.ScreenRefByID[screenID]];

      // 🔐 filtro de autenticación correcto
      if (!isLoggedIn && !info.isPublic) continue;
      if (isLoggedIn && info.isPublic) continue;

      screensArray.push(
        <Drawer.Screen
          key={screenID}
          name={info.name}
          options={GetScreenOptions(info)}
        >
          {props => <info.component {...props} {...sharedProps} />}
        </Drawer.Screen>
      );
    }

    return screensArray;
  }


  React.useEffect(() => {
    if (!navigationRef.current) return;

    const currentRoute =
      navigationRef.current.getCurrentRoute()?.name;

    if (!auth.user && currentRoute !== "AppIntro") {
      navigationRef.current.navigate("AppIntro");
    }
  }, [auth.user]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        // Redirigir correctamente al arrancar
        if (!auth.user) {
          navigationRef.current?.navigate("AppIntro");
        }
      }}
    >
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
        }}
      >
        {RenderScreens()}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppScreen />
    </Provider>
  );
}
