import React from 'react';
import {TextInput, View} from 'react-native';

import * as Res from '../resources';

/*
Available Props:
* placeholder
* keyboardType
* inputMode
* style
* textAlign
* textStyle
* onChangeText
 */

/*
The prop keyboardType and the prop inputMode support the same values as
TextInput from React Native, with the addition of 'password', which configures
the TextField with secureTextEntry on.
 */
export const TextField = props => {
  return (
    <View style={[textInputStyles.container, props.style]}>
      <TextInput
        style={[
          textInputStyles.field,
          Res.CommonStyles.texts.paragraph,
          props.textStyle,
        ]}
        placeholderTextColor={Res.TEXT_COLOR.PLACEHOLDERS}
        textAlign={props.textAlign}
        multiline={false}
        scrollEnabled={false}
        onScroll={undefined}
        placeholder={props.placeholder}
        keyboardType={
          props.keyboardType !== 'password' ? props.keyboardType : undefined
        }
        inputMode={props.inputMode !== 'password' ? props.inputMode : undefined}
        secureTextEntry={
          props.keyboardType === 'password' || props.inputMode === 'password'
        }
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const textInputStyles = {
  container: {width: '100%'},
  field: {
    borderColor: Res.COMPONENT_COLOR.PRIMARY,
    borderWidth: 3,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
  },
};
