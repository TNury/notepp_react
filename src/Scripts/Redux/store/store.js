// REDUX LIBRARIES
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// OUR ROOT REDUCER
import rootReducer from '../rootReducer.js';

const middlewares = [logger];

export const store = createStore(rootReducer);
