// REACT-ROUTER COMPONENTS
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <nav className="home-navbar">
        <Link className="home-navbar__link home-navbar__logo" to="/">Notepp</Link>
        <Link className="home-navbar__link home-navbar__login" to="/login">Login</Link>
        <Link className="home-navbar__link home-navbar__login" to="/login">Sign Up</Link>
      </nav>
    </header>
  )
}

export {Header};