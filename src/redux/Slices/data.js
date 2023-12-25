import { createSlice } from '@reduxjs/toolkit';
import {
  getMonthlyStatistics,
  getCurrentUser,
  updateUserInformation,
  updateUserGoal,
  addUserWeight,
  addFoodIntake,
  deleteFoodIntake,
  addWaterIntake,
  deleteWaterIntake,
  updateFoodIntake,
  addUserAvatar,
  refreshRecommendedFood,
} from '../operations';

const initialState = {
  data: {},
  statistics: {},
  recommendedFood: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMonthlyStatistics.pending, handlePending)
      .addCase(getMonthlyStatistics.rejected, handleRejected)
      .addCase(getMonthlyStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCurrentUser.pending, handlePending)
      .addCase(getCurrentUser.rejected, handleRejected)
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUserInformation.pending, handlePending)
      .addCase(updateUserInformation.rejected, handleRejected)
      .addCase(updateUserGoal.pending, handlePending)
      .addCase(updateUserGoal.rejected, handleRejected)
      .addCase(addUserWeight.pending, handlePending)
      .addCase(addUserWeight.rejected, handleRejected)
      .addCase(addFoodIntake.pending, handlePending)
      .addCase(addFoodIntake.rejected, handleRejected)
      .addCase(deleteFoodIntake.pending, handlePending)
      .addCase(deleteFoodIntake.rejected, handleRejected)
      .addCase(addWaterIntake.pending, handlePending)
      .addCase(addWaterIntake.rejected, handleRejected)
      .addCase(deleteWaterIntake.pending, handlePending)
      .addCase(deleteWaterIntake.rejected, handleRejected)
      .addCase(updateFoodIntake.pending, handlePending)
      .addCase(updateFoodIntake.rejected, handleRejected)
      .addCase(addUserAvatar.pending, handlePending)
      .addCase(addUserAvatar.rejected, handleRejected)
      .addCase(refreshRecommendedFood.pending, handlePending)
      .addCase(refreshRecommendedFood.rejected, handleRejected)
      .addCase(refreshRecommendedFood.fulfilled, (state, action) => {
        state.recommendedFood = action.payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const dataReducer = dataSlice.reducer;
