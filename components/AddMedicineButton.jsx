import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import * as Res from '../resources';

export const AddMedicineButton = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={AddButtonStyles.medicineButton}>
        <Image
          style={AddButtonStyles.cross}
          source={require('../resources/images/WhiteCross.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const AddButtonStyles = StyleSheet.create({
  medicineButton: {
    width: '80%',
    height: 130,
    alignSelf: 'center',
    backgroundColor: Res.COMPONENT_COLOR.PRIMARY,
    borderRadius: 30,
    justifyContent: 'center',
    padding: 10,
    borderColor: Res.COMPONENT_COLOR.SECONDARY,
    borderWidth: 5,
    alignItems: 'center',
  },
  cross: {
    height: 78,
    width: 78,
  },
});
