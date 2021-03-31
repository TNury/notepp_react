// REDUX
import { connect } from 'react-redux';
// REDUX ACTIONS
import { setAppFont } from '../../../Redux/actions/customize-app-actions/customize-app-actions.js';
import { displayEditor } from '../../../Redux/actions/editor-actions/editor-actions.js';
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

    // const App = document.querySelector('.App').style;

    // if (props.currentFont === 'Gill Sans') {

    //   props.reduxActions.setAppFont('OpenDyslexic');

    //   App.fontFamily = props.reduxProps.currentFont;
    //   console.log(props.reduxProps.currentFont)

    // } else {

    //   props.reduxActions.setAppFont('Gill Sans');

    //   App.fontFamily = props.reduxProps.currentFont;
    //   console.log(props.reduxProps.currentFont)
    // }
    console.log('Fix this later');

  }

  function logOut() {

    props.reduxActions.displayEditor(false);
    auth.signOut();

  }
  
  return (
    <nav className="sidebar">
      <Button text="Notes" icon={ faStickyNote } />
      <Button text="Search" icon={ faSearch } />
      <Button text="Themes" icon={ faTint } />
      <Button handler={ () => dyslexia() } text="Dyslexia"  icon={ faEye } />
      <Button text="About" icon={ faAddressCard } />
      <Button handler={() => logOut()} text="Logout" icon={ faSignOutAlt } />
      <Button text="Configs" icon={ faCogs } />
    </nav>
  )
}

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    fontProp: currentStore.fontReducer.font
  }
})

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    setAppFont: font => dispatch(setAppFont(font)),
    displayEditor: boolean => dispatch(displayEditor(boolean))
  }
})


export default connect(mapStoreToProps, mapDispatchToProps)(Sidebar);

