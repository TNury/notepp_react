// USER ACTIONS
const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user
});

// NOTES COLLECTION ACTIONS
const setNotesCollection = (notes) => ({
  type: 'SET_NOTES_COLLECTION',
  payload: notes
});

const setNotesCollectionRef = (ref) => ({
  type: 'SET_NOTES_REFERENCE',
  payload: ref
})

// APP ACTIONS
const setAppFont = (font) => ({
  type: 'SET_APP_FONT',
  payload: font
});


// NOTE DISPLAY ACTIONS
const displayNote = (boolean) => ({
  type: 'DISPLAY_NOTE',
  payload: boolean
});

const setNoteId = (id) => ({
  type: 'SET_NOTE_ID',
  payload: id
})

const setNoteTitle = (title) => ({
  type: 'SET_NOTE_TITLE',
  payload: title
});

const setNoteBody = (body) => ({
  type: 'SET_NOTE_BODY',
  payload: body
});

export {
  setCurrentUser,
  setNotesCollection,
  setNotesCollectionRef,
  displayNote,
  setNoteId,
  setNoteTitle,
  setNoteBody,
  setAppFont
};