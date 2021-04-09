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
      <Button type="button" handler={null} text="Notes" modifier='' icon={ faStickyNote } />
      <Button type="button" handler={null} text="Search" modifier='' icon={ faSearch } />
      <Button type="button" handler={null} text="Themes" modifier='' icon={ faTint } />
      <Button type="button" handler={null} text="Dyslexia" modifier='' icon={ faEye } />
      <Button type="button" handler={null} text="About" modifier='' icon={ faAddressCard } />
      <Button type="button" handler={null} text="Logout" modifier='_bottom' icon={ faSignOutAlt } />
      <Button type="button" handler={null} text="Configs" modifier='' icon={ faCogs } />
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

