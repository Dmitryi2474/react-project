import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface mapSliceState {
  mapLocation: {
    lat: number,
    lng: number,
  }
  active: number
}

const initialState: mapSliceState = {
  mapLocation: {
    lat: 53.54167,
    lng: 49.39048,
  },
  active: 0,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMapLocation(state, action) {
      state.mapLocation = action.payload;
    },
    setActive(state, action) {
      state.active = action.payload;
    },
  },
});

export const selectMapLocation = (state: RootState) => state.map.mapLocation;
export const selectMapActive = (state: RootState) => state.map.active;

export const { setMapLocation, setActive } = mapSlice.actions;

export default mapSlice.reducer;
