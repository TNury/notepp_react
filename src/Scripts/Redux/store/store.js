// REDUX LIBRARIES
import { createStore } from 'redux';
// OUR ROOT REDUCER
import rootReducer from '../rootReducer.js';
// REDUX DEV TOOLS
import { composeWithDevTools } from 'redux-devtools-extension';

// const middlewares = [];

export const store = createStore(rootReducer, composeWithDevTools());
