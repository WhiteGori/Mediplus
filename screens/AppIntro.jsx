import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import * as Res from '../resources';
import {GeneralPurposeButton} from '../components';

export const AppIntro = ({navigation}) => {
  return (
    <SafeAreaView style={appIntroStyles.background}>
      <Text style={[Res.CommonStyles.texts.title, appIntroStyles.title]}>
        {Res.GetAppIntroText().welcome}
      </Text>
      <Text style={[Res.CommonStyles.texts.paragraph, appIntroStyles.text]}>
        {Res.GetAppIntroText().appDescription}
      </Text>
      <View style={appIntroStyles.buttonRow}>
        <GeneralPurposeButton
          containerStyle={appIntroStyles.button}
          text={Res.GetButtonText().signIn}
          onPress={() => navigation.navigate('SignIn')}
        />
        <GeneralPurposeButton
          containerStyle={appIntroStyles.button}
          text={Res.GetButtonText().signUp}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </SafeAreaView>
  );
};

const appIntroStyles = StyleSheet.create({
  background: {
    backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    flex: 1,
  },
  text: {
    flex: 3,
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    padding: 10,
  },
});
