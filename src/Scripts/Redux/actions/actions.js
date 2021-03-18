export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user
})

export const setNoteTitle = (content) => ({
  type: 'SET_NOTE_TITLE',
  payload: content
})

export const setNoteBody = (content) => ({
  type: 'SET_NOTE_BODY',
  payload: content
})