// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import { faEdit } from '@fortawesome/free-solid-svg-icons';


export const Note = () => {
  return (
    <div className="note">
      <textarea className="note__title" placeholder="Title"></textarea>
      <textarea className="note__body" placeholder="Write here"></textarea>
      <button className="note-save">
        <FontAwesomeIcon icon={ faEdit } />
      </button>
    </div>
  )
}
