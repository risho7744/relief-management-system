//import firebase
import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'

const config = {
    apiKey: "AIzaSyCC_olAMBAB0aYG2_rJ2QWoNdYQnUqG3rU",
    authDomain: "relief-management-system.firebaseapp.com",
    projectId: "relief-management-system",
    storageBucket: "relief-management-system.appspot.com",
    messagingSenderId: "925304618581",
    appId: "1:925304618581:web:863afe2b66cea56d549edc",
    measurementId: "G-99XJWW2N69"
};
firebase.initializeApp(config);

export default firebase;

