import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.js';

export const reducer = combineReducers({
  auth: authReducer,
});
