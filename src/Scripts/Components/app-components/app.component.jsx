import React from 'react';
// COMPONENTS
import { Sidebar } from './sidebar/sidebar.component.jsx';
import Notes from './notes/notes.component.jsx';
import { Note } from './note/note.component.jsx';


export const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="Wrap">
        <Notes />
        <Note />
      </div>
    </div>
  )
}


