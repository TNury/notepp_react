// NOTE DISPLAY ACTIONS
const displayEditor = (boolean) => ({
  type: 'DISPLAY_NOTE',
  payload: boolean
});

const onEditorSetNoteId = (id) => ({
  type: 'SET_NOTE_ID',
  payload: id
})

const onEditorSetNoteTitle = (title) => ({
  type: 'SET_NOTE_TITLE',
  payload: title
});

const onEditorSetNoteBody = (body) => ({
  type: 'SET_NOTE_BODY',
  payload: body
});

export {
  displayEditor,
  onEditorSetNoteId,
  onEditorSetNoteTitle,
  onEditorSetNoteBody
}