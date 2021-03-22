// REDUX 
import { connect } from 'react-redux';
import { setNoteContent } from '../../../Redux/actions/actions.js';
// FIRESTORE DB
import { db } from '../../../Firebase/Firebase.utils.js';


const loadNotesHandler = () => {
  console.log(db);
  // // NOTES DB REFERENCE
  // const notesRef = db.collection(`users/${this.props.currentUser.id}/notes`).orderBy('id');

  // // TESTING
  // const notes = [];

  // notesRef.get().then(notesCollection => {

  //   notesCollection.docs.forEach(doc => {

  //     let note = {
  //       id: doc.data().id,
  //       title: doc.data().title,
  //       body: doc.data().body
  //     }

  //     notes.push(note);
  //     this.props.setNoteContent(notes);
  //   })

  // })
}

const mapStateToProps = (currentState) => ({
  currentUser: currentState.user.currentUser,
  notesCollection: currentState.notes.notesCollection
});

const mapDispatchToProps = (dispatch) => ({
  setNoteContent: content => (dispatch(setNoteContent(content)))
});

export default connect(mapStateToProps, mapDispatchToProps)(loadNotesHandler);