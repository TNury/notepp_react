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

class Notes extends React.Component {

  newNote() {

    const { notesCollection } = this.props.reduxProps;

    let id = 0;

    notesCollection.docs.forEach(() => {
      id++
    })

    notesCollection.ref.doc().set({
      id: id,
      title: 'New note',
      body: ''
    })

  }

  closeNote() {
    this.props.reduxActions.displayNote(false);
  }

  render() {
    const notes = this.props.reduxProps.notesCollection.docs;
    
    return (
      <div onClick={() => this.closeNote()} className="notes">
        {
          notes.map(({ id, title, body }, index) => (
            <NotesPrev 
              key={index}
              drilledProps={{
                id: id,
                title: title,
                body: body
              }} 
            />
          ))
        }
        <button onClick={() => this.newNote()} className="notes-create">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    )
  }
  
}

// PROPS
const mapStatesToProps = (currentState) => ({
  reduxProps: {
    currentUser: currentState.user.value,
    notesCollection: currentState.notes.notesCollection
  }
});

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    displayNote: boolean => dispatch(displayNote(boolean))
  }
});

export default connect(mapStatesToProps, mapDispatchToProps)(Notes);