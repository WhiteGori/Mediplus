import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import * as Res from '../resources';
import {Timer} from './Timer';

export const MedicineContainer = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={MedicineContainerStyles.medicineButton}>
        <Text style={MedicineContainerStyles.nombreMedicamentos}>
          {props.name}
        </Text>
        <View style={{alignItems: 'center'}}>
          <Text style={MedicineContainerStyles.textoTimer}>
            {' '}
            Tomar dentro de{' '}
          </Text>
          <Timer 
            style={MedicineContainerStyles.textoTimer}
            times={props.times}
            medicationName={props.name}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const MedicineContainerStyles = StyleSheet.create({
  medicineButton: {
    width: '80%',
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    padding: 10,
    borderColor: '#d7d9d9',
    borderWidth: 3,
    alignItems: 'center',
  },
  nombreMedicamentos: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textoTimer: {
    color: Res.COMPONENT_COLOR.PRIMARY,
    fontSize: 18,
  },
});
