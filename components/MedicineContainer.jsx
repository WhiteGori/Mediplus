import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Res from '../resources';
import { Timer } from './Timer';

export const MedicineContainer = ({
  name,
  times,
  scheduleId,
  isAlarmActive,
  onDelete,
}) => {
  return (
    <View style={styles.card}>
      {/* 🧠 HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>

        <TouchableOpacity
          onPress={() => onDelete(scheduleId)}
          style={styles.deleteButton}
        >
          <Text style={styles.deleteText}>🗑</Text>
        </TouchableOpacity>
      </View>

      {/* ⏰ BODY */}
      {isAlarmActive ? (
        <Text style={styles.alarmText}>
          ⏰ Es hora de tomar la medicación
        </Text>
      ) : (
        <View style={styles.timerBox}>
          <Text style={styles.subtitle}>Próxima toma en</Text>
          <Timer
            style={styles.timer}
            scheduleId={scheduleId}
            times={times}
            medicationName={name}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '85%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 16,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    flex: 1,
  },

  deleteButton: {
    padding: 6,
  },

  deleteText: {
    fontSize: 20,
    color: '#c62828',
  },

  timerBox: {
    alignItems: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },

  timer: {
    fontSize: 18,
    color: Res.COMPONENT_COLOR.PRIMARY,
    fontWeight: 'bold',
  },

  alarmText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d32f2f',
    textAlign: 'center',
  },
});
