// FONTAWESOME ICON LIBRARY COMPONENT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {auth} from '../../../../Firebase/Firebase.utils.js';

function NavbarItem ({text, icon}) {
  return (
    <div className="navbar-item">
      <button onClick={() => auth.signOut()} className="navbar-button">
        <FontAwesomeIcon className="navbar-icon" icon={icon}/>
        <span className="navbar-text">{text}</span>
      </button>
    </div>
  )
}

export {NavbarItem};