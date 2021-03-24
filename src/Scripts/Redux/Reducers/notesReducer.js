import { SET_NOTES_COLLECTION } from '../actions/types';

const INITIAL_STATE = {
  notesCollection: {
    docs: []
  }
}

export const notesReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_NOTES_COLLECTION:
      return {
        ...currentState,
        notesCollection: {
          docs: action.payload
        }
      }
    default: 
      return currentState
  }
}