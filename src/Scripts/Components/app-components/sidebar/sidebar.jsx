// REDUX
import { connect } from 'react-redux';
// REDUX ACTIONS
import { setAppFont } from '../../../Redux/actions/customize-app-actions/customize-app-actions.js';
import { displayEditor } from '../../../Redux/actions/editor-actions/editor-actions.js';
// COMPONENTS
import { Button } from '../../reusable-components/button/button.jsx';
// FIREBASE AUTH
import { auth } from '../../../Firebase/Firebase.utils.js';
// FONTAWESOME ICON
import { faStickyNote, faSearch, faEye, faPalette, faAddressCard, faSignOutAlt, faCogs} from '@fortawesome/free-solid-svg-icons';

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
      <nav className="sidebar-wrap">
        <div className="sidebar">
          <div className="sidebar-item">
          <Button handler={ null }  icon={faStickyNote} modifier={ null } text="Notes" type="button" />
          </div>
          <div className="sidebar-item">
            <Button handler={ null }   icon={ faSearch } modifier={ null } text="Search" type="button" />
          </div>
          <div className="sidebar-item">
            <Button handler={ null }   icon={ faEye } modifier={ null } text="Dyslexia" type="button" />
          </div>
          <div className="sidebar-item">
            <Button handler={ null }   icon={ faPalette } modifier={ null } text="Themes" type="button" />
          </div>
          <div className="sidebar-item">
            <Button handler={ null }   icon={ faAddressCard } modifier={ null } text="About" type="button" />
          </div>
          <div className="sidebar-item">
            <Button handler={ null } icon={ faSignOutAlt }  modifier={ null } text="Logout"  type="button" />
          </div>
          <div className="sidebar-item">
            <Button handler={ null } icon={ faCogs } modifier={ null } text="Settings" type="button" />
          </div>
        </div>
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

