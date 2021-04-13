// REACT
import React from 'react';
// FIREBASE
import { db } from '../../Firebase/Firebase.utils.js';
// REDUX
import { connect } from 'react-redux';
import { 
  setNotesCollection, 
  setNotesCollectionRef 
} from '../../Redux/actions/notes-collection-actions/notes-collection-actions.js';
// COMPONENTS
import Sidebar from './sidebar/sidebar.jsx';
import NotesCollection from './notesCollection/notesCollection.jsx';
import NoteEditor from './noteEditor/noteEditor.component.jsx';

class App extends React.Component {

  componentDidMount() {

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

  render() {
    return (
      <div className="app">
        <Sidebar />
        <NotesCollection />
        {/* <NoteEditor /> */}
      </div>
    )
  }
}

// PROPS
const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    currentUserProp: currentStore.userReducer.user
  }
})

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    setNotesCollection: notes => dispatch(setNotesCollection(notes)),
    setNotesCollectionRef: ref => dispatch(setNotesCollectionRef(ref))
  }
})


export default connect(mapStoreToProps, mapDispatchToProps)(App);