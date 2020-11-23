import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseCredential } from './config';

firebase.initializeApp(firebaseCredential);

export default firebase;
