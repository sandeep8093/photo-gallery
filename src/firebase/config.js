import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDB1Hhw5ijdxeMUDiH-7_kb-E0G8XclfDs',
  authDomain: 'dattebayo-gallery.firebaseapp.com',
  projectId: 'dattebayo-gallery',
  storageBucket: 'dattebayo-gallery.appspot.com',
  messagingSenderId: '100831523870',
  appId: '1:100831523870:web:fe657819087736e766aa0f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
