// Redux/alarmSlice.js
import { createSlice } from '@reduxjs/toolkit';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let alarmSound = null;

const alarmSlice = createSlice({
  name: 'alarm',
  initialState: {
    active: false,
    medicationName: null,
  },
  reducers: {
    startAlarm: (state, action) => {
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
      state.medicationName = action.payload;
    },
    stopAlarm: state => {
      if (alarmSound) {
        alarmSound.stop();
        alarmSound.release();
        alarmSound = null;
      }

      state.active = false;
      state.medicationName = null;
    },
  },
});

export const { startAlarm, stopAlarm } = alarmSlice.actions;
export default alarmSlice.reducer;
