// REDUX FUNCTION
import { combineReducers } from 'redux';
// OUR REDUCERS
import { userReducer } from './reducers/userReducer.js';
import { notesReducer } from './reducers/notesReducer.js';


export default combineReducers ({
  user: userReducer,
  notes: notesReducer
})