// FONTAWESOME REACT LIBRARY COMPONENT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import {faEdit} from '@fortawesome/free-solid-svg-icons';


function Note() {
  return (
    <div className="note">
      <button className="note-save">
        <FontAwesomeIcon icon={faEdit}/>
      </button>
    </div>
  )
}

export {Note};