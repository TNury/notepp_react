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

// INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig);

// LIBRARIES
const auth = firebase.auth();
const db = firebase.firestore();

// GOOGLE AUTH
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// FACEBOOK AUTH
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export { auth, db, signInWithGoogle, signInWithFacebook};