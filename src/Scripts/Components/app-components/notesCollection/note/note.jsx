// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { 
  displayEditor,
  onEditorSetNoteId,
  onEditorSetNoteTitle,
  onEditorSetNoteBody
} from '../../../../Redux/actions/editor-actions/editor-actions.js';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';


class Note extends React.Component {

  // DELETE NOTE HANDLER
  deleteNote(event) {

    event.stopPropagation();

    const { notesCollectionProps } = this.props.reduxProps;
    const { id } = this.props.drilledProps;

    notesCollectionProps.ref.where('id', '==', id)
      .get()
      .then(({docs}) => {

        docs[0].ref.delete();

      })

    this.props.reduxActions.displayEditor(false);

  }

  // RENDER NOTE HANDLER
  renderNote(event) {

    event.stopPropagation();

    const { id, title, body } = this.props.drilledProps;
    const { 
      displayEditor,
      onEditorSetNoteId,
      onEditorSetNoteTitle,
      onEditorSetNoteBody
    } = this.props.reduxActions;

    displayEditor(true);
    onEditorSetNoteId(id);
    onEditorSetNoteTitle(title);
    onEditorSetNoteBody(body);

  }

  render() {

    const { title, body } = this.props.drilledProps;
    // REVIEW THE NECESSITY OF THE DIV ABOVE BUTTON
    return(
      <>  
        <div onClick={ (event) => this.renderNote(event) } className="note">
          <p className="note__title">{title}</p>
          <p className="note__body">{body}</p>
          {/* USE REUSABLE BUTTON COMPONENT HERE AS WELL */}
          <button onClick={ (event) => this.deleteNote(event) } className="button">
            <FontAwesomeIcon className="button__icon" icon={ faMinusCircle } />
          </button>
        </div>
        <hr className="notes__divider" />
      </>
    )
  }

}

// PROPS
const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    notesCollectionProps: currentStore.notesCollectionReducer.notesCollection
  }
})

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    displayEditor: boolean => dispatch(displayEditor(boolean)),
    onEditorSetNoteId: id => dispatch(onEditorSetNoteId(id)),
    onEditorSetNoteTitle: title => dispatch(onEditorSetNoteTitle(title)),
    onEditorSetNoteBody: body => dispatch(onEditorSetNoteBody(body)),
  }
})

export default connect(mapStoreToProps, mapDispatchToProps)(Note);


