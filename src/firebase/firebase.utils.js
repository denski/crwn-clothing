import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { async } from 'q';

const config = {
  apiKey: 'AIzaSyAmhy7eu4X9mwfBKMdWCEhCfHCccSCYbg4',
  authDomain: 'crwn-db-21c67.firebaseapp.com',
  databaseURL: 'https://crwn-db-21c67.firebaseio.com',
  projectId: 'crwn-db-21c67',
  storageBucket: '',
  messagingSenderId: '719328436670',
  appId: '1:719328436670:web:485896654ea6ed9bb619ef',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
