import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import Router from './src/containers/Router';
import {store} from './src/redux/store';
import {LogBox} from 'react-native';

const App = () => {
  // console.disableYellowBox = true;
  useEffect(() => {
    LogBox.ignoreAllLogs(true);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
