const INITIAL_STATE = {
  notesEditor: {
    display: false,
    id: 0,
    title: '',
    body: ''
  }
}

export const notesEditor = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DISPLAY_NOTE':
      return {
        ...currentState,
        notesEditor: {
          ...currentState.notesEditor,
          display: action.payload
        }
      }
    case 'SET_NOTE_ID':
      return {
        ...currentState,
        notesEditor: {
          ...currentState.notesEditor,
          id: action.payload
        }
      }
    case 'SET_NOTE_TITLE':
      return {
        ...currentState,
        notesEditor: {
          ...currentState.notesEditor,
          title: action.payload
        }
      }
    case 'SET_NOTE_BODY':
      return {
        ...currentState,
        notesEditor: {
          ...currentState.notesEditor,
          body: action.payload
        }
      }
    default:
      return currentState
  }
}