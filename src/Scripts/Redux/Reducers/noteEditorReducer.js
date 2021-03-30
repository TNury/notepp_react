const INITIAL_STATE = {
  noteEditor: {
    display: false,
    id: 0,
    title: '',
    body: ''
  }
}

export const noteEditor = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DISPLAY_NOTE':
      return {
        ...currentState,
        noteEditor: {
          ...currentState.noteEditor,
          display: action.payload
        }
      }
    case 'SET_NOTE_ID':
      return {
        ...currentState,
        noteEditor: {
          ...currentState.noteEditor,
          id: action.payload
        }
      }
    case 'SET_NOTE_TITLE':
      return {
        ...currentState,
        noteEditor: {
          ...currentState.noteEditor,
          title: action.payload
        }
      }
    case 'SET_NOTE_BODY':
      return {
        ...currentState,
        noteEditor: {
          ...currentState.noteEditor,
          body: action.payload
        }
      }
    default:
      return currentState
  }
}