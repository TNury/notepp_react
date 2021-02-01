import React from 'react-dom';

function Notes() {
  return (
    <div className="notes">
      <button className="notes-create">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="2 2 60 60">    
          <g>        
            <path d="M32,62A30,30,0,1,1,62,32,30.034,30.034,0,0,1,32,62ZM32,4A28,28,0,1,0,60,32,28.032,28.032,0,0,0,32,4Z"></path>        
            <path d="M30,8.079a1,1,0,0,1-.078-2C30.61,6.028,31.31,6,32,6a1,1,0,0,1,0,2c-.638,0-1.284.025-1.921.076Z"></path>        
            <path d="M7,33a1,1,0,0,1-1-1A25.953,25.953,0,0,1,25.76,6.757,1,1,0,1,1,26.24,8.7,23.959,23.959,0,0,0,8,32,1,1,0,0,1,7,33Z"></path>        
            <path d="M32,50a5.006,5.006,0,0,1-5-5V37H19a5,5,0,0,1,0-10h8V19a5,5,0,0,1,10,0v8h8a5,5,0,0,1,0,10H37v8A5.006,5.006,0,0,1,32,50ZM19,29a3,3,0,0,0,0,6h9a1,1,0,0,1,1,1v9a3,3,0,0,0,6,0V36a1,1,0,0,1,1-1h9a3,3,0,0,0,0-6H36a1,1,0,0,1-1-1V19a3,3,0,0,0-6,0v9a1,1,0,0,1-1,1Z"></path>    
          </g>
        </svg>
      </button>
    </div>   
  )
}

export { Notes };