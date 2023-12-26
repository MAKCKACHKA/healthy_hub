export const selectToken = (state) => state.auth.token;

export const selectUserStatistics = (state) => state.data.statistics;

export const selectIsLoadData = (state) => state.data.isLoading;
export const selectIsLoadAuth = (state) => state.auth.isLoading;

export const selectUserData = (state) => state.data.data;

export const selectUserMeals = (state) => state.data.data.consumedMealsByDay;

export const selectDailyNutrition = (state) =>
  state.data.data.user.dailyNutrition;

export const selectRecFood = (state) => state.data.recommendedFood;
