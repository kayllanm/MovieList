/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/store/configureStore';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';

const store = configureStore();

const RNapp = () => (
  <Provider store={store}>
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNapp);
