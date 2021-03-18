const INITIAL_STATE = {
  currentTitle: 'New Note',
  currentBody: 'Write Something'
}

export const noteContentReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_NOTE_TITLE':
      return {
        ...currentState,
        currentTitle: action.payload
      }
    case 'SET_NOTE_BODY':
      return {
        ...currentState,
        currentBody: action.payload
      }
    default: 
      return currentState;
  }
}