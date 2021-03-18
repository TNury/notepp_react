export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user
});

export const setNoteTitle = (title) => ({
  type: 'SET_NOTE_TITLE',
  payload: title
});

export const setNoteBody = (body) => ({
  type: 'SET_NOTE_BODY',
  payload: body
});

export const setNotesCollection = (notes) => ({
  type: 'SET_NOTES_COLLECTION',
  payload: notes
})