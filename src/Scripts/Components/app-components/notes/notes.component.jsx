// REACT
import React from 'react';
// REDUX 
import { connect } from 'react-redux';
import { setNotesCollection } from '../../../Redux/actions/actions.js';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// COMPONENTS
import NotePrev from './notePrev-component/notePrev.component.jsx';
// FIRESTORE DB
import { db } from '../../../Firebase/Firebase.utils.js';

/*
  For some reason this classe's methods can't access the keyword 'this',
  so i'm passing props to them through arguments.
*/

class Notes extends React.Component {

  componentDidMount() {
    this.loadNotes(this.props);
  }

  newNote(props) {

    const notesRef = db.collection(`users/${props.currentUser.displayName}/notes`);

    let id = 0;

    props.notesCollection.docs.forEach(() => {
      id++
    });

    notesRef.doc().set({
      id: id, 
      title: `${id}`, 
      body: '',
      isNote: true
    });
    
  }

  loadNotes(props) {
    
    const notesRef = db.collection(`users/${props.currentUser.displayName}/notes`).orderBy('id');

    notesRef.where('isNote', '==', true).onSnapshot(({docs}) => {
      props.setNotesCollection(docs);
    })
   
  }

  render() {
    return (
      <div className="notes">
        {
          this.props.notesCollection.docs.map((doc, index) => (
            <NotePrev 
              key={index}
              currentUser={this.props.currentUser} 
              id={doc.data().id} 
              title={doc.data().title} 
              body={doc.data().body} 
            />
          ))
        }
        <button onClick={ () => this.newNote(this.props) } className="notes-create">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    )
  }
}

// PROPS
const mapStatesToProps = (currentState) => ({
  currentUser: currentState.user.currentUser,
  notesCollection: currentState.notes.notesCollection
});

export default connect(mapStatesToProps, { setNotesCollection })(Notes);