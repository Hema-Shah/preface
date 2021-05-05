import {combineReducers} from 'redux';
import authReducer from './authReducer';
import splashReducer from './splashReducer';
import deepReducer from './deepReducer';

const rootReducer = combineReducers({
  splash: splashReducer,
  auth: authReducer,
  deep: deepReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
