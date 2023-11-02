/* eslint-disable prettier/prettier */
import { FirebaseDataProvider } from 'react-admin-firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyC-6f6K9D4sTzcnWZimc35iYOdJSrk4lvw',
    authDomain: 'marketease-75e09.firebaseapp.com',
    databaseURL:
        'https://marketease-75e09-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'marketease-75e09',
    storageBucket: 'marketease-75e09.appspot.com',
    messagingSenderId: '32186579531',
    appId: '1:32186579531:web:d6d3a75038545f3b4c6bce',
    measurementId: 'G-1EFNVM3RXP',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//  In case you want to load content from db to your app
const db = firebase.firestore();
const auth = firebase.auth();
export { firebaseApp, firebaseConfig, auth };
export default db;
