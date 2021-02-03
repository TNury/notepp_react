// PROTO
import {Route} from 'react-router-dom';
// STYLES
import '../../Styles/css/app.css';
// COMPONENTS
import {Navbar} from './app-components/navbar/navbar.jsx';
import {Notes} from './app-components/notes/notes.jsx';
import {Note} from './app-components/note/note.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Wrap">
        <Notes />
        <Note />
      </div>
    </div>
  );
}

export {App};
