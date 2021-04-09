// FONTAWESOME ICON LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = ({ type, handler, modifier, icon, text }) => {
  
  return (
    <button type={ type } onClick={ handler } className={`button ${ modifier }`} >
      <FontAwesomeIcon className="button__icon" icon={ icon } />
      <span className="button__text">{ text }</span>
    </button>
  )
}

