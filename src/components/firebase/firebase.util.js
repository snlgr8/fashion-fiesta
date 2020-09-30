import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBz57d6vtcujh5fKizZO-RWvlFql2L5og8',
  authDomain: 'fashion-fiesta-db.firebaseapp.com',
  databaseURL: 'https://fashion-fiesta-db.firebaseio.com',
  projectId: 'fashion-fiesta-db',
  storageBucket: 'fashion-fiesta-db.appspot.com',
  messagingSenderId: '1096136111013',
  appId: '1:1096136111013:web:1efb1ea45c06d87d51ee4c',
  measurementId: 'G-6SFR0VG6N4',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
