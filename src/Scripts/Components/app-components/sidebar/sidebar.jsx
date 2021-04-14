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
import { faCaretSquareRight, faStickyNote, faSearch, faEye, faPalette, faAddressCard, faSignOutAlt, faCogs} from '@fortawesome/free-solid-svg-icons';

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
            <Button type="button" handler={null} text="Notes" modifier="" icon={ faStickyNote } />
          </div>
          <div className="sidebar-item">
            <Button type="button" handler={null} text="Search" modifier="" icon={ faSearch } />
          </div>
          <div className="sidebar-item">
            <Button type="button" handler={null} text="Dyslexia" modifier="" icon={ faEye } />
          </div>
          <div className="sidebar-item">
            <Button type="button" handler={null} text="Themes" modifier="" icon={ faPalette } />
          </div>
          <div className="sidebar-item">
            <Button type="button" handler={null} text="About" modifier="" icon={ faAddressCard } />
          </div>
          <div className="sidebar-item">
            <Button type="button" handler={() => logOut()} text="Logout" modifier="" icon={ faSignOutAlt } />
          </div>
          <div className="sidebar-item">
            <Button type="button" handler={null} text="Settings" modifier="" icon={ faCogs } />
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

