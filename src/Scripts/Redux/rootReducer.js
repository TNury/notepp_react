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

    1. Notepp.script.jsx
    2. header.component.jsx
    3. app.component.jsx
    4. notes.component.jsx
    5. notes-prev.component.jsx

  - notesCollection

    1. app.component.jsx
    2. notes.component.jsx
    3. note.component.jsx

  - noteEditor

    1. note.component.jsx
  
  - font:
  
    1. sidebar.component.jsx

================================================
*/


export default combineReducers ({
  userReducer: user,
  notesCollectionReducer: notesCollection,
  noteEditorReducer: noteEditor,
  fontReducer: font
});