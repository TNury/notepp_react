// FONTAWESOME ICON LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = ({ type, handler, className, icon, text }) => {
  
  return (
    <button type={type} onClick={ handler } className={`btn-group-btn ${ className }`} >
      <FontAwesomeIcon className="btn-group-btn__icon" icon={ icon } />
      <span className="btn-group-btn__text">{ text }</span>
    </button>
  )
}

