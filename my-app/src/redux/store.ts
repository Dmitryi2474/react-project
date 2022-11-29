import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import mobile from './slices/mobileSlice';
import map from './slices/mapSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    mobile,
    map,
  },
});

export type RootState = ReturnType<typeof store.getState>;