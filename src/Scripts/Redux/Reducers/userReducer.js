const INITIAL_STATE = {
  user: null
}

export const user = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...currentState,
        user: action.payload
      };
    default:
     return currentState;
  }
}