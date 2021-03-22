export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user
});

export const setNoteContent = (notes) => ({
  type: 'SET_NOTE_CONTENT',
  payload: notes
});
