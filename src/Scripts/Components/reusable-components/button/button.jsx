// FONTAWESOME ICON LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = ({ type, handler, modifier, icon, text }) => {

  /*
  ======================================
        THIS COMPONENT IS USED IN  
        
    1. login.jsx
    2. sidebar.jsx  
    3. notesEditor.jsx
    4. notesCollection.jsx
    5. note.jsx

  ======================================
  */ 
  
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
    <button  onClick={ handler } className={`button ${ modifier }`} type={ type }>
      <FontAwesomeIcon className="button__icon" icon={ icon } />
      <span className="button__text">{ text }</span>
    </button>
    :
    <button  onClick={ handler } className="button" type={ type }>
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

