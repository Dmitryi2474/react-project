import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import mobile from './slices/mobileSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    mobile,
  },
});
