// toolkit/slice/filterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  minPrice: 0,
  maxPrice: 97,
  categoryFilter: 'all', // Initial category filter
};

const filterSlice = createSlice({
  name: 'filterProducts',
  initialState,
  reducers: {
    setPriceRange(state, action) {
      const { minPrice, maxPrice } = action.payload;
      state.minPrice = minPrice;
      state.maxPrice = maxPrice;
    },
    setCategoryFilter(state, action) {
      state.categoryFilter = action.payload;
    },
  },
});

export const { setPriceRange, setCategoryFilter } = filterSlice.actions;

export const selectMinPrice = (state) => state.filterProducts.minPrice;
export const selectMaxPrice = (state) => state.filterProducts.maxPrice;
export const selectCategoryFilter = (state) => state.filterProducts.categoryFilter;

export default filterSlice.reducer;
