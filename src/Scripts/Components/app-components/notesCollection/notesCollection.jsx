// REACT
import React from 'react';
// REDUX 
import { connect } from 'react-redux';
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

  render() {
    const notes = this.props.reduxProps.notesCollectionProps.docs;
    
    return (
      <div className='notes-collection'>
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
        {/* <div className="button-wrap">
          <Button type="button" handler={() => this.newNote()} text={null} modifier="" icon={faPlusCircle} />
        </div> */}
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

export default connect(mapStoreToProps)(NotesCollection);