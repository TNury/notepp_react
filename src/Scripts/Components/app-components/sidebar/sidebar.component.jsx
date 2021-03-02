// COMPONENTS
import {Button} from './button/button.component.jsx';
// FIREBASE AUTH
import {auth} from '../../../Firebase/Firebase.utils.js';
// HANDLERS
import {dyslexia} from '../handlers/dyslexia.js';
// FONTAWESOME LIBRARY DEFAULT ICON
import {
  faEye,faStickyNote, faSearch, faTint, 
  faAddressCard, faSignOutAlt, faCogs
} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <nav className="sidebar">
      <Button text="Notes" icon={faStickyNote}/>
      <Button text="Search" icon={faSearch}/>
      <Button text="Themes" icon={faTint}/>
      <Button handler={() => dyslexia()} text="Dyslexia" icon={faEye}/>
      <Button text="About" icon={faAddressCard}/>
      <Button handler={() => auth.signOut()} text="Logout" icon={faSignOutAlt}/>
      <Button text="Configs" icon={faCogs}/>
    </nav>
  )
}


export {Sidebar};