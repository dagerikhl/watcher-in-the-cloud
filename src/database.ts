import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: 'AIzaSyDt3sxUCp1aKw0ngvH8ACt-_A0fgZQNd4w',
    authDomain: 'watcher-in-the-cloud.firebaseapp.com',
    databaseURL: 'https://watcher-in-the-cloud.firebaseio.com',
    projectId: 'watcher-in-the-cloud',
    storageBucket: 'watcher-in-the-cloud.appspot.com',
    messagingSenderId: '927168675158'
});
export const database = firebase.firestore();
database.settings({ timestampsInSnapshots: true });
