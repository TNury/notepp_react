// FONTAWESOME REACT COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME ICON
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


export const NotFound = () => {
  
  return(
    <div className="not-found-container">
      <div className="not-found">
        <h1 className="not-found__head">
          Error 404 <FontAwesomeIcon icon={ faExclamationTriangle } />
        </h1>
        <p className="not-found__text">
          This page doesn't exist.
        </p>
      </div>
    </div>
  )
}