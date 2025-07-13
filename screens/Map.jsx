import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';

import * as Res from '../resources';
import {GeneralPurposeButton, OptionPicker} from '../components';
import { MedDataBase } from "../backend";

/* TODO mejorar el formato de los estilos */

export const Map = ({navigation}) => {
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
    <SafeAreaView style={mapStyles.background}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{height: '100%'}}
        data={DataFarmacias}
        renderItem={({item}) => (
          <View
            style={{
              height: 130,
              borderTopWidth: 2,
              borderColor: '#bdbdbd',
              width: '100%',
            }}>
            <Text
              style={{
                position: 'absolute',
                alignSelf: 'flex-start',
                color: Res.TEXT_COLOR.PRIMARY,
                fontSize: 16,
              }}>
              {item.id}
            </Text>
            <View style={{flexWrap: 'wrap'}}>
              <Text
                style={{
                  color: Res.TEXT_COLOR.PRIMARY,
                  fontSize: 20,
                  marginLeft: 15,
                }}>
                {' '}
                {item.name}
              </Text>
            </View>
            <View style={{flexWrap: 'wrap', flex: 1, flexDirection: 'row'}}>
              <Image
                source={item.image}
                style={{alignSelf: 'flex-end', width: '35%', height: '95%'}}
              />
              <View style={{flex: 1, marginLeft: 10}}>
                <Text style={{fontSize: 18, color: Res.TEXT_COLOR.PRIMARY}}>
                  {item.address}
                </Text>
                <Text style={{color: Res.TEXT_COLOR.PRIMARY}}>
                  {item.distancia}
                </Text>
                <GeneralPurposeButton
                  containerStyle={{width: '70%', alignSelf: 'center'}}
                  textStyle={{fontSize: 15}}
                  text="Realizar pedido"
                  onPress={() => navigation.navigate('PedidosUser')}
                />
              </View>
            </View>
          </View>
        )}
        ListHeaderComponent={
          <View style={{width: 390, height: 700, marginBottom: 50}}>
            <Text style={[Res.CommonStyles.texts.title, mapStyles.title]}>
              {Res.GetMapText().title}
            </Text>
            <Image
              style={mapStyles.map}
              source={require('../resources/images/MapaFarmacias.png')}
            />
            <View style={{marginTop: 30}}>
              <OptionPicker
                options={getMedicineOptions()}
                enableCancel={true}
                cancel={Res.GetButtonText().cancel}
                cancelButtonColor={Res.COMPONENT_COLOR.SECONDARY}
                onSelection={() => ''}
              />
            </View>
          </View>
        }
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style={{height: 5}} />}
      />
    </SafeAreaView>
  );
};

const DataFarmacias = [
  {
    id: 1,
    name: 'Farmacity',
    image: require('../resources/images/Farmacias/Farmacity.jpg'),
    distancia: '100 m',
    address: 'Av. Leandro N. Alem 702, C1001 AAP, Buenos Aires',
  },
  {
    id: 2,
    name: 'Nuevo Puerto II',
    image: require('../resources/images/Farmacias/NuevoPuerto.jpg'),
    distancia: '300 m',
    address: 'Av. Alicia Moreau de Justo 146, C1107 AAD, Buenos Aires',
  },
  {
    id: 3,
    name: 'Mihanovich pharmacy Srl',
    image: require('../resources/images/Farmacias/Mihanovich.jpg'),
    distancia: '350 m',
    address: 'San Martín 908, C1004AAT CABA',
  },
  {
    id: 4,
    name: 'Monica Potetti Pharmaceutical',
    image: require('../resources/images/Farmacias/potettiPharmaceutical.jpg'),
    distancia: '500 m',
    address: 'Reconquista 613, C1003 ABM, Buenos Aires',
  },
  {
    id: 5,
    name: 'Farmacia Azul',
    image: require('../resources/images/Farmacias/FarmaciaAzul.jpeg'),
    distancia: '550 m',
    address: 'Reconquista 1015, C1003ABU CABA',
  },
];

const mapStyles = StyleSheet.create({
  background: {
    backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '80%',
    flex: 1,
  },
  title: {
    marginVertical: 10,
  },
});
