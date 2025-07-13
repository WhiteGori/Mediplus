import React, {useState} from 'react';
import * as Res from '../resources';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {GeneralPurposeButton, TextField} from '../components';

export const MedicationDetail = ({navigation}) => {
  /* TODO quitar y reemplazar por backend */
  const [qty, setQty] = useState(12);
  const [modalVisible, setModalVisible] = useState(false);

  function consume() {
    if (qty > 0) {
      setQty(qty - 1);
    }
  }

  function renderAddMoreModal() {
    let toAdd = 0;
    return (
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={medDetailStyles.modalContainer}>
          <View style={medDetailStyles.addMoreModal.outer}>
            <View style={medDetailStyles.addMoreModal.inner}>
              <Text style={Res.CommonStyles.texts.subtitle}>
                ¿Qué cantidad desea añadir?
              </Text>
            </View>
            <View style={medDetailStyles.addMoreModal.inner}>
              <TextField
                keyboardType={'numeric'}
                textAlign={'center'}
                onChangeText={text => {
                  let aux = Number(text);
                  toAdd = aux > 0 ? aux : 0;
                }}
              />
            </View>
            <View style={medDetailStyles.addMoreModal.inner}>
              <GeneralPurposeButton
                text={Res.GetButtonText().accept}
                onPress={() => {
                  setQty(qty + toAdd);
                  setModalVisible(false);
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <ScrollView contentContainerStyle={medDetailStyles.container}>
      <View style={medDetailStyles.tradeNameArea}>
        <Text style={Res.CommonStyles.texts.title}>{'Lopresol'}</Text>
      </View>
      <View style={medDetailStyles.medNameArea}>
        <Text style={Res.CommonStyles.texts.subtitle}>{'Metoprolol'}</Text>
      </View>
      <View style={medDetailStyles.dosageArea}>
        <Text style={Res.CommonStyles.texts.subtitle}>{'50mg'}</Text>
      </View>
      <View style={medDetailStyles.descriptionArea}>
        <Text style={Res.CommonStyles.texts.paragraph}>
          {
            'Betabloqueante utilizado para tratar la hipertensión y enfermedades cardiovasculares.'
          }
        </Text>
      </View>
      <View style={medDetailStyles.quantityArea}>
        <Text style={Res.CommonStyles.texts.subtitle}>
          {qty + ' restantes'}
        </Text>
      </View>
      <View style={medDetailStyles.buttonArea}>
        <GeneralPurposeButton text={'Tomar'} onPress={() => consume()} />
      </View>
      <View style={medDetailStyles.buttonArea}>
        <GeneralPurposeButton
          text={'Reponer'}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        {renderAddMoreModal()}
      </Modal>
    </ScrollView>
  );
};

const medDetailStyles = StyleSheet.create({
  container: {
    backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  tradeNameArea: {
    marginTop: 10,
    justifyContent: 'center',
  },
  medNameArea: {
    marginTop: 10,
    justifyContent: 'center',
  },
  dosageArea: {
    marginTop: 10,
    justifyContent: 'center',
  },
  descriptionArea: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Res.COMPONENT_COLOR.PRIMARY,
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
  },
  quantityArea: {
    marginTop: 50,
    justifyContent: 'center',
  },
  buttonArea: {
    marginTop: 10,
    justifyContent: 'center',
    width: '60%',
  },
  modalContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addMoreModal: {
    outer: {
      backgroundColor: 'white',
      width: 370,
      height: 290,
      borderRadius: 20,
      borderWidth: 5,
      borderColor: Res.COMPONENT_COLOR.PRIMARY,
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,
    },
    inner: {flex: 1, width: '100%', justifyContent: 'space-around'},
  },
});
