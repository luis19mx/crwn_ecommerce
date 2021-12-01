import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

import rootSaga from './root-saga';

import rootReducer from './';

const saga = createSagaMiddleware();

const middlewares = [saga];

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

saga.run(rootSaga);

export const persistor = persistStore(store);
