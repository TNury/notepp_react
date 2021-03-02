// FONTAWESOME REACT LIBRARY COMPONENT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import {faPlus} from '@fortawesome/free-solid-svg-icons';
// COMPONENTS
import {NotePrev} from './notePrev-component/notePrev.component.jsx';


function Notes() {
  return (
    <div className="notes">
      {/* <NotePrev /> */}
      <button className="notes-create">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}

export {Notes};