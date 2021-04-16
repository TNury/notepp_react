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
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {

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
      <nav className="navbar">
        <div className="navbar-components">
          <Button type="button" handler={null} text={null} modifier="" icon={ faBars } />
          {/* <PLACEHOLDER> */}
          <div className="logo">
            <span>Notepp</span>
          </div>
          {/* </PLACEHOLDER> */}
          <Button type="button" handler={null} text={null} modifier="" icon={ faSearch } />
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


export default connect(mapStoreToProps, mapDispatchToProps)(Navbar);

