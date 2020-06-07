import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

/*
  -----------------HOLD ON-----------------
  I KNOW HOW TO HIDE IMPORTANT INFORMATION.
  BUT THIS POJECT IS DEVELOPED FOR PRACTICING,
  SO I'M NOT HIDING ANY FIREBASE RELATED INFO.
  I SUGGEST YOU TO MAKE YOUR OWN FIREBASE
  PROJECT IF YOU FOLLOW THIS.
  THANK'S
  @robin4java 
*/
var config = {
  apiKey: 'AIzaSyAzD6El6PXG_UVg1EwKs_ELkAZWrDqvZLU',
  authDomain: 'ecommerz-990b1.firebaseapp.com',
  databaseURL: 'https://ecommerz-990b1.firebaseio.com',
  projectId: 'ecommerz-990b1',
  storageBucket: 'ecommerz-990b1.appspot.com',
  messagingSenderId: '701207838323',
  appId: '1:701207838323:web:06614af0ee677fc60bb406',
  measurementId: 'G-22CXG8KMZ9',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
