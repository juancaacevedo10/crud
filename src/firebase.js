import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCntU8oLYgKNAAxxA9tVXGMvBqg7XBxgdM",
    authDomain: "crud-dd462.firebaseapp.com",
    projectId: "crud-dd462",
    storageBucket: "crud-dd462.appspot.com",
    messagingSenderId: "190269727179",
    appId: "1:190269727179:web:cc438fe67822acbc8ad64e"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)