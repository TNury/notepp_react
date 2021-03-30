// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { 
  displayEditor,
  onEditorSetNoteId,
  onEditorSetNoteTitle,
  onEditorSetNoteBody
} from '../../../../Redux/actions/actions.js';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';


class NotesPrev extends React.Component {

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

    return(
      <>  
        <div onClick={ (event) => this.renderNote(event) } className="notes-prev">
          <p className="notes-prev__title">{title}</p>
          <p className="notes-prev__body">{body}</p>
          <div>
            <button onClick={ (event) => this.deleteNote(event) } className="notes-prev__button">
              <FontAwesomeIcon className="notes-prev__icon" icon={ faMinusCircle } />
            </button>
          </div>
        </div>
        <hr className="notes__line" />
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

export default connect(mapStoreToProps, mapDispatchToProps)(NotesPrev);


