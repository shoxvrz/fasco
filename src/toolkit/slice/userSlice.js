
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
    signIn(state, action){
        state.user = action.payload
    }
  },
});

export const { signUpStart, signUpSuccess, signUpFailure, signIn } = userSlice.actions;

export default userSlice.reducer;
