import {combineReducers} from 'redux';
import authReducer from './authReducer';
import splashReducer from './splashReducer';
import deepReducer from './deepReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
  splash: splashReducer,
  auth: authReducer,
  deep: deepReducer,
  event: eventReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
