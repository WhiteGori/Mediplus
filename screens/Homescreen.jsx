import React, {useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMedicationSchedules } from '../Redux/medicationSlice';
import { useFocusEffect } from '@react-navigation/native';
import { stopAlarm } from '../Redux/alarmSlice';
import { deleteMedicationSchedule } from '../Redux/medicationSlice';




import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
  View,
  Modal,
} from 'react-native';

import * as Res from '../resources';
import {
  AddMedicineButton,
  MedicineContainer,
  MedicineModal,
} from '../components';



export const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [medicineItem, setMedicineItem] = useState(undefined);
  
  const dispatch = useDispatch();

  const alarmActive = useSelector(state => state.alarm.active);
  const medicationName = useSelector(state => state.alarm.medicationName);
  const alarmScheduleId = useSelector(
  state => state.alarm.scheduleId
);


  const auth = useSelector(state => state.auth);
  const medication = useSelector(state => state.medication);
  const userId = auth.user?.id;
  const schedules = medication.schedules || [];
  const loading = medication.loading;
  const handleDeleteSchedule = id => {
    dispatch(deleteMedicationSchedule(id));
  };


  React.useEffect(() => {
    if (userId) {
      dispatch(fetchMedicationSchedules(userId));
    }
  }, [userId, dispatch]);

  useFocusEffect(
    useCallback(() => {
      if (auth.user?.id) {
        dispatch(fetchMedicationSchedules(auth.user.id));
      }
    }, [auth.user?.id, dispatch])
  );

 const mappedData = schedules.map(schedule => {
    const fullName = `${schedule.medication.name} ${schedule.medication.dosage}`;

    return {
      id: schedule.id,
      name: fullName,
      times: schedule.times,
      isAlarmActive:
        alarmActive && alarmScheduleId === schedule.id,
    };
  });




  if (loading) {
    return (
      <SafeAreaView style={homeScreenStyles.background}>
        <Text>Cargando medicaciones...</Text>
      </SafeAreaView>
    );
  }

  function showModal(item) {
    setMedicineItem(item);
    setModalVisible(true);
  }

  function dismissModal() {
    setModalVisible(false);
  }

  function showDetails() {
    setModalVisible(false);
    navigation.navigate('MedicationDetail');
  }

  function isNan() {
    if (medicineItem !== undefined) {
      return (
        <MedicineModal
          onPress={dismissModal}
          modalVisible={modalVisible}
          name={medicineItem.name}
          amount={medicineItem.amount}
          remaining={medicineItem.remaining}
          timeHour1={medicineItem.timeHour1}
          timeHour2={medicineItem.timeHour2}
          timeHour3={medicineItem.timeHour3}
          onDetailsButtonPress={() => showDetails()}
        />
      );
    }
  }
  return (
    <SafeAreaView style={homeScreenStyles.background}>
      <View style={homeScreenStyles.title}>
        <Text style={Res.CommonStyles.texts.title}>
          {Res.GetHomeScreenText().start}
        </Text>
      </View>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        {isNan()}
      </Modal>

      <ImageBackground
        style={homeScreenStyles.backgroundImage}
        source={require('../resources/images/home_background.png')}
        imageStyle={homeScreenStyles.Image}
        resizeMode="contain">
        <FlatList
          ItemSeparatorComponent={<View style={{ height: 30 }} />}
          data={mappedData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <MedicineContainer
              name={item.name}
              times={item.times}
              scheduleId={item.id}
              isAlarmActive={item.isAlarmActive}
              onStopAlarm={() => dispatch(stopAlarm())}
              onDelete={(scheduleId) => {
                dispatch(stopAlarm()); // 🔇 por si justo estaba sonando
                dispatch(deleteMedicationSchedule(scheduleId));
              }}
            />
          )}

          ListFooterComponent={
            <AddMedicineButton
              onPress={() => navigation.navigate('AddMedicine')}
            />
          }
          ListFooterComponentStyle={{paddingTop: 30, paddingBottom: 30}}
        />

      </ImageBackground>
    </SafeAreaView>
  );
};


const homeScreenStyles = StyleSheet.create({
  background: {
    backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
    flex: 1,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 12,
  },
  Image: {
    height: '70%',
    width: '70%',
    opacity: 0.6,
    position: 'absolute',
    left: '15%',
  },
});
/*<FlatList>
<MedicineContainer name='Isotretinoína 20mg' amount={30} remaining={16}/>
          </FlatList>*/
