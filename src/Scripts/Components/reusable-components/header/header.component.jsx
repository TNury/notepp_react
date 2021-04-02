// REDUX CONNECT
import { connect } from 'react-redux';
// REACT-ROUTER COMPONENTS
import { Link } from 'react-router-dom';
// FONTAWESOME COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

  const isLoggedIn = props.reduxProps.currentUserProp;
  const location = props.drilledProps.location;

  return (
    <header className="header">
      {
        location === 'login'
          ?
        <nav className="navbar _centralize">
          <Link className="navbar__link navbar__logo" to="/">Notepp</Link>
        </nav>
          :
        <nav className="navbar">
          <Link className="navbar__link navbar__logo" to="/">Notepp</Link>
          {
            isLoggedIn
              ?
            <Link className="navbar__link navbar-btn" to="/app">
              <FontAwesomeIcon className="navbar-btn__icon" icon={faDoorOpen} />
            </Link>
              :
            <Link className="navbar__link navbar-btn" to="/login">
              <FontAwesomeIcon className="navbar-btn__icon" icon={faSignInAlt} />
            </Link>
          }
        </nav>
      }
    </header>
  )
}

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    currentUserProp: currentStore.userReducer.user
  }
})

export default connect(mapStoreToProps)(Header);