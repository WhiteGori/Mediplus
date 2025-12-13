import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';

import {
  OptionPicker,
  GeneralPurposeButton,
  createInitialFromString,
} from '../components';
import * as Res from '../resources';

import {
  setSelectedMedication,
  addTime,
  removeTime,
  saveMedicationSchedule,
  resetMedicationForm,
} from '../Redux/medicationSlice';

// ⚠️ Este array ahora DEBE venir del backend en el futuro
import {MedDataBase} from '../backend';

export const AddMedicine = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    selectedMedication, // AHORA ES SOLO UN NUMERO (ID)
    times,
    loading,
    error,
    success,
  } = useSelector(state => state.medication);

  const authUser = useSelector(state => state.auth.user);
  const userId = authUser?.id;


  const [optionsGenerated, setOptionsGenerated] = useState(false);
  const [options, setOptions] = useState(null);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [pickerDate, setPickerDate] = useState(new Date());

  function getMedicineOptions() {
    if (optionsGenerated && options) return options;

    setOptionsGenerated(true);

    const auxOptions = MedDataBase.map(med => ({
      key: med.id, // ✅ ID real
      label: `${med.commercialName} ${med.dosage}`,
      value: med.id, // ✅ YA NO PASAMOS TODO EL OBJETO
    }));

    setOptions(auxOptions);
    return auxOptions;
  }

  // ===== TIME PICKER =====
  const onTimeChange = (event, selected) => {
    if (Platform.OS === 'android') setShowTimePicker(false);
    if (!selected) return;

    const h = selected.getHours().toString().padStart(2, '0');
    const m = selected.getMinutes().toString().padStart(2, '0');
    const timeStr = `${h}:${m}`;

    dispatch(addTime(timeStr));
    setPickerDate(selected);
  };

  // ===== GUARDAR =====
  const handleSave = () => {
    if (!userId) {
      alert('Sesión inválida. Volvé a iniciar sesión.');
      return;
    }

    console.log('USER:', userId);
    console.log('MEDICATION ID:', selectedMedication);
    console.log('TIMES:', times);

    if (!selectedMedication) {
      alert('Seleccioná un medicamento');
      return;
    }

    if (times.length === 0) {
      alert('Agregá al menos un horario');
      return;
    }

    dispatch(
      saveMedicationSchedule({
        userId,
        medicationId: selectedMedication,
        times,
      }),
    );
  };

  // ===== POST GUARDADO =====
  useEffect(() => {
    if (success) {
      dispatch(resetMedicationForm());
      navigation.navigate('Home');
    }
  }, [success, dispatch, navigation]);

  return (
    <ScrollView
      contentContainerStyle={addMedicineStyles.background}
      keyboardShouldPersistTaps="handled">

      <View style={addMedicineStyles.titleArea}>
        <Text style={Res.CommonStyles.texts.title}>
          {Res.GetAddMedicineText().title}
        </Text>
      </View>

      <View style={addMedicineStyles.inputArea}>
        {/* PICKER DE MEDICAMENTOS */}
        <View style={addMedicineStyles.optionPickerArea}>
          <OptionPicker
            options={getMedicineOptions()}
            enableCancel={true}
            cancel={Res.GetButtonText().cancel}
            initial={createInitialFromString(
              Res.GetAddMedicineText().pickerPlaceholder,
            )}
            onSelection={option => {
              dispatch(setSelectedMedication(option.value)); // ✅ solo ID
            }}
            cancelButtonColor={Res.COMPONENT_COLOR.SECONDARY}
          />
        </View>

        {/* HORARIOS */}
        <View style={addMedicineStyles.reminderAreaStyles.outer}>
          <View style={addMedicineStyles.reminderAreaStyles.subtitle}>
            <Text style={Res.CommonStyles.texts.subtitle}>
              {Res.GetAddMedicineText().timeSubtitle}
            </Text>
          </View>

          <View style={addMedicineStyles.addTimeButtonContainer}>
            <GeneralPurposeButton
              text="Agregar horario"
              onPress={() => setShowTimePicker(true)}
              color={Res.COMPONENT_COLOR.PRIMARY}
              textStyle={[Res.CommonStyles.texts.paragraph, {color: 'white'}]}
            />
          </View>

          <View style={addMedicineStyles.timeListContainer}>
            {times.length === 0 && (
              <Text style={Res.CommonStyles.texts.paragraph}>
                No hay horarios agregados.
              </Text>
            )}

            {times.map(time => (
              <View
                key={time}
                style={addMedicineStyles.timeChipContainer}>
                <Text style={Res.CommonStyles.texts.paragraph}>{time}</Text>
                <TouchableOpacity
                  onPress={() => dispatch(removeTime(time))}>
                  <Text style={addMedicineStyles.removeTimeText}>✕</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {showTimePicker && (
            <DateTimePicker
              value={pickerDate}
              mode="time"
              is24Hour={true}
              display={Platform.OS === 'android' ? 'default' : 'spinner'}
              onChange={onTimeChange}
            />
          )}
        </View>
      </View>

      {error && (
        <View style={{alignItems: 'center', marginBottom: 10}}>
          <Text style={{color: 'red'}}>{error}</Text>
        </View>
      )}

      <View style={addMedicineStyles.mainButtonArea}>
        <GeneralPurposeButton
          text={loading ? 'Guardando...' : Res.GetButtonText().accept}
          onPress={handleSave}
          disabled={loading}
        />
      </View>
    </ScrollView>
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
    addTimeButtonContainer: {
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  timeListContainer: {
    marginTop: 10,
    gap: 8,
  },
  timeChipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Res.COMPONENT_COLOR.PRIMARY,
    alignSelf: 'flex-start',
  },
  removeTimeText: {
    marginLeft: 8,
    color: 'red',
    fontWeight: 'bold',
  },

});
