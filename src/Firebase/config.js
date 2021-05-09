import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDqa_KuV7B9GHfqT2Q-UspHUURmwCypxIU",
    authDomain: "upload-picture-f0df3.firebaseapp.com",
    projectId: "upload-picture-f0df3",
    storageBucket: "upload-picture-f0df3.appspot.com",
    messagingSenderId: "404050954949",
    appId: "1:404050954949:web:c0a78c8eedaa6af9adbeac",
    measurementId: "G-R06ME5TTT1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

//export 
export { storage, db, timestamp };