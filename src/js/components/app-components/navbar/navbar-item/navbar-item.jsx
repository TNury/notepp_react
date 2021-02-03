// LIBRARIES
import React from 'react-dom';
// COMPONENTS
// import { Icon } from './navbar-item__icons/navbar-item__icons.jsx';


function NavbarItem ({text, icon}) {
  return (
    <div className="navbar-item">
      <button className="navbar-button">
        <i className={`navbar-icon fas ${icon}`}></i>
        <span className="navbar-text">{text}</span>
      </button>
    </div>
  )
}

export { NavbarItem };