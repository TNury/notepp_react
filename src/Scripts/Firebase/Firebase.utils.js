// FIREBASE IMPORT
import firebase from 'firebase/app';

// FIREBASE LIBRARIES
import 'firebase/firestore';
import 'firebase/firebase-auth';

// FIREBASE API KEY
const firebaseConfig = {
  apiKey: "AIzaSyBzrmbvQJ3tEfoPj-H1_ArpkK0gWQX1pKs",
  authDomain: "notepp-react.firebaseapp.com",
  projectId: "notepp-react",
  storageBucket: "notepp-react.appspot.com",
  messagingSenderId: "248336961600",
  appId: "1:248336961600:web:09ef17a4d13c6f9ef88fa5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Libraries variables
const auth = firebase.auth();
const db = firebase.firestore();

// CREATE USER PROFILE
const createUserProfileDocument = async (currentUser, additionalData) => {

  if (!currentUser) return;
  // CREATE USER DOC
  const userDocRef = db.doc(`users/${currentUser.uid}`);
  const docSnapShot = await userDocRef.get();

  if(!docSnapShot.exist) {
    const { displayName, email } = currentUser;

    try {
      await userDocRef.set({
        displayName,
        email,
        ...additionalData
      })
    } catch (err) {
      console.error('Error creating user', err.message);
    }
  }

  // CREATE USER NOTES DOC


  return userDocRef;
}



// Auth defaults

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);

export {auth, db, signInWithGoogle, createUserProfileDocument};