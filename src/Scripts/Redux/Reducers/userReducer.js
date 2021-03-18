const INITIAL_STATE = {
  currentUser: null
}

/* 

  currentState = INITIAL_STATE is a ES6 syntax, it means:

  "If currentState is ever undefined, fall back to this value"
  
*/ 

export const userReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...currentState,
        currentUser: action.payload
      };
    default:
     return currentState;
  }
}