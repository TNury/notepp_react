// LIBRARIES
import React from 'react-dom';
// COMPONENTS
import { NavbarItem } from './navbar-item/navbar-item.jsx';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <NavbarItem text="Notepp" icon="logo"/>
        <NavbarItem text="Notes" icon="notes"/>
        <NavbarItem text="Search" icon="search"/>
        <NavbarItem text="Themes" icon="themes"/>
        <NavbarItem text="Logout" icon="logout"/>
        <NavbarItem text="Configs" icon="configs"/>
      </div>
    </nav>
  )
}

export { Navbar };