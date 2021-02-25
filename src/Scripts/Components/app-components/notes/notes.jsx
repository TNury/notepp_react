// FONTAWESOME REACT LIBRARY COMPONENT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import {faPlus} from '@fortawesome/free-solid-svg-icons';


function Notes() {
  return (
    <div className="notes">
      <button className="notes-create">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>   
  )
}

export {Notes};