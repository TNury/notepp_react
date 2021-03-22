const INITIAL_STATE = {
  notesCollection: {
    // size: 0,
    docs: []
  }
}

export const notesReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_NOTE_CONTENT':
      return {
        ...currentState,
        notesCollection: {
          // size: action.payload,
          docs: action.payload
        }
      }
    default: 
      return currentState
  }
}