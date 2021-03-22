// REACT
import React from 'react';
// FONTAWESOME REACT LIBRARY COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';


export const NotePrev = ({id, title, body}) => {
  
  return(
    <>
      <div className="notes-prev">
        <p className="notes-prev__title">{title}</p>
        <p className="notes-prev__body">{body}</p>
        <button onClick={ () => console.log(id) } className="notes-prev__button">
          <FontAwesomeIcon className="notes-prev__icon" icon={ faMinusCircle } />
        </button>
      </div>
      <hr className="notes__line" />
    </>
  )
}

