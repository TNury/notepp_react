// FONTAWESOME ICON LIBRARY COMPONENT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// FIREBASE AUTH
import {auth} from '../../../../Firebase/Firebase.utils.js';

function Button ({text, icon}) {
  return (
    <>
      <button className="sidebar-button">
        <FontAwesomeIcon className="sidebar-button__icon" icon={icon} />
        <span className="sidebar-button__text">{text}</span>
      </button>
    </>
  )
}

// {
//   text == "Logout"
//   ?
//   <button onClick={() => auth.signOut()} className="navbar-button">
//     <FontAwesomeIcon className="navbar-icon" icon={icon} />
//     <span className="navbar-text">{text}</span>
//   </button>
//   :
//   <button className="navbar-button">
//     <FontAwesomeIcon className="navbar-icon" icon={icon} />
//     <span className="navbar-text">{text}</span>
//   </button>
// }

export {Button};