import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: process.env.VUE_APP_FB_API_KEY,
    authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FB_DATABASE_URL,
    projectId: process.env.VUE_APP_FB_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FB_MESSAGING_SENDER_ID
});
export const database = firebase.firestore();
database.settings({ timestampsInSnapshots: true });

export const getCurrentUser = () => {
    return firebase.auth().currentUser;
};

export const signIn = (email: string, password: string): Promise<any> => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const onAuthentication = (cb: Function) => {
    firebase.auth().onAuthStateChanged(() => {
        cb();
    });
};

// Seed database with initial data
// import * as seed from '@/seed';
// seed.seedMovies(database, 'moviesMarvel');
// seed.seedMovies(database, 'moviesDc');
