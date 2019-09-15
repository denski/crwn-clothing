import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAmhy7eu4X9mwfBKMdWCEhCfHCccSCYbg4',
  authDomain: 'crwn-db-21c67.firebaseapp.com',
  databaseURL: 'https://crwn-db-21c67.firebaseio.com',
  projectId: 'crwn-db-21c67',
  storageBucket: '',
  messagingSenderId: '719328436670',
  appId: '1:719328436670:web:485896654ea6ed9bb619ef',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
