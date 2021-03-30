const INITIAL_STATE = {
  openedNote: {
    display: false,
    id: 0,
    title: '',
    body: ''
  }
}

export const noteReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DISPLAY_NOTE':
      return {
        ...currentState,
        openedNote: {
          ...currentState.openedNote,
          display: action.payload
        }
      }
    case 'SET_NOTE_ID':
      return {
        ...currentState,
        openedNote: {
          ...currentState.openedNote,
          id: action.payload
        }
      }
    case 'SET_NOTE_TITLE':
      return {
        ...currentState,
        openedNote: {
          ...currentState.openedNote,
          title: action.payload
        }
      }
    case 'SET_NOTE_BODY':
      return {
        ...currentState,
        openedNote: {
          ...currentState.openedNote,
          body: action.payload
        }
      }
    default:
      return currentState
  }
}