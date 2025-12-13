import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import medicationReducer from './medicationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    medication: medicationReducer,
  },
});

export default store;