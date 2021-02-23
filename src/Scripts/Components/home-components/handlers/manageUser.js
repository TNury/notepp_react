// LIBRARIES
import {auth, provider} from '../../../Firebase/Firebase.utils.js';

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid)
  } else {
    console.log('You are alone.')
  }
})

/*
  1. 
*/