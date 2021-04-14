// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { displayEditor,  onEditorSetNoteTitle, onEditorSetNoteBody } from '../../../Redux/actions/editor-actions/editor-actions.js';
// FONTAWESOME COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME ICONS
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
// COMPONENTS
import { Button } from '../../reusable-components/button/button.jsx';

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

    event.target.className === 'noteEditor__title'
      ?
    onEditorSetNoteTitle(event.target.value)
      :
    onEditorSetNoteBody(event.target.value)
     
  }
  

  render() {

    const { display, title, body } = this.props.reduxProps.noteEditorProp;

    return (
      display
      ?
      <div className="noteEditor">
        <Button type="button" handler={() => this.closeNote()} modifier="" icon={ faTimesCircle } text={null} />

        <textarea 
          className="noteEditor__title" 
          placeholder="Title"
          value={title}
          onChange={(event) => this.handleChange(event)} 
        />  
      
        <textarea 
          className="noteEditor__body"           
          placeholder="Write here"
          value={body}
          onChange={(event) => this.handleChange(event)}  
        />

        <Button type="button" handler={() => this.saveNote()} modifier="_save" icon={ faEdit } text={null} />
      </div>
      :
      <></>
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
