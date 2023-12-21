import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.js';
import { dataReducer } from './data.js';

export const reducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});
