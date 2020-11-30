import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './saga';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const store = createStore(reducers, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
