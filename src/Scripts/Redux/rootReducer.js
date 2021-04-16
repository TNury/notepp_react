// REDUX FUNCTION
import { combineReducers } from 'redux';
// OUR REDUCERS
import { user } from './reducers/userReducer.js';
import { notesCollection } from './reducers/notesCollectionReducer.js';
import { noteEditor } from './reducers/noteEditorReducer.js';
import { font } from './reducers/fontReducer.js';



/*
================================================
        REDUCERS AND IN WHICH COMPONENTS                 
              THEY ARE BEING USED       
              
  - user: 

    1. Notepp.jsx
    2. header.jsx
    3. app.jsx
    4. notes.jsx
    5. notes-prev.jsx

  - notesCollection

    1. app.jsx
    2. notes.jsx
    3. note.jsx

  - noteEditor

    1. note.jsx
  
  - font:
  
    1. sidebar.jsx

================================================
*/


export default combineReducers ({
  userReducer: user,
  notesCollectionReducer: notesCollection,
  noteEditorReducer: noteEditor,
  fontReducer: font
});