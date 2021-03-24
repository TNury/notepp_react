// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { setNotesCollection } from '../../../../Redux/actions/actions.js';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
// FIREBASE DB
import { db } from '../../../../Firebase/Firebase.utils.js';


const NotePrev = ({id, currentUser, title, body}) => {

  function deleteNote() {

    const notesRef = db.collection(`users/${currentUser.displayName}/notes`);

    notesRef.where('id', '==', id)
      .get()
      .then((query) => {

        query.docs.forEach((doc) => {
          doc.ref.delete();
        })

      })
  
  }

  return(
    <>
      <div className="notes-prev">
        <p className="notes-prev__title">{ title }</p>
        <p className="notes-prev__body">{ body }</p>
        <button onClick={ deleteNote } className="notes-prev__button">
          <FontAwesomeIcon className="notes-prev__icon" icon={ faMinusCircle } />
        </button>
      </div>
      <hr className="notes__line" />
    </>
  )
}


export default connect(null, { setNotesCollection })(NotePrev);




