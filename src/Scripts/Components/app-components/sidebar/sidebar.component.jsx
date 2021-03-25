// REDUX
import { connect } from 'react-redux';
import { setAppFont } from '../../../Redux/actions/actions.js';
// COMPONENTS
import { Button } from './button/button.component.jsx';
// FIREBASE AUTH
import { auth } from '../../../Firebase/Firebase.utils.js';
// FONTAWESOME LIBRARY DEFAULT ICON
import {
  faEye,faStickyNote, faSearch, faTint, 
  faAddressCard, faSignOutAlt, faCogs
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props) => {

  function dyslexia() {

    const App = document.querySelector('.App').style;

    if (props.currentFont === 'Gill Sans') {

      props.setAppFont('OpenDyslexic');

      App.fontFamily = props.currentFont;

    } else {

      props.setAppFont('Gill Sans');
      App.fontFamily = props.currentFont;
      
    }

  }
  
  return (
    <nav className="sidebar">
      <Button text="Notes" icon={ faStickyNote } />
      <Button text="Search" icon={ faSearch } />
      <Button text="Themes" icon={ faTint } />
      <Button handler={ () => dyslexia() } text="Dyslexia"  icon={ faEye } />
      <Button text="About" icon={ faAddressCard } />
      <Button handler={() => auth.signOut()} text="Logout" icon={ faSignOutAlt } />
      <Button text="Configs" icon={ faCogs } />
    </nav>
  )
}

const mapStateToProps = (currentState) => ({
  currentFont: currentState.font.currentFont
})


export default connect(mapStateToProps, { setAppFont })(Sidebar);

