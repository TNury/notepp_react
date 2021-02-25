// FONTAWESOME ICON LIBRARY COMPONENT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Button({className, icon, text}) {
  return (
    <>
      <button className={`wrap-btn ${className}`} type="button">
        <FontAwesomeIcon icon={icon} />
        <span className="wrap-btn__text">{text}</span>
      </button>
    </>
  )
}

export {Button};