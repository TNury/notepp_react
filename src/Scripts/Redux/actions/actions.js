import { SET_NOTES_COLLECTION, SET_CURRENT_USER } from './types.js';


export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const setNotesCollection = (notes) => ({
  type: SET_NOTES_COLLECTION,
  payload: notes
});