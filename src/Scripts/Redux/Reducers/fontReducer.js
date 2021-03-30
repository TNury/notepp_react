const INITIAL_STATE = {
  currentFont: 'Gill Sans'
}

export const fontReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_APP_FONT': 
      return {
        ...currentState,
        currentFont: action.payload
      }
    default:
      return currentState
  }
}