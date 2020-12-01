import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/containers/Router';
import {store} from './src/redux/store';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs(true);
const App = () => {
  // console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
