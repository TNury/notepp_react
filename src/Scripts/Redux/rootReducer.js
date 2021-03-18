// REDUX FUNCTION
import { combineReducers } from 'redux';
// OUR REDUCERS
import { userReducer } from './reducers/userReducer.js';
import { notesReducer } from './reducers/notesReducer.js';
import { noteReducer } from './reducers/noteReducer.js';


export default combineReducers ({
  user: userReducer,
  notes: notesReducer,
  note: noteReducer,
})