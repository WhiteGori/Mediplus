import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  OptionPicker,
  GeneralPurposeButton,
  createInitialFromString,
  TextField,
} from '../components';
import {MedDataBase} from '../backend';
import * as Res from '../resources';

export const AddMedicine = ({navigation}) => {
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

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <ScrollView contentContainerStyle={addMedicineStyles.background}>
        <View style={addMedicineStyles.titleArea}>
          <Text style={Res.CommonStyles.texts.title}>
            {Res.GetAddMedicineText().title}
          </Text>
        </View>
        <View style={addMedicineStyles.inputArea}>
          <View style={addMedicineStyles.optionPickerArea}>
            <OptionPicker
              options={getMedicineOptions()}
              enableCancel={true}
              cancel={Res.GetButtonText().cancel}
              initial={createInitialFromString(
                Res.GetAddMedicineText().pickerPlaceholder,
              )}
              onSelection={() => {}}
              cancelButtonColor={Res.COMPONENT_COLOR.SECONDARY}
            />
          </View>
          <View style={addMedicineStyles.reminderAreaStyles.outer}>
            <View style={addMedicineStyles.reminderAreaStyles.subtitle}>
              <Text style={Res.CommonStyles.texts.subtitle}>
                {Res.GetAddMedicineText().timeSubtitle}
              </Text>
            </View>
            <View style={addMedicineStyles.reminderAreaStyles.timeOuter}>
              <View style={addMedicineStyles.reminderAreaStyles.timeInnerLeft}>
                <TextField
                  style={addMedicineStyles.textFields}
                  textStyle={Res.CommonStyles.texts.subtitle}
                  textAlign={'center'}
                  inputMode={'decimal'}
                />
              </View>
              <View
                style={addMedicineStyles.reminderAreaStyles.timeInnerMiddle}>
                <Text style={Res.CommonStyles.texts.subtitle}>
                  {Res.GetAddMedicineText().timeSeparator}
                </Text>
              </View>
              <View style={addMedicineStyles.reminderAreaStyles.timeInnerRight}>
                <TextField
                  style={addMedicineStyles.textFields}
                  textStyle={Res.CommonStyles.texts.subtitle}
                  textAlign={'center'}
                  inputMode={'decimal'}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={addMedicineStyles.buttonArea}>
          <GeneralPurposeButton
            text={Res.GetButtonText().accept}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const addMedicineStyles = StyleSheet.create({
  background: {
    backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
    flexGrow: 1,
    paddingTop: 10,
  },
  titleArea: {
    alignItems: 'center',
    marginBottom: 80,
  },
  optionPickerArea: {
    marginBottom: 80,
  },
  inputArea: {
    marginHorizontal: 10,
    marginBottom: 80,
  },
  buttonArea: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
  textFields: {
    width: 120,
    padding: 5,
    marginHorizontal: 5,
  },
  reminderAreaStyles: {
    outer: {},
    subtitle: {
      alignItems: 'center',
      marginBottom: 20,
    },
    timeOuter: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    timeInnerLeft: {
      flex: 5,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    timeInnerMiddle: {
      flex: 1,
      alignItems: 'center',
    },
    timeInnerRight: {
      flex: 5,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
  },
});
