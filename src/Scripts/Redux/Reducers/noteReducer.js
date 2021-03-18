const INITIAL_STATE = {
  title: 'New Note',
  body: 'Write Something'
}

export const noteReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_NOTE_TITLE':
      return {
        ...currentState,
        title: action.payload
      }
    case 'SET_NOTE_BODY':
      return {
        ...currentState,
        body: action.payload
      }
    default: 
      return currentState;
  }
}