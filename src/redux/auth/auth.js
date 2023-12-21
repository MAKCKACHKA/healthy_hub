import { createSlice } from '@reduxjs/toolkit';
import { forgotPassword, signOut, signin, signup } from '../operations';

// import { fetchExample } from '../operations';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
    age: 0,
    weidht: 0,
    height: 0,
    gender: '',
    coefficientOfActivity: 0,
    goal: '',
  },
  token: true,

  isLoading: false,
  error: null,
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoading = false;
  state.error = null;
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, handleFulfilled)
      .addCase(signup.pending, handlePending)
      .addCase(signup.rejected, handleRejected)
      .addCase(signin.fulfilled, handleFulfilled)
      .addCase(signin.pending, handlePending)
      .addCase(signin.rejected, handleRejected)
      .addCase(signOut.fulfilled, (state) => {
        state.token = null;
        state.user = { name: null, email: null };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signOut.pending, handlePending)
      .addCase(signOut.rejected, handleRejected)
      .addCase(forgotPassword.fulfilled, (state) => {
        state.token = null;
        state.user = { name: '', email: '' };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(forgotPassword.pending, handlePending)
      .addCase(forgotPassword.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;

export const { setToken } = authSlice.actions;
