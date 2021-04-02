// FONTAWESOME ICON LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Button = ({ handler, className, icon, text }) => {
  return (
    <>
      <button onClick={ handler } className={`btn-group-btn ${ className }`} type="button">
        <FontAwesomeIcon className="btn-group-btn__icon" icon={ icon } />
        <span className="btn-group-btn__text">{ text }</span>
      </button>
    </>
  )
}

