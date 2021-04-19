// FONTAWESOME ICON LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = ({ type, handler, modifier, icon, text }) => {
  
  /*
    The first ternary operator checks to see if there's a modifier prop,
    if yes, return the button with the modifier included on className, else, 
    return a button without it.

    The second one checks to see if there's a text prop, if yes, return a
    span with the prop as its content, else, return an empty tag.
  */ 
  
  return (
    modifier
    ?
    <button type={ type } onClick={ handler } className={`button ${ modifier }`} >
      <FontAwesomeIcon className="button__icon" icon={ icon } />
      <span className="button__text">{ text }</span>
    </button>
    :
    <button type={ type } onClick={ handler } className="button" >
      <FontAwesomeIcon className="button__icon" icon={ icon } />
      {
        text
        ?
        <span className="button__text">{ text }</span>
        :
        <></>
      }
    </button>
  )
}

