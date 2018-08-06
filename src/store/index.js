import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import logger from 'redux-logger';

import refCombineReducers from '../reducers';

const refMiddlewares = applyMiddleware(logger);

const store = createStore(refCombineReducers, refMiddlewares);

export default store;

console.log(store.getState());

