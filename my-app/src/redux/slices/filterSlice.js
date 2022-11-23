import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  currentPage: 1,
  searchValue: '',
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategotyId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFliters(state, action) {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const slectetFilter = (state) => state.filter;
export const selectSort = (state) => state.filter.sort;

export const {
  setSearchValue,
  setCategotyId,
  setSort,
  setCurrentPage,
  setFliters,
} = filterSlice.actions;

export default filterSlice.reducer;
