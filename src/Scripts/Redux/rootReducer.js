// REDUX FUNCTION
import { combineReducers } from 'redux';
// REDUCERS
import { user } from './reducers/user/userReducer.js';
import { notesCollection } from './reducers/notesCollection/notesCollectionReducer.js';
import { notesEditor } from './reducers/notesEditor/notesEditorReducer.js';
import { font } from './reducers/font/fontReducer.js';

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
  notesEditorReducer: notesEditor,
  fontReducer: font
});