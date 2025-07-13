import React from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

import * as Res from '../resources';

/*
 * @brief:    General purpose button
 * Available props:
 *  * text
 *  * onPress
 *  * onPressIn
 *  * onPressOut
 *  * onLongPress
 *  * color
 */
export const GeneralPurposeButton = props => {
  return (
    <SafeAreaView style={[buttonStyles.container, props.containerStyle]}>
      <TouchableOpacity
        style={[
          buttonStyles.generalPurposeButton.touchableArea,
          {
            backgroundColor:
              props.color === undefined
                ? Res.COMPONENT_COLOR.PRIMARY
                : props.color,
          },
        ]}
        onPress={props.onPress}
        onPressIn={props.onPressIn}
        onPressOut={props.onPressOut}
        onLongPress={props.onLongPress}>
        <Text style={[buttonStyles.generalPurposeButton.text, props.textStyle]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const buttonStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  generalPurposeButton: {
    touchableArea: {
      borderRadius: 100,
      padding: 10,
    },
    text: {
      alignSelf: 'center',
      fontSize: 18,
      color: 'white',
    },
  },
});
