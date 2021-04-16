const INITIAL_STATE = {
  notesCollection: {
    ref: {},
    docs: []
  }
}

export const notesCollection = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_NOTES_COLLECTION':
      return {
        ...currentState,
        notesCollection: {
          ...currentState.notesCollection,
          docs: action.payload
        }
      }
    case 'SET_NOTES_REFERENCE':
      return {
        ...currentState,
        notesCollection: {
          ...currentState.notesCollection,
          ref: action.payload
        }
      }
    default: 
      return currentState
  }
}