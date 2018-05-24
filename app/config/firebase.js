import * as firebase from 'firebase';
import * as authCredentials from './auth';

const firebaseConfig = authCredentials.firebaseConfig;

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const storage = firebase.storage();