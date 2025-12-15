import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import medicationReducer from './medicationSlice';
import alarmReducer from './alarmSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    medication: medicationReducer,
    alarm: alarmReducer,
  },
});

export default store;