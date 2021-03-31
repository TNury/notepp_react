// FONTAWESOME ICON LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Button = ({ handler, className, icon, text }) => {
  return (
    <>
      <button onClick={ handler } className={`wrap-btn ${ className }`} type="button">
        <FontAwesomeIcon icon={ icon } />
        <span className="wrap-btn__text">{ text }</span>
      </button>
    </>
  )
}

