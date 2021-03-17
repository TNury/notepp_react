// REACT
import React from 'react';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// COMPONENTS
import { NotePrev } from './notePrev-component/notePrev.component.jsx';
// FIRESTORE
import { db } from '../../../Firebase/Firebase.utils.js';


class Notes extends React.Component {
  constructor({user}) {
    super();
    this.state = {
      collection: db.collection(user.uid),
      // notesData: [],
      // noteNumber: 0,
      title: '',
      body: ''
    };
  }

  componentDidMount() {

    // const notes = [];

    // this.state.collection.get().then(notesArray => {

    //   notesArray.forEach(note => {

    //     notes.push({title: note.data().title, body: note.data().body});
    //     this.setState({notesData: notes});
  
    //   })
  
    // })
  }

  handleNoteChange() {

    const title = document.querySelector('.note__title');
    const body = document.querySelector('.note__body');


    title.addEventListener('keydown', (event) => {
      this.setState({ title: event.target.value })
    })

    body.addEventListener('keydown', (event) => {
      this.setState({ body: event.target.value })
    })

  }

  componentWillUnmount() {
    this.setState({ title: '', body: '' })
  }

  newNote() {
    
  }

  render() {
    return (
      <div className="notes">
        {/* {this.state.notesData.map((note, index) => ( */}
          <NotePrev title='Lorem Ipsum' body='Lorem Ipsum dolor sit amet'/>
          <NotePrev title='Lorem Ipsum' body='Lorem Ipsum dolor sit amet'/>
        {/* ))} */}
        <button onClick={() => this.newNote()} className="notes-create">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    )
  }
}

export {Notes};