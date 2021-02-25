// REACT-ROUTER COMPONENTS
import {Link} from 'react-router-dom';


const Header = ({currentUser}) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link className="header-nav__link header-nav__logo" to="/">Notepp</Link>
        {
          currentUser ?
            <button className="header-nav__button header-nav__item">Logout</button>
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

export {Header};