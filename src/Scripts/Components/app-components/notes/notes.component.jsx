// REACT
import React from 'react';
// REDUX 
import { connect } from 'react-redux';
import { setNoteContent } from '../../../Redux/actions/actions.js';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// COMPONENTS
import { NotePrev } from './notePrev-component/notePrev.component.jsx';
// FIRESTORE DB
import { db } from '../../../Firebase/Firebase.utils.js';
// TEST


/*
=================================================================================

      You were working on the delete note button, but since that failed 
      miserably i suggest you work on that idea where you render textareas
      based on the note-prev you clicked.

=================================================================================

*/ 

class Notes extends React.Component {

  componentDidMount() {

    this.loadNotes(this.props.currentUser);
    
  }

  newNote(currentUser) {

    const notesRef = db.collection(`users/${currentUser.id}/notes`);
    const size = this.props.notesCollection.docs.length;


    notesRef.doc().set({
      id: size, 
      title: `${size}`, 
      body: ''
    })
    
    this.loadNotes(currentUser);
  }

  loadNotes(currentUser) {
    // NOTES DB REFERENCE
    const notesRef = db.collection(`users/${currentUser.id}/notes`).orderBy('id');

    // TESTING
    const notes = [];

    notesRef.get().then(notesCollection => {

      notesCollection.docs.forEach(doc => {

        let note = {
          id: doc.data().id,
          title: doc.data().title,
          body: doc.data().body
        }

        notes.push(note);
        this.props.setNoteContent(notes);
      })

    })
  }

  render() {
    return (
      <div className="notes">

      {

        this.props.notesCollection.docs.map(data => (
          <NotePrev key={data.id} id={data.id} title={data.title} body={data.body}/>
        ))
        
      }
    
        <button onClick={() => this.newNote(this.props.currentUser)} className="notes-create">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    )
  }
}

const mapStateToProps = (currentState) => ({
  currentUser: currentState.user.currentUser,
  notesCollection: currentState.notes.notesCollection
});

const mapDispatchToProps = (dispatch) => ({
  setNoteContent: content => (dispatch(setNoteContent(content)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);