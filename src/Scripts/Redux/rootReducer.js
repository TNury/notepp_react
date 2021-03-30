// REDUX FUNCTION
import { combineReducers } from 'redux';
// OUR REDUCERS
import { userReducer } from './reducers/userReducer.js';
import { notesCollection } from './reducers/notesCollectionReducer.js';
import { noteReducer } from './reducers/noteReducer.js';
import { fontReducer } from './reducers/fontReducer.js';



/*
===================================================
              COMPONENTS THAT USE
              
  - userReducer: 

    1. Notepp.script.jsx
    2. header.component.jsx
    3. app.component.jsx
    4. notes.component.jsx
    5. notes-prev.component.jsx

  - notesReducer

    1. app.component.jsx
    2. notes.component.jsx
    3. note.component.jsx

  - displayedNoteReducer

    1. 
  
  - fontReducer:
    1. sidebar.component.jsx

===================================================
*/


export default combineReducers ({
  user: userReducer,
  notes: notesCollection,
  note: noteReducer,
  font: fontReducer
})