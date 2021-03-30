// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { 
  displayNote, 
  setNoteId,
  setNoteTitle, 
  setNoteBody 
} from '../../../../Redux/actions/actions.js';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';


class NotesPrev extends React.Component {

  // DELETE NOTE HANDLER
  deleteNote(event) {

    event.stopPropagation();

    const { notesCollection } = this.props.reduxProps;
    const { id } = this.props.drilledProps;

    notesCollection.ref.where('id', '==', id)
      .get()
      .then(({docs}) => {

        docs[0].ref.delete();

      })

  }

  // RENDER NOTE HANDLER
  renderNote(event) {

    event.stopPropagation();

    const { id, title, body } = this.props.drilledProps;
    const { 
      displayNote, 
      setNoteId,
      setNoteTitle, 
      setNoteBody 
    } = this.props.reduxActions;

    displayNote(true);
    setNoteId(id);
    setNoteTitle(title);
    setNoteBody(body);

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
const mapStatesToProps = (currentState) => ({
  reduxProps: {
    notesCollection: currentState.notes.notesCollection
  }
})

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    displayNote: boolean => dispatch(displayNote(boolean)),
    setNoteId: id => dispatch(setNoteId(id)),
    setNoteTitle: title => dispatch(setNoteTitle(title)),
    setNoteBody: body => dispatch(setNoteBody(body)),
  }
})

export default connect(mapStatesToProps, mapDispatchToProps)(NotesPrev);


