// REACT-ROUTER COMPONENTS
import { Link } from 'react-router-dom';
// FONTAWESOME COMPONENTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link className="logo__text" to="/">Notepp</Link>
          <span className="logo__line"></span>
          <FontAwesomeIcon className="logo__pencil" icon={ faPencilAlt } />
        </div>
      </nav>
    </header>
  )
}
