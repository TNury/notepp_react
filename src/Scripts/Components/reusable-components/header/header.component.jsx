// REACT-ROUTER COMPONENTS
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <header className="header">
      <nav className="navbar">
        <Link className="navbar__link navbar__logo" to="/">Notepp</Link>
      </nav>
    </header>
  )
}
