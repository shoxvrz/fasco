
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle', 
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    signUpSuccess(state, action) {
      state.status = 'succeeded';
      state.user = action.payload;
    },
    signUpFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    signInStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    signInSuccess(state, action) {
      state.status = 'succeeded';
      state.user = action.payload;
    },
    signInFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { signUpStart, signUpSuccess, signUpFailure, signInFailure, signInStart, signInSuccess
 } = userSlice.actions;

export default userSlice.reducer;
