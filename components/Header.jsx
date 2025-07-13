import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {DRAWER_ICON, ScreenInfo} from '../screens';

import * as Res from '../resources';

export const Header = props => {
  const route = useRoute();

  let currentScreenInfo = ScreenInfo[route.name];
  let shouldRenderDrawerIcon = false;
  let drawerIconType = DRAWER_ICON.NONE;

  if (currentScreenInfo) {
    shouldRenderDrawerIcon = currentScreenInfo.showDrawerIcon;
    drawerIconType = currentScreenInfo.drawerIconStyle;
  } else {
    console.log('** DEBUG ** ScreenInfo not defined for screen: ', route.name);
  }

  function getDrawerIcon(iconType) {
    switch (iconType) {
      case DRAWER_ICON.NONE:
        return;
      case DRAWER_ICON.MENU:
        return (
          <Image
            source={require('../resources/images/HamburgerIcon.png')}
            style={headerStyles.drawerIcon}
          />
        );
      case DRAWER_ICON.BACK_ARROW:
        return (
          <Image
            source={require('../resources/images/backArrow.png')}
            style={headerStyles.drawerIcon}
          />
        );
      default:
        return;
    }
  }

  function getDrawerIconBehaviour(iconType) {
    switch (iconType) {
      case DRAWER_ICON.NONE:
        return undefined;
      case DRAWER_ICON.MENU:
        return () => props.navigation.openDrawer();
      case DRAWER_ICON.BACK_ARROW:
        if (props.navigation.canGoBack()) {
          return () => props.navigation.goBack();
        } else {
          return () => props.navigation.navigate('AppIntro');
        }
      default:
        return undefined;
    }
  }

  return (
    <SafeAreaView style={headerStyles.header}>
      <View>
        {shouldRenderDrawerIcon && (
          <TouchableOpacity onPress={getDrawerIconBehaviour(drawerIconType)}>
            {getDrawerIcon(drawerIconType)}
          </TouchableOpacity>
        )}
      </View>
      <View style={headerStyles.headerTextContainer}>
        <Text style={headerStyles.headerText}>
          {props.text || Res.SHORT_APP_NAME}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: Res.COMPONENT_COLOR.PRIMARY,
    height: 75,
    flexDirection: 'row',
  },
  headerTextContainer: {
    marginTop:20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  drawerIcon: {
    marginTop:25,
    width: 50,
    height: 50,
    position: 'absolute',
    tintColor: Res.COMPONENT_COLOR.SECONDARY,
  },
});
