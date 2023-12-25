import { combineReducers } from 'redux';
import { authReducer } from './Slices/auth.js';
import { dataReducer } from './Slices/data.js';

export const reducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});
