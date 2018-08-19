const dotenv = require('dotenv');

import Vue from 'vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';

import router from '@/router';
import App from '@/App.vue'

// Load environment variables
dotenv.config();

// Turn off Vue warning
Vue.config.productionTip = false;

// Register global plugins
import '@/globals';

// Register components
Vue.component('icon', Icon);

// Mount app
// noinspection JSUnusedGlobalSymbols
new Vue({
    render: h => h(App),
    router
}).$mount('#app');
