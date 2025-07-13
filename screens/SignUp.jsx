import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';

import * as Res from '../resources';
import {GeneralPurposeButton, TextField} from '../components';

export const SignUp = ({navigation}) => {
  const [esFarmacia, setEsFarmacia] = useState(false);
  const handlePressOutside = () => {
    Keyboard.dismiss();
  };
  function checkbox() {
    if (esFarmacia === true) {
      return (
        <TouchableWithoutFeedback onPress={() => setEsFarmacia(!esFarmacia)}>
          <Image
            style={signUpStyles.checkboxFull}
            source={require('../resources/images/checkBoxFull.png')}
          />
        </TouchableWithoutFeedback>
      );
    } else {
      return (
        <TouchableWithoutFeedback onPress={() => setEsFarmacia(!esFarmacia)}>
          <Image
            style={signUpStyles.checkboxEmpty}
            source={require('../resources/images/checkBoxEmpty.png')}
          />
        </TouchableWithoutFeedback>
      );
    }
  }

  function dataFields() {
    if (esFarmacia === true) {
      // TODO agregar estos textos a strings.js
      return (
        <View>
          <View style={signUpStyles.textFieldContainer}>
            <TextField placeholder={'Direccion'} inputMode="text" />
          </View>
          <View style={signUpStyles.textFieldContainer}>
            <TextField placeholder={'Nombre a mostrar'} inputMode="text" />
          </View>
          <View style={signUpStyles.textFieldContainer}>
            <TextField placeholder={'Razon social'} inputMode="text" />
          </View>
          <View style={signUpStyles.textFieldContainer}>
            <TextField placeholder={'Cuit'} inputMode="text" />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={signUpStyles.textFieldContainer}>
            <TextField
              placeholder={Res.GetSignUpText().birthDatePlaceHolder}
              inputMode="text"
            />
          </View>
          <View style={signUpStyles.textFieldContainer}>
            <TextField
              placeholder={Res.GetSignUpText().firstNamePlaceHolder}
              inputMode="text"
            />
          </View>
          <View style={signUpStyles.textFieldContainer}>
            <TextField
              placeholder={Res.GetSignUpText().lastNamePlaceHolder}
              inputMode="text"
            />
          </View>
        </View>
      );
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <SafeAreaView style={signUpStyles.background}>
        <ScrollView
          contentContainerStyle={signUpStyles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={signUpStyles.titleArea}>
            <Text style={Res.CommonStyles.texts.title}>
              {Res.GetSignUpText().title}
            </Text>
          </View>
          <View style={signUpStyles.textArea}>
            <Text style={Res.CommonStyles.texts.paragraph}>
              {Res.GetSignUpText().description}
            </Text>
          </View>
          <View style={signUpStyles.farmacia}>
            {checkbox()}
            {/* TODO agregar este texto a strings.js */}
            <Text style={signUpStyles.farmaciaTexto}>Cuenta farmacia</Text>
          </View>
          <View style={signUpStyles.textFieldArea}>
            <View style={signUpStyles.textFieldContainer}>
              <TextField
                placeholder={Res.GetSignUpText().emailPlaceHolder}
                inputMode="email"
              />
            </View>
            <View style={signUpStyles.textFieldContainer}>
              <TextField
                placeholder={Res.GetSignUpText().passwordPlaceHolder}
                inputMode="password"
              />
            </View>
            <View style={signUpStyles.textFieldContainer}>
              <TextField
                placeholder={Res.GetSignUpText().reEnterPasswordPlaceHolder}
                inputMode="password"
              />
            </View>
            {dataFields()}
          </View>
          <View style={signUpStyles.buttonArea}>
            <GeneralPurposeButton
              text={Res.GetButtonText().signUp}
              onPress={() => {
                // Add logic for sign-up
                navigation.navigate('Home');
              }}
            />
          </View>
          <View style={signUpStyles.textArea}>
            <Text
              style={Res.CommonStyles.texts.link}
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              {Res.GetSignUpText().signInShortcut}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const signUpStyles = StyleSheet.create({
  background: {
    backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
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
  checkboxEmpty: {
    height: 35,
    width: 35,
    marginLeft: 40,
    marginRight: 10,
  },
  checkboxFull: {
    height: 35,
    width: 40,
    marginLeft: 40,
    tintColor: 'green',
    marginRight: 5,
  },
  farmacia: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  farmaciaTexto: {
    fontSize: 23,
  },
});
