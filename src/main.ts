const dotenv = require('dotenv');

import Vue from 'vue';

import { onAuthentication } from '@/globals';
import router from '@/router';
import App from '@/App.vue'

// Load environment variables
dotenv.config();

// Turn off Vue warning
Vue.config.productionTip = false;

// Register components
import '@/vue-registrations';

// Mount app
onAuthentication(() => {
    // noinspection JSUnusedGlobalSymbols
    new Vue({
        render: h => h(App),
        router
    }).$mount('#app');
});
