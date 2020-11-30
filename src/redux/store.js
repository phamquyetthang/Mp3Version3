import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import {fetchAsyncWatch} from './saga';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk];
export const store = createStore(reducers, applyMiddleware(...middleware));
sagaMiddleware.run(fetchAsyncWatch);
