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
    projectId: 'watcher-in-the-cloud',
    databaseURL: 'https://watcher-in-the-cloud.firebaseio.com'
});
export const db = firebase.firestore();

// Register components
Vue.component('icon', Icon);

// Mount app
new Vue({
    render: h => h(App)
}).$mount('#app');
