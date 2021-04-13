// REACT
import React from 'react';
// REDUX 
import { connect } from 'react-redux';
import { displayEditor } from '../../../Redux/actions/editor-actions/editor-actions.js';
// FONTAWESOME ICON
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
// COMPONENTS
import Note from './note/note.jsx';
import { Button } from '../../reusable-components/button/button.jsx';

class NotesCollection extends React.Component {

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
      <div onClick={() => this.closeNote()} className="notes-collection">
        {
          notes.map(({ id, title, body }, index) => (
            <Note 
              key={index}
              drilledProps={{
                id: id,
                title: title,
                body: body
              }} 
            />
          ))
        }
        <Button type="button" handler={() => this.newNote() } text={null} modifier="_create" icon={ faPlusCircle } />
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

export default connect(mapStoreToProps, mapDispatchToProps)(NotesCollection);