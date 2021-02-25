// COMPONENTS
import {NavbarItem} from './navbar-item/navbar-item.jsx';
// FONTAWESOME LIBRARY DEFAULT ICON
import {
  faAngleDoubleRight, faStickyNote, 
  faSearch, faTint, faAddressCard,
  faSignOutAlt,faCogs
} from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <NavbarItem text="Notepp" icon={faAngleDoubleRight}/>
        <NavbarItem text="Notes" icon={faStickyNote}/>
        <NavbarItem text="Search" icon={faSearch}/>
        <NavbarItem text="Themes" icon={faTint}/>
        <NavbarItem text="About" icon={faAddressCard}/>
        <NavbarItem text="Logout" icon={faSignOutAlt}/>
        <NavbarItem text="Configs" icon={faCogs}/>
      </div>
    </nav>
  )
}

export {Navbar};