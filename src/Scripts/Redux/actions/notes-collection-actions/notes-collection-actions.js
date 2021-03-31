// NOTES COLLECTION ACTIONS
const setNotesCollection = (notes) => ({
  type: 'SET_NOTES_COLLECTION',
  payload: notes
});

const setNotesCollectionRef = (ref) => ({
  type: 'SET_NOTES_REFERENCE',
  payload: ref
})

export { setNotesCollection, setNotesCollectionRef };