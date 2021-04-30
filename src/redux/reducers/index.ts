import {combineReducers} from 'redux';
import authReducer from './authReducer';
import splashReducer from './splashReducer';

const rootReducer = combineReducers({
  splash: splashReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
