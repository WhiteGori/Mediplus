import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Res from '../resources';
import { Timer } from './Timer';

export const MedicineContainer = ({
  name,
  times,
  isAlarmActive,
  onStopAlarm,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.medicineButton}
      activeOpacity={0.9}
    >
      <Text style={styles.nombreMedicamentos}>{name}</Text>

      {/* 🔴 ESTADO ALARMA */}
      {isAlarmActive ? (
        <View style={styles.alertBox}>
          <Text style={styles.alertText}>
            ⏰ Es hora de tomar la medicación
          </Text>

          <TouchableOpacity
            style={styles.alertButton}
            onPress={onStopAlarm}
          >
            <Text style={styles.alertButtonText}>
              Marcar como tomada
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        /* ⏳ ESTADO NORMAL */
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.textoTimer}>Tomar dentro de</Text>
          <Timer
            style={styles.textoTimer}
            times={times}
            medicationName={name}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  medicineButton: {
    width: '80%',
    height: 170,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    padding: 15,
    borderColor: '#d7d9d9',
    borderWidth: 3,
    alignItems: 'center',
  },
  nombreMedicamentos: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textoTimer: {
    color: Res.COMPONENT_COLOR.PRIMARY,
    fontSize: 16,
  },
  alertBox: {
    alignItems: 'center',
  },
  alertText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  alertButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  alertButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
