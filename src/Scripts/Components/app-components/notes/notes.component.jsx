// REACT
import React from 'react';
// REDUX 
import { connect } from 'react-redux';
import { displayNote } from '../../../Redux/actions/actions.js';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// COMPONENTS
import NotesPrev from './notesPrev-component/notesPrev.component.jsx';
// FIRESTORE DB
import { db } from '../../../Firebase/Firebase.utils.js';

/*
  For some reason this classe's methods can't access the keyword 'this',
  so i'm passing props to them through arguments.
*/

const Notes = (props) => {

  const { currentUser, userNotes} = props.reduxProps;
  const { displayNote } = props.reduxActions; 

  // KEEP AN EYE ON THIS 
  // (function test() {
  //   if (Object.keys(userNotes).length === 0) {
  //     return
  //   } else {
  //     userNotes.get().then(data => console.log(data))
  //   }
  // })()

  if (Object.keys(userNotes).length === 0) {
    return
  } else {
    userNotes.get().then(data => console.log(data))
  }

  function newNote() {

    const notesRef = db.collection(`users/${currentUser.displayName}/notes`);

    let id = 0;

    userNotes.docs.forEach(() => {
      id++
    });

    notesRef.doc().set({
      id: id, 
      title: `${id}`, 
      body: '',
      isNote: true
    });
    
  }

  function closeNote() {
    displayNote(false);
  }


  return (
    <div onClick={() => closeNote()} className="notes">
      {/* {
        userNotes.docs.map((doc, index) => (
          <NotesPrev 
            key={index}
            drilledProps={{
              id: doc.data().id,
              title: doc.data().title,
              body: doc.data().body
            }}
          />
        ))
      } */}
      <button onClick={() => newNote()} className="notes-create">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}

// PROPS
const mapStatesToProps = (currentState) => ({
  reduxProps: {
    currentUser: currentState.user.value,
    userNotes: currentState.notes.notesCollection
  }
});

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    displayNote: note => dispatch(displayNote(note))
  }
});

export default connect(mapStatesToProps, mapDispatchToProps)(Notes);