/**
 * Project: Flash NextGen
 * Root Component
 */

import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import Configurestore from './redux/store';
import {AppNavigation} from './navigators';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreAllLogs();

const {store, persistor} = Configurestore();

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default Root;
