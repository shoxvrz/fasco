import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  minPrice: 0,
  maxPrice: 97,
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
  },
});

export const { setPriceRange } = filterSlice.actions;

export const selectMinPrice = (state) => state.filterProducts.minPrice;
export const selectMaxPrice = (state) => state.filterProducts.maxPrice;

export default filterSlice.reducer;
