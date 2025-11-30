import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import * as Res from '../resources';
import {GetSettingsText} from '../resources';

export const Profile = () => {
  return (
    <View style={profileStyles.background}>
      <View style={profileStyles.container}>
        <Text style={[Res.CommonStyles.texts.title, profileStyles.title]}>
          {Res.userData.name}
        </Text>
        <View style={profileStyles.dataArea}>
          <View style={profileStyles.outerDataField}>
            <View style={profileStyles.leftInnerDataField}>
              <Text
                style={[Res.CommonStyles.texts.subtitle, profileStyles.labels]}>
                {Res.GetProfileText().emailLabel}
              </Text>
            </View>
            <View style={profileStyles.rightInnerDataField}>
              <Text
                style={[Res.CommonStyles.texts.paragraph, profileStyles.data]}>
                {Res.userData.email}
              </Text>
            </View>
          </View>
        </View>
        <View style={profileStyles.dataArea}>
          <View style={profileStyles.outerDataField}>
            <View style={profileStyles.leftInnerDataField}>
              <Text
                style={[Res.CommonStyles.texts.subtitle, profileStyles.labels]}>
                {Res.GetProfileText().birthDateLabel}
              </Text>
            </View>
            <View style={profileStyles.rightInnerDataField}>
              <Text
                style={[Res.CommonStyles.texts.paragraph, profileStyles.data]}>
                {Res.userData.birthDate}
              </Text>
            </View>
          </View>
        </View>
        <View style={profileStyles.dataArea}>
          <View style={profileStyles.outerDataField}>
            <View style={profileStyles.leftInnerDataField}>
              <Text
                style={[Res.CommonStyles.texts.subtitle, profileStyles.labels]}>
                {Res.GetProfileText().ageLabel}
              </Text>
            </View>
            <View style={profileStyles.rightInnerDataField}>
              <Text
                style={[Res.CommonStyles.texts.paragraph, profileStyles.data]}>
                {Res.userData.age}
              </Text>
            </View>
          </View>
        </View>
        <View style={profileStyles.dataArea}>
          <View style={profileStyles.outerDataField}>
            <View style={profileStyles.leftInnerDataField}>
              <Text
                style={[Res.CommonStyles.texts.subtitle, profileStyles.labels]}>
                {Res.GetProfileText().addressLabel}
              </Text>
            </View>
            <View style={profileStyles.rightInnerDataField}>
              <Text
                style={[Res.CommonStyles.texts.paragraph, profileStyles.data]}>
                {Res.userData.address}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{height: 100}} />
    </View>
  );
};

const profileStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  dataArea: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '95%',
  },
  outerDataField: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  leftInnerDataField: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
  rightInnerDataField: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    width: '100%',
  },
  title: {
    textAlign: 'center',
  },
  labels: {
    textAlign: 'left',
  },
  data: {
    textAlign: 'right',
  },
});
