// REACT
import React from 'react';
// FIREBASE
import { db } from '../../Firebase/Firebase.utils.js';
// REDUX
import { connect } from 'react-redux';
import { setNotesCollection, setNotesCollectionRef } from '../../Redux/actions/notes-collection-actions/notes-collection-actions.js';
// COMPONENTS
import Sidebar from './sidebar/sidebar.jsx';
import NotesCollection from './notesCollection/notesCollection.jsx';
import NoteEditor from './noteEditor/noteEditor.jsx';

class App extends React.Component {

  componentDidMount() {

    // this.detectDevice();

    const { currentUserProp } = this.props.reduxProps;
    const { setNotesCollection, setNotesCollectionRef } = this.props.reduxActions;

    const notesRef = db.collection(`users/${currentUserProp.uid}/notes`);

    setNotesCollectionRef(notesRef);

    notesRef.orderBy('id').onSnapshot(({docs}) => {

      const notes = [];

      docs.forEach((doc) => {
        notes.push(doc.data());
      })

      setNotesCollection(notes);

    });

  }

  detectDevice() {

    if (/Mobi|Android/i.test(navigator.userAgent)) {


    } else {


    }

  }

  render() {

    const displayEditor = this.props.reduxProps.noteEditorProp.display;

    return (
      <div className="app">
        <Sidebar />
        <NotesCollection />
        {
          displayEditor
          ?
          <NoteEditor />
          :
          <></>
        }
      </div>
    )
  }
}

// PROPS
const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    currentUserProp: currentStore.userReducer.user,
    noteEditorProp: currentStore.noteEditorReducer.noteEditor,
  }
})

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    setNotesCollection: notes => dispatch(setNotesCollection(notes)),
    setNotesCollectionRef: ref => dispatch(setNotesCollectionRef(ref))
  }
})


export default connect(mapStoreToProps, mapDispatchToProps)(App);