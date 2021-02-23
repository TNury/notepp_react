// REACT-ROUTER COMPONENTS
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <nav className="home-navbar">
        <Link className="home-navbar__link home-navbar__logo" to="/">Notepp</Link>
        <Link className="home-navbar__link" to="/about">About</Link>
        <button className="home-navbar__link home-navbar__login">Sign in with Google</button>
      </nav>
    </header>
  )
}

export {Header};