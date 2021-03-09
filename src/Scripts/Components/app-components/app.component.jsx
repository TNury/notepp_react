// COMPONENTS
import {Sidebar} from './sidebar/sidebar.component.jsx';
import {Notes} from './notes/notes.component.jsx';
import {Note} from './note/note.component.jsx';


function App(currentUser) {
  return (
    <div className="App">
      <Sidebar />
      <div className="Wrap">
        <Notes currentUser={currentUser}/>
        <Note />
      </div>
    </div>
  );
}

export {App};
