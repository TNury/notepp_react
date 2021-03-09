// REACT
import React from 'react';
// FONTAWESOME REACT LIBRARY COMPONENT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import {faPlus} from '@fortawesome/free-solid-svg-icons';
// COMPONENTS
import {NotePrev} from './notePrev-component/notePrev.component.jsx';
// FIRESTORE
import {db} from '../../../Firebase/Firebase.utils.js';


class Notes extends React.Component {
  constructor({currentUser}) {
    super();
    this.state = {
      showComponent: false
    }
    this.user = currentUser;
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({showComponent: true});
  }

  writeUserNotes() {
    db.collection(`${this.user.currentUser.uid}`).doc('Test').set({
      test: "Hiiii"
    });
  }

  render() {
    return (
      <div className="notes">
        <NotePrev />
        <NotePrev />
        <button className="notes-create">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    )
  }
}

export {Notes};