/**
 * Project: Flash NextGen
 * Root Component
 */

import React from 'react';
import {LogBox,ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import Configurestore from './redux/store';
import {AppNavigation} from './navigators';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreAllLogs();

const {store, persistor} = Configurestore();

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default Root;
