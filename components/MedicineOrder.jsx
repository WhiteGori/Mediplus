import React, { useState } from "react";
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Timer} from './Timer';
import {GeneralPurposeButton} from './Buttons';
import * as Res from '../resources';
import { OptionPicker } from './OptionPicker';
import { TextInput } from 'react-native-gesture-handler';
import { TextField } from './TextField';
import { MedDataBase } from "../backend";


export const MedicineOrder = props => {
  /* TODO reemplazar por algo MUCHO mas eficiente */

  const [optionsGenerated, setOptionsGenerated] = useState(false);
  const [options, setOptions] = useState(null);

  function getMedicineOptions() {
    if (optionsGenerated === true && options !== null) {
      return options;
    }

    console.log('** DEBUG ** Generating Medicine Options');
    setOptionsGenerated(true);

    let auxOptions = [];

    for (let medIndex in MedDataBase) {
      let med = MedDataBase[medIndex];
      let aux = {
        key: medIndex,
        label: med.commercialName + ' ' + med.dosage,
        value: med,
      };
      auxOptions.push(aux);
    }
    setOptions(auxOptions);
    return options;
  }

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
                Nuevo Pedido
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
          <View style={{flex: 8, justifyContent: 'space-around',}}>
            <Text style={MedicineModalStyles.texto}>  Farmacia:</Text>
            <OptionPicker
                options={
                  [{key: 1, label: 'Farmacity', value: 'ES'},
                  {key: 2, label: 'Nuevo Puerto II', value: 'EN'},
                  {key: 3, label: 'Mihanovich pharmacy Srl' , value: 'PT'},
                  {key: 4, label: 'Monica Potetti Pharmaceutical', value: 'FR'},
                  {key: 5, label: 'Farmacia Azul', value: 'DE'},]
                }
                enableCancel={true}
                cancel={Res.GetButtonText().cancel}
                cancelButtonColor={Res.COMPONENT_COLOR.SECONDARY}
                onSelection={()=>""}
            />
            <Text style={MedicineModalStyles.texto}>  Medicamento:</Text>
            <OptionPicker
                options={getMedicineOptions()}
                enableCancel={true}
                cancel={Res.GetButtonText().cancel}
                cancelButtonColor={Res.COMPONENT_COLOR.SECONDARY}
                onSelection={()=>""}
            />
            <View style={{flexDirection:'row', marginTop:16,marginBottom:16}}>
                <Text style={MedicineModalStyles.texto}>  Cantidad:</Text>
                <TextField style={{width:80}} keyboardType={'numeric'}/>
            </View>
            <GeneralPurposeButton containerStyle={{height:40}} text="Realizar pedido"/>
          </View>
        </View>
      </View>
  );
};

const MedicineModalStyles = StyleSheet.create({
  modalStyle: {
    backgroundColor: 'white',
    width: 370,
    height: 440,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: Res.COMPONENT_COLOR.PRIMARY,
    paddingHorizontal:20
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
