import { 
  SET_NOTES_COLLECTION, 
  SET_CURRENT_USER,
  SET_APP_FONT  
} from './types.js';


export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const setNotesCollection = (notes) => ({
  type: SET_NOTES_COLLECTION,
  payload: notes
});

export const setAppFont = (font) => ({
  type: SET_APP_FONT,
  payload: font
})