// COMPONENTS
import {Button} from './button/button.jsx';
// FONTAWESOME LIBRARY DEFAULT ICON
import {
  faAngleDoubleRight, faStickyNote, 
  faSearch, faTint, faAddressCard,
  faSignOutAlt,faCogs
} from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
  return (
    <nav className="sidebar">
      {/* <Button text="Notepp" icon={faAngleDoubleRight}/> */}
      <Button text="Notes" icon={faStickyNote}/>
      <Button text="Search" icon={faSearch}/>
      <Button text="Themes" icon={faTint}/>
      <Button text="About" icon={faAddressCard}/>
      <Button text="Logout" icon={faSignOutAlt}/>
      <Button text="Configs" icon={faCogs}/>
    </nav>
  )
}


export {Sidebar};