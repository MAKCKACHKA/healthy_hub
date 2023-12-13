import { createSlice } from '@reduxjs/toolkit';

// import { fetchExample } from '../operations';

const initialState = {
  // token: null,
  token: true,

  isLoading: false,
  error: null,
};

// const handlePending = (state) => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };
// const hendleFulfield = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.token = action.payload;
// };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // setToken: (state, action) => {
    //   state.token = action.payload;
    // },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchExample.pending, handlePending)
  //     .addCase(fetchExample.fulfilled, hendleFulfield)
  //     .addCase(fetchExample.rejected, handleRejected);
  // },
});

export const authReducer = authSlice.reducer;

export const { setToken } = authSlice.actions;
