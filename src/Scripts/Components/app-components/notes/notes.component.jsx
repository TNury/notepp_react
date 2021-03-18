// REACT
import React from 'react';
// REDUX 
import { connect } from 'react-redux';
import { setNoteTitle, setNoteBody } from '../../../Redux/actions/actions.js';
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

    const title = document.querySelector('.note__title');
    const body = document.querySelector('.note__body');
    
    title.addEventListener('keyup', () => {
      this.props.setNoteTitle(`${title.value}`);
    })

    body.addEventListener('keyup', () => {
      this.props.setNoteBody(`${body.value}`);
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
  title: currentState.note.currentTitle,
  body: currentState.note.currentBody
});

const mapDispatchToProps = (dispatch) => ({
  setNoteTitle: title => dispatch(setNoteTitle(title)),
  setNoteBody: body => dispatch(setNoteBody(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes);