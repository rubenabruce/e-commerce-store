import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB2yK9VCu01RnheN0wpK_rfqzHvNGygAzE",
  authDomain: "e-commerce-store-d1e49.firebaseapp.com",
  databaseURL: "https://e-commerce-store-d1e49.firebaseio.com",
  projectId: "e-commerce-store-d1e49",
  storageBucket: "e-commerce-store-d1e49.appspot.com",
  messagingSenderId: "754610501086",
  appId: "1:754610501086:web:68abc96576b8e2b829994f",
  measurementId: "G-S7L5R690TY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;
