// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { displayNote, setNoteTitle, setNoteBody } from '../../../Redux/actions/actions.js';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

// STUDY FIRESTORE ref PROPERTY, THIS IS THE KEY FOR SOMETHING BIG


class Note extends React.Component {

  closeNote() {
    this.props.reduxActions.displayNote(false);
  }

  saveNote() {

    const { notesCollection } = this.props.reduxProps;
    const { id, title, body } = this.props.reduxProps.openedNote;

    notesCollection.ref.where('id', '==', id)
    .get()
    .then((note) => {
      note.docs[0].ref.update({
        title: title,
        body: body
      })
    })

  }

  handleChange(event) {

    const { setNoteTitle, setNoteBody } = this.props.reduxActions;

    event.target.className === 'note__title'
      ?
    setNoteTitle(event.target.value)
      :
    setNoteBody(event.target.value)
     
  }
  

  render() {

    const { display, title, body } = this.props.reduxProps.openedNote;

    return (
      <div className="note">

        { 
          display
          ?
          <>

            <button onClick={ () => this.closeNote() } className="note-close">
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>

            <textarea 
              className="note__title" 
              placeholder="Title"
              value={title}
              onChange={(event) => this.handleChange(event)} 
            />  
          
            <textarea 
              className="note__body"           
              placeholder="Write here"
              value={body}
              onChange={(event) => this.handleChange(event)}  
            />

          </>
          :
          <></>
        }
        
        <button onClick={() => this.saveNote()} className="note-save">
          <FontAwesomeIcon icon={ faEdit } />
        </button>
      </div>
    )
  }

 
}

const mapStateToProps = (currentState) => ({
  reduxProps: {
    openedNote: currentState.note.openedNote,
    notesCollection: currentState.notes.notesCollection
  }
})

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    displayNote: boolean => dispatch(displayNote(boolean)),
    setNoteTitle: title => dispatch(setNoteTitle(title)),
    setNoteBody: body => dispatch(setNoteBody(body))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Note);
