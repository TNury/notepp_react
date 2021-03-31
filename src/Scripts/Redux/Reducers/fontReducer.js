const INITIAL_STATE = {
  font: 'Gill Sans MT'
}

export const font = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_APP_FONT': 
      return {
        ...currentState,
        font: action.payload
      }
    default:
      return currentState
  }
}