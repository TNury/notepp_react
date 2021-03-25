// FONTAWESOME ICON LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Button = ({ text, icon, handler }) => {
  return (
    <>
      <button onClick={ handler } className="sidebar-button">
        <FontAwesomeIcon className="sidebar-button__icon" icon={ icon } />
        <span className="sidebar-button__text">{ text }</span>
      </button>
    </>
  )
}
