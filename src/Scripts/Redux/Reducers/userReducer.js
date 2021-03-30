const INITIAL_STATE = {
  value: null
}

export const userReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...currentState,
        value: action.payload
      };
    default:
     return currentState;
  }
}