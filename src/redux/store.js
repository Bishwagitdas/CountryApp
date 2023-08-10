import countriesReducer from './countriesSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;