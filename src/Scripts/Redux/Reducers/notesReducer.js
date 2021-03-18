const INITIAL_STATE = {
  notes: []
}
  

export const notesReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_NOTES_COLLECTION':
      return {
        ...currentState,
        notes: [
          ...currentState.notes, 
          action.payload
        ]
      }
    default:
      return currentState
  }
}