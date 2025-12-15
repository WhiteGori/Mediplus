import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { stopAlarm } from '../Redux/alarmSlice';

export const GlobalAlarmOverlay = () => {
  const { active, medicationName } = useSelector(state => state.alarm);
  const dispatch = useDispatch();

  if (!active) return null;

  return (
    <View style={styles.overlay}>
      <Text style={styles.title}>⏰ Hora de tomar</Text>
      <Text style={styles.med}>{medicationName}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(stopAlarm())}
      >
        <Text style={styles.buttonText}>Tomada</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    elevation: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  med: {
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
