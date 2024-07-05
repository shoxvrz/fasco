import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import filterReducer from './slice/filterSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  filterProducts: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
