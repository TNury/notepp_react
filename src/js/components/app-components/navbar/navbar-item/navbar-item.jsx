// LIBRARIES
import React from 'react-dom';
// COMPONENTS
import { Icon } from './navbar-item__icons/navbar-item__icons.jsx';


function NavbarItem ({text, icon}) {
  return (
    <div className="navbar-item">
      <button className="navbar-button">
        <svg className="navbar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 80" x="0px" y="0px">
          <Icon icon={icon} />
        </svg>
        <span className="navbar-text">{text}</span>
      </button>
    </div>
  )
}

export { NavbarItem };