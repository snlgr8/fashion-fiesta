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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users\${userAuth.uid}`);
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
      console.log('Error creating user', error.message);
    }
    return userRef;
  }
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
