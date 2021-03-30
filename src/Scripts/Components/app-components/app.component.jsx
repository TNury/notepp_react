// REACT
import React from 'react';
// FIREBASE
import { db } from '../../Firebase/Firebase.utils.js';
// REDUX
import { connect } from 'react-redux';
import { setNotesCollection, setNotesCollectionRef } from '../../Redux/actions/actions.js';
// COMPONENTS
import Sidebar from './sidebar/sidebar.component.jsx';
import Notes from './notes/notes.component.jsx';
import Note from './note/note.component.jsx';


class App extends React.Component {

  componentDidMount() {

    const { currentUserProp } = this.props.reduxProps;
    const { setNotesCollection, setNotesCollectionRef } = this.props.reduxActions;

    const notesRef = db.collection(`users/${currentUserProp.displayName}/notes`);

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
      <div className="App">
        <Sidebar />
        <div className="Wrap">
          <Notes />
          <Note />
        </div>
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