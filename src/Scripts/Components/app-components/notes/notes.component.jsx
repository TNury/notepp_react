// REACT
import React from 'react';
// REDUX 
import { connect } from 'react-redux';
import { setNoteTitle, setNoteBody, setNotesCollection } from '../../../Redux/actions/actions.js';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// COMPONENTS
import { NotePrev } from './notePrev-component/notePrev.component.jsx';
// FIRESTORE
import { db } from '../../../Firebase/Firebase.utils.js';


class Notes extends React.Component {

  componentDidMount() {
    const docsRef = db.collection(this.props.user.uid);

    docsRef.get().then((docsArray => {
      const notes = this.props.notes;
      this.props.setNotesCollection(docsArray.docs);
    }))

    docsRef.doc('test').get().then(doc => {

      this.props.setNoteTitle(doc.data().title);
      this.props.setNoteBody(doc.data().body);

    })

    

  }

  render() {
    return (
      <div className="notes">
        <NotePrev title={this.props.title} body={this.props.body} />
        <button onClick={() => this.newNote()} className="notes-create">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    )
  }
}

const mapStateToProps = (currentState) => ({
  user: currentState.user.currentUser,
  notes: currentState.notes.notes,
  title: currentState.note.title,
  body: currentState.note.body
});

const mapDispatchToProps = (dispatch) => ({
  setNotesCollection: (notes) => dispatch(setNotesCollection(notes)),
  setNoteTitle: (title) => dispatch(setNoteTitle(title)),
  setNoteBody: (body) => dispatch(setNoteBody(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes);