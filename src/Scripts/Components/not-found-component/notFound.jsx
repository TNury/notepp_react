// FONTAWESOME REACT COMPONENT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// FONTAWESOME ICON
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';


export const NotFound = () => {
  return(
    <div className="not-found">
      <div className="not-found-div">
        <h1 className="not-found__head">Error 404 <FontAwesomeIcon icon={faExclamationTriangle} /></h1>
        <p className="not-found__text">
          This page doesn't exist or you need to be logged in to see it.
        </p>
      </div>
    </div>
  )
}