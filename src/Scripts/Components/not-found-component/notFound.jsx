// FONTAWESOME REACT COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME ICON
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


export const NotFound = () => {
  
  return(
    <div className="not-found-wrap">
      <div className="not-found">
        <div className="error">
          <span className="error__text">Error 404</span>
          <FontAwesomeIcon className="error__icon" icon={ faExclamationTriangle } />
        </div>
        <span className="not-found__text">This page doesn't exist.</span>
      </div>
    </div>
  )
}