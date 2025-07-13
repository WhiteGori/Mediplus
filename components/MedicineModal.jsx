import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Timer} from './Timer';
import {GeneralPurposeButton} from './Buttons';
import * as Res from '../resources';

export const MedicineModal = props => {
  return (
    <View style={MedicineModalStyles.container}>
      <View style={MedicineModalStyles.modalStyle}>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={MedicineModalStyles.titulo}>
            {props.name}
            {'\n'}
          </Text>
          <TouchableOpacity
            style={MedicineModalStyles.crossButton}
            onPress={props.onPress}>
            <Image
              source={require('../resources/images/cross.png')}
              tintColor={Res.COMPONENT_COLOR.PRIMARY}
              style={MedicineModalStyles.crossIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 4, justifyContent: 'space-around'}}>
          <Text style={MedicineModalStyles.texto}>
            {props.remaining} restantes
          </Text>
          <View>
            <View
              style={{
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <GeneralPurposeButton
                text="Tomar"
                containerStyle={{marginRight: 10, marginLeft: 10}}
              />
              <GeneralPurposeButton
                text="Detalles"
                onPress={props.onDetailsButtonPress}
                containerStyle={{marginLeft: 10, marginRight: 10}}
              />
            </View>
            <Text style={MedicineModalStyles.textoTimer}>
              Proxima dosis en {'\n'}
              <Timer
                timeHour1={props.timeHour1}
                timeHour2={props.timeHour2}
                timeHour3={props.timeHour3}
              />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const MedicineModalStyles = StyleSheet.create({
  modalStyle: {
    backgroundColor: 'white',
    width: 370,
    height: 290,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: Res.COMPONENT_COLOR.PRIMARY,
  },
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  crossButton: {
    alignSelf: 'flex-start',
    padding: 5,
  },
  crossIcon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  texto: {
    color: 'black',
    padding: 10,
    fontSize: 24,
    alignSelf: 'center',
  },
  textoTimer: {
    color: 'black',
    padding: 10,
    fontSize: 26,
    textAlign: 'center',
  },
  titulo: {
    color: 'black',
    padding: 10,
    fontSize: 30,
  },
});
