// REDUX CONNECT
import { connect } from 'react-redux';
// REACT-ROUTER COMPONENTS
import { Link } from 'react-router-dom';
// FONTAWESOME COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

  const isLoggedIn = props.reduxProps.currentUserProp;

  return (
    <header className="header">
      <nav className="navbar">
        <Link className="navbar__link navbar__logo" to="/">Notepp</Link>
      </nav>
    </header>
  )
}

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    currentUserProp: currentStore.userReducer.user
  }
})

export default connect(mapStoreToProps)(Header);