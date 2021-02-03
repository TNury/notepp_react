// FIREBASE

// import { auth, firestore } from './Firebase/firebase.utils.js';

// STYLES
import '../styles/css/App.css';
// COMPONENTS
import { Navbar } from './Components/app-components/navbar/navbar.jsx';
import { Notes } from './Components/app-components/notes/notes.jsx';
import { Note } from './Components/app-components/note/note.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Notes />
        <Note />
      </main>
    </div>
  );
}

export { App };
