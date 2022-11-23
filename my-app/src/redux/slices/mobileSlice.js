import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMobile = createAsyncThunk(
  'mobile/fetchMobilesStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://6363c19237f2167d6f828690.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

const mobileSlice = createSlice({
  name: 'mobile',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchMobile.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchMobile.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [fetchMobile.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const slectetMobile = (state) => state.mobile;

export const { setItems } = mobileSlice.actions;

export default mobileSlice.reducer;
