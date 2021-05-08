/**
 * Project: Flash NextGen
 * Root Component
 */

import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import Configurestore from './redux/store';
import {AppNavigation} from './navigators';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreAllLogs();

const {store, persistor} = Configurestore();

const Root = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <PersistGate loading={false} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
};

export default Root;
