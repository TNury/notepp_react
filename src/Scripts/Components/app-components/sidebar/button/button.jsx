// FONTAWESOME ICON LIBRARY COMPONENT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// FIREBASE AUTH
import {auth} from '../../../../Firebase/Firebase.utils.js';

function Button ({text, icon}) {
  return (
    <>
      {
        text == "Logout"
        ?
        <button onClick={() => auth.signOut()} className="sidebar-button">
          <FontAwesomeIcon className="sidebar-button__icon" icon={icon} />
          <span className="sidebar-button__text">{text}</span>
        </button>
        :
        <button className="sidebar-button">
          <FontAwesomeIcon className="sidebar-button__icon" icon={icon} />
          <span className="sidebar-button__text">{text}</span>
        </button>
      }
    </>
  )
}


export {Button};