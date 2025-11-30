import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Res from '../resources';
import {GeneralPurposeButton, OptionPicker} from '../components';

export const Settings = ({
  navigation,
  handleLogin,
  handleLogout,
  email,
  setEmail,
  password,
  setPassword,
  auth,
}) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const handleLanguageChange = option => {
    Res.setAppLanguage(option);
    forceUpdate();
  };

  React.useEffect(() => {
    if (auth.user === null) {
      navigation.navigate('AppIntro');
    }
  }, [auth.user]);

  return (
    <View style={settingsStyles.container}>
      <Text style={settingsStyles.title}>{Res.GetSettingsText().title}</Text>
      <View style={settingsStyles.pickerContainer}>
        <Text style={settingsStyles.label}>
          {Res.GetSettingsText().selectLanguage}
        </Text>
        <OptionPicker
          options={Res.languageOptions}
          enableCancel={true}
          cancel={Res.GetButtonText().cancel}
          cancelButtonColor={Res.COMPONENT_COLOR.SECONDARY}
          initial={Res.getAppLanguage()}
          onSelection={option => handleLanguageChange(option)}
        />
      </View>
      <GeneralPurposeButton
        text={Res.GetSettingsText().logoutButton}
        onPress={handleLogout}
      />
    </View>
  );
};

const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Res.TEXT_COLOR.PRIMARY,
    marginVertical: 10,
  },
  pickerContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: Res.TEXT_COLOR.PRIMARY,
    marginBottom: 5,
  },
});
