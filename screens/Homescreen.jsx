import React, {useState} from 'react';
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
          ItemSeparatorComponent={<View style={{height: 30}} />}
          data={DataMedicamentos}
          renderItem={({item}) => (
            <MedicineContainer
              name={item.name}
              amount={item.amount}
              remaining={item.remaining}
              timeHour1={item.timeHour1}
              timeHour2={item.timeHour2}
              timeHour3={item.timeHour3}
              onPress={() => showModal(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
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

const DataMedicamentos = [
  {
    name: 'Isotretinoína 20mg',
    amount: 30,
    remaining: 16,
    timeHour1: 22,
    timeHour2: 10,
  },
  {
    name: 'Levotiroxina 75mg',
    amount: 56,
    remaining: 20,
    timeHour1: 9,
  },
  {
    name: 'Acido acetilsalicilico 100mg',
    amount: 84,
    remaining: 30,
    timeHour1: 8,
    timeHour2: 14,
    timeHour3: 20,
  },
  {
    name: 'Levonorgestrel/Etinilestradiol 0,1 mg',
    amount: 30,
    remaining: 12,
    timeHour1: 14,
  },
];

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
