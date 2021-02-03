// LIBRARIES
import React from 'react-dom';
// COMPONENTS
import { NavbarItem } from './navbar-item/navbar-item.jsx';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <NavbarItem text="Notepp" icon="fa-angle-double-right"/>
        <NavbarItem text="Notes" icon="fa-sticky-note"/>
        <NavbarItem text="Search" icon="fa-search"/>
        <NavbarItem text="Themes" icon="fa-tint"/>
        <NavbarItem text="About" icon="fa-address-card"/>
        <NavbarItem text="Logout" icon="fa-sign-out-alt"/>
        <NavbarItem text="Configs" icon="fa-cogs"/>
      </div>
    </nav>
  )
}

// <i class="fas fa-edit"></i>



export { Navbar };