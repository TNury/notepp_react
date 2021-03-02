// FONTAWESOME ICON LIBRARY COMPONENT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// FIREBASE AUTH
import {auth} from '../../../../Firebase/Firebase.utils.js';

function Button ({text, icon, handler}) {
  return (
    <>
      <button onClick={handler} className="sidebar-button">
        <FontAwesomeIcon className="sidebar-button__icon" icon={icon} />
        <span className="sidebar-button__text">{text}</span>
      </button>
    </>
  )
}


export {Button};