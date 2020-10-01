import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBcSL7xzeWUHzcDZXRye0RVRQfmXuO1Up0",
    authDomain: "puzzlegallery.firebaseapp.com",
    databaseURL: "https://puzzlegallery.firebaseio.com",
    projectId: "puzzlegallery",
    storageBucket: "puzzlegallery.appspot.com",
    messagingSenderId: "864933429102",
    appId: "1:864933429102:web:ec5b8fc699506749644b7f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize storage
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };