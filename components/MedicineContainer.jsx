import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { FadeInUp, FadeOut } from 'react-native-reanimated';
import * as Res from '../resources';
import { Timer } from './Timer';

export const MedicineContainer = ({
  name,
  times,
  isAlarmActive,
  onStopAlarm,
  onDelete,
  scheduleId,
}) => {
  return (
    <Animated.View
      entering={FadeInUp.duration(250)}
      exiting={FadeOut}
      style={styles.card}
    >
      {/* 🧾 TÍTULO */}
      <Text style={styles.title}>{name}</Text>

      {isAlarmActive ? (
        /* 🔴 ESTADO ALARMA */
        <Animated.View
          entering={FadeInUp}
          exiting={FadeOut}
          style={styles.alertBox}
        >
          <Text style={styles.alertText}>
            ⏰ Es hora de tomar la medicación
          </Text>

          <TouchableOpacity
            style={styles.takeButton}
            onPress={onStopAlarm}
            activeOpacity={0.85}
          >
            <Text style={styles.takeButtonText}>
              Marcar como tomada
            </Text>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        /* ⏳ ESTADO NORMAL */
        <Animated.View
          entering={FadeInUp}
          exiting={FadeOut}
          style={styles.normalBox}
        >
          <Text style={styles.subtitle}>Próxima toma en</Text>

          <Timer
            style={styles.timer}
            scheduleId={scheduleId}
            times={times}
            medicationName={name}
          />

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(scheduleId)}
            activeOpacity={0.6}
          >
            <Text style={styles.deleteText}>
              🗑 Eliminar recordatorio
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 16,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 4, // Android shadow
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: Res.COMPONENT_COLOR.PRIMARY,
    marginBottom: 6,
  },
  timer: {
    fontSize: 18,
    color: Res.COMPONENT_COLOR.PRIMARY,
    marginBottom: 14,
  },
  alertBox: {
    alignItems: 'center',
  },
  alertText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 14,
    textAlign: 'center',
  },
  takeButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 24,
  },
  takeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    marginTop: 10,
    paddingVertical: 8,
  },
  deleteText: {
    color: '#d32f2f',
    fontWeight: 'bold',
  },
});
