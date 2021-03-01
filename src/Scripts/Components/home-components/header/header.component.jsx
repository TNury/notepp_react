// FIREBASE AUTH
import {auth} from '../../../Firebase/Firebase.utils.js';
// REACT-ROUTER COMPONENTS
import {Link} from 'react-router-dom';


const Header = ({currentUser}) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link className="header-nav__link header-nav__logo" to="/">Notepp</Link>
        {
          currentUser ? // if
            <>
              <button onClick={() => auth.signOut()} className="header-nav__button header-nav__item">Logout</button>
              <Link className="header-nav__link header-nav__item" to="/app">Go To App</Link>
            </>
          : // else
          <>
            <Link className="header-nav__link header-nav__item _left" to="/login">Login</Link>
            <Link className="header-nav__link header-nav__item" to="/login">Sign Up</Link>
          </>        
        }
      </nav>
    </header>
  )
}

export {Header};