import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB3sGvuY8Io0nR9aETNgC7z8V65twDzzGg",
    authDomain: "quicktalk-9c297.firebaseapp.com",
    projectId: "quicktalk-9c297",
    storageBucket: "quicktalk-9c297.appspot.com",
    messagingSenderId: "926620966496",
    appId: "1:926620966496:web:9aa000ce15cba3f95e6d05"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db};