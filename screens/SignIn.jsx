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

export const SignIn = ({
  navigation,
  handleLogin,
  handleLogout,
  email,
  setEmail,
  password,
  setPassword,
  auth,
}) => {

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  React.useEffect(() => {
    if (auth.status === 'succeeded' && auth.user) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
  }, [auth.status, auth.user, navigation]);

  React.useEffect(() => {
    console.log('Auth changed:', auth);
  }, [auth]);
 

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
            <Text style={[Res.CommonStyles.texts.paragraph, {textAlign: 'center'}]}>
              {Res.GetSignInText().description}
            </Text>
          </View>
          <View style={signInStyles.textFieldArea}>
            <View style={signInStyles.textFieldContainer}>
              <TextField
                placeholder={Res.GetSignInText().emailPlaceHolder}
                inputMode="email"
                onChangeText={setEmail}
              />
            </View>
            <View style={signInStyles.textFieldContainer}>
              <TextField
                placeholder={Res.GetSignInText().passwordPlaceHolder}
                inputMode="password"
                onChangeText={setPassword}
              />
            </View>
          </View>
          <View style={signInStyles.buttonArea}>
            <GeneralPurposeButton
              text={Res.GetSignInText().title}
              onPress={() => {
                console.log('Login button pressed');
                handleLogin();
                console.log('Auth state:', auth);
              }}
            />
          </View>
          {auth.status === 'loading' && <Text>Loading...</Text>}
          <Text style={{ color: 'red' }}>
            {auth.status === 'failed' ? (auth.error || 'An error occurred') : ''}
          </Text>

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
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleArea: {
    marginBottom: 20,
    marginTop: '25%',
  },
  textArea: {
    marginBottom: 20,
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
    marginTop: 10,
  },
  paddingArea: {
    flex: 1,
  },
});
