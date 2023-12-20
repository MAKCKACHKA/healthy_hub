export const selectToken = (state) => state.auth.token;

export const selectUserStatistics = (state) => state.data.statistics;

export const selectUserData = (state) => state.data.data;

export const selectUserMeals = (state) => state.data.data.consumedMealsByDay;

export const selectDailyNutrition = (state) => state.data.data.dailyNutrition;
