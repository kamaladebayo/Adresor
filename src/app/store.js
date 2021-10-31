import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: locationReducer,
  },
});
