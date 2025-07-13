import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import * as Res from '../resources';
import {GeneralPurposeButton, TextField} from '../components';

export const SignIn = ({navigation}) => {
  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <SafeAreaView style={signInStyles.background}>
        <ScrollView
          contentContainerStyle={signInStyles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <View style={signInStyles.titleArea}>
            <Text style={Res.CommonStyles.texts.title}>
              {Res.GetSignInText().title}
            </Text>
          </View>
          <View style={signInStyles.textArea}>
            <Text style={Res.CommonStyles.texts.paragraph}>
              {Res.GetSignInText().description}
            </Text>
          </View>
          <View style={signInStyles.textFieldArea}>
            <View style={signInStyles.textFieldContainer}>
              <TextField
                placeholder={Res.GetSignInText().emailPlaceHolder}
                inputMode="email"
              />
            </View>
            <View style={signInStyles.textFieldContainer}>
              <TextField
                placeholder={Res.GetSignInText().passwordPlaceHolder}
                inputMode="password"
              />
            </View>
          </View>
          <View style={signInStyles.buttonArea}>
            <GeneralPurposeButton
              text={Res.GetSignInText().title}
              onPress={() => {
                // Add logic for sign-in
                navigation.navigate('Home');
              }}
            />
          </View>
          <View style={signInStyles.textArea}>
            <Text
              style={Res.CommonStyles.texts.link}
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              {Res.GetSignInText().signUpShortcut}
            </Text>
          </View>
          <View style={signInStyles.paddingArea} />
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const signInStyles = StyleSheet.create({
  background: {
    backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleArea: {
    marginBottom: 10,
  },
  textArea: {
    marginBottom: 10,
  },
  textFieldArea: {
    justifyContent: 'space-around',
    width: '100%',
  },
  textFieldContainer: {
    paddingVertical: 10,
  },
  buttonArea: {
    width: '100%',
    marginBottom: 10,
  },
  paddingArea: {
    flex: 1,
  },
});
