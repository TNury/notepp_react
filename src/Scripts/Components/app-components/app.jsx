// COMPONENTS
import {Sidebar} from './sidebar/sidebar.jsx';
import {Notes} from './notes/notes.jsx';
import {Note} from './note/note.jsx';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Wrap">
        <Notes />
        <Note />
      </div>
    </div>
  );
}

export {App};
