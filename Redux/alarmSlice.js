// Redux/alarmSlice.js
import { createSlice } from '@reduxjs/toolkit';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let alarmSound = null;

const alarmSlice = createSlice({
  name: 'alarm',
  initialState: {
    active: false,
    scheduleId: null,
    medicationName: null,
  },
  reducers: {
    startAlarm: (state, action) => {
      const { scheduleId, medicationName } = action.payload;

      if (alarmSound) return;

      alarmSound = new Sound(
        'alarm.mp3',
        Sound.MAIN_BUNDLE,
        error => {
          if (!error) {
            alarmSound.setNumberOfLoops(-1);
            alarmSound.play();
          }
        }
      );

      state.active = true;
      state.scheduleId = scheduleId;
      state.medicationName = medicationName;
    },
    stopAlarm: state => {
      if (alarmSound) {
        alarmSound.stop();
        alarmSound.release();
        alarmSound = null;
      }

      state.active = false;
      state.scheduleId = null;
      state.medicationName = null;
    },

  },
});

export const { startAlarm, stopAlarm } = alarmSlice.actions;
export default alarmSlice.reducer;
