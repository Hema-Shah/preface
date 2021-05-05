import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from '../reducers';
import sagas from '../sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth','deep'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const loggerMiddleware = createLogger({predicate: () => __DEV__});
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    persistedReducer,
    applyMiddleware(loggerMiddleware, sagaMiddleware),
  );

  let persistor = persistStore(store);
  sagaMiddleware.run(sagas);

  return {store, persistor};
};
