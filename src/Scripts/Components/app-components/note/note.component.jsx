// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { 
  displayEditor, 
  onEditorSetNoteTitle, 
  onEditorSetNoteBody 
} from '../../../Redux/actions/editor-actions/editor-actions.js';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

// STUDY FIRESTORE ref PROPERTY, THIS IS THE KEY FOR SOMETHING BIG


class Note extends React.Component {

  closeNote() {
    this.props.reduxActions.displayEditor(false);
  }

  saveNote() {

    const { notesCollectionProps } = this.props.reduxProps;
    const { id, title, body } = this.props.reduxProps.noteEditorProp;

    notesCollectionProps.ref.where('id', '==', id)
    .get()
    .then((note) => {
      note.docs[0].ref.update({
        title: title,
        body: body
      })
    })

  }

  handleChange(event) {

    const { onEditorSetNoteTitle, onEditorSetNoteBody } = this.props.reduxActions;

    event.target.className === 'note__title'
      ?
    onEditorSetNoteTitle(event.target.value)
      :
    onEditorSetNoteBody(event.target.value)
     
  }
  

  render() {

    const { display, title, body } = this.props.reduxProps.noteEditorProp;

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

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    noteEditorProp: currentStore.noteEditorReducer.noteEditor,
    notesCollectionProps: currentStore.notesCollectionReducer.notesCollection
  }
})

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    displayEditor: boolean => dispatch(displayEditor(boolean)),
    onEditorSetNoteTitle: title => dispatch(onEditorSetNoteTitle(title)),
    onEditorSetNoteBody: body => dispatch(onEditorSetNoteBody(body)),
  }
})

export default connect(mapStoreToProps, mapDispatchToProps)(Note);
