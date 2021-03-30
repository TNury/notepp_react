# Formatting

Things we **NEED** to format:



- Finish mentioning where each reducer is used in each component in `rootReducer.js`
- Review and if need be change reducers props names.
- Change `setDisplayedNote` title & body names to something shorter and find a way for them to be desctructured properly.
- See if it would be prudent to delete `notesReference` reducer and get its reference to firestore's `ref` prop in the collection.
- Modulate the actions.js file into folders.



In the `rootReducer.js`

- Rename `user`, `notes`, `note`, `font` to `userReducer`, `notesReducer`, `noteReducer`, `fontReducer`