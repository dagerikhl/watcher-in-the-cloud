import Vue from 'vue';

const VueFire = require('vuefire');
import firebase from 'firebase/app';
import 'firebase/firestore';

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';

import App from './App.vue'

Vue.config.productionTip = false;

// Register plugins
Vue.use(VueFire);
firebase.initializeApp({
    apiKey: 'AIzaSyDt3sxUCp1aKw0ngvH8ACt-_A0fgZQNd4w',
    authDomain: 'watcher-in-the-cloud.firebaseapp.com',
    databaseURL: 'https://watcher-in-the-cloud.firebaseio.com',
    projectId: 'watcher-in-the-cloud',
    storageBucket: 'watcher-in-the-cloud.appspot.com',
    messagingSenderId: '927168675158'
});
export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

// Register components
Vue.component('icon', Icon);

// Mount app
new Vue({
    render: h => h(App)
}).$mount('#app');
