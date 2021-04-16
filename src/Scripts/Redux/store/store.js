// REDUX LIBRARIES
import { createStore } from 'redux';
// OUR ROOT REDUCER
import rootReducer from '../rootReducer.js';
// REDUX DEV TOOLS
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools());
