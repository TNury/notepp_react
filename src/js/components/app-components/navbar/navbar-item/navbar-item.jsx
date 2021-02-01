// LIBRARIES
import React from 'react-dom';
// COMPONENTS
import { Icon } from './navbar-item__icons/navbar-item__icons.jsx';


function NavbarItem ({text, icon}) {
  return (
    <div className="navbar-item">
      <button className="navbar-button">
        <svg xmlns="http://www.w3.org/2000/svg" className="navbar-icon" x="0px" y="0px" viewBox="2 2 59.82 60">
          <Icon icon={icon} />
        </svg>
        <span className="navbar-text">{text}</span>
      </button>
    </div>
  )
}

export { NavbarItem };