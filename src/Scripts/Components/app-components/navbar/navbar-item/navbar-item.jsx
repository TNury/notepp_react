// FONTAWESOME ICON LIBRARY COMPONENT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function NavbarItem ({text, icon}) {
  return (
    <div className="navbar-item">
      <button className="navbar-button">
        {/* <i className={`navbar-icon fas ${icon}`}></i> */}
        <FontAwesomeIcon className="navbar-icon" icon={icon}/>
        <span className="navbar-text">{text}</span>
      </button>
    </div>
  )
}

export {NavbarItem};