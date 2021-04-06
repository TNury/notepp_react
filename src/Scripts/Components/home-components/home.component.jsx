import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS 
import { Main } from './main/main.component.jsx'

export const Home = () => {

  return (
    <div className="home">
      <div className="banner">
        <FontAwesomeIcon className="banner__icon" icon={faStickyNote} />
        <h1 className="banner__head">Welcome to Notepp!</h1>
      </div>
      <Main />
    </div>
  )
}