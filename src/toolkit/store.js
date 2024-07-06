import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import filterReducer from './slice/filterSlice';
import userReducer from './slice/userSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  filterProducts: filterReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
