import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import Router from './src/containers/Router';
import rootReducer from './src/redux/reducers';
const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));
const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
