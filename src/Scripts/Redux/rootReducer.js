// REDUX FUNCTION
import { combineReducers } from 'redux';
// OUR REDUCERS
import { user } from './reducers/userReducer.js';
import { notesCollection } from './reducers/notesCollectionReducer.js';
import { noteEditor } from './reducers/noteEditorReducer.js';
import { font } from './reducers/fontReducer.js';



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
  userReducer: user,
  notesCollectionReducer: notesCollection,
  noteEditorReducer: noteEditor,
  fontReducer: font
});