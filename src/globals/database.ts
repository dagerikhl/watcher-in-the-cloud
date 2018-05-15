import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
});
export const database = firebase.firestore();
database.settings({ timestampsInSnapshots: true });

// Seed database with initial data
// import * as seed from '@/seed';
// seed.seedMovies(database, 'moviesMarvel');
// seed.seedMovies(database, 'moviesDc');
