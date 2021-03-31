// REACT
import React from 'react';
// REDUX 
import { connect } from 'react-redux';
import { displayEditor } from '../../../Redux/actions/editor-actions/editor-actions.js';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// COMPONENTS
import NotesPrev from './notesPrev-component/notesPrev.component.jsx';

class Notes extends React.Component {

  newNote() {

    const { notesCollectionProps } = this.props.reduxProps;

    let id = 0;

    notesCollectionProps.docs.forEach(() => {
      id++
    })

    notesCollectionProps.ref.doc().set({
      id: id,
      title: 'New note',
      body: ''
    })

  }

  closeNote() {
    this.props.reduxActions.displayEditor(false);
  }

  render() {
    const notes = this.props.reduxProps.notesCollectionProps.docs;
    
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
const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    notesCollectionProps: currentStore.notesCollectionReducer.notesCollection
  }
});

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    displayEditor: boolean => dispatch(displayEditor(boolean))
  }
});

export default connect(mapStoreToProps, mapDispatchToProps)(Notes);