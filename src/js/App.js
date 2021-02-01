// STYLES
import '../styles/css/App.css';
// COMPONENTS
import { Navbar } from './components/app-components/navbar/navbar.jsx';
import { Notes } from './components/app-components/notes/notes.jsx';
import { Note } from './components/app-components/note/note.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Notes />
    </div>
  );
}

export { App };
