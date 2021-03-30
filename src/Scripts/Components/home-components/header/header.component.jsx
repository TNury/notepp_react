// FIREBASE AUTH
import { auth } from '../../../Firebase/Firebase.utils.js';
// REDUX CONNECT
import { connect } from 'react-redux';
// REACT-ROUTER COMPONENTS
import { Link } from 'react-router-dom';


const Header = (props) => {

  const currentUser = props.reduxProps.currentUser;

  return (
    <header className="header">
      <nav className="header-nav">
        <Link className="header-nav__link header-nav__logo" to="/">Notepp</Link>
        { 
          currentUser 
          ?
          <>
            <button onClick={() => auth.signOut()} className="header-nav__button header-nav__item">Logout</button>
            <Link className="header-nav__link header-nav__item" to="/app">Go To App</Link>
          </>
          :
          <>
            <Link className="header-nav__link header-nav__item _left" to="/login">Login</Link>
            <Link className="header-nav__link header-nav__item" to="/login">Sign Up</Link>
          </>        
        }
      </nav>
    </header>
  )
}

const mapStateToProps = (currentState) => ({
  reduxProps: {
    currentUser: currentState.user.value
  }
})

export default connect(mapStateToProps)(Header);