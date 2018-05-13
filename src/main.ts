import Vue from 'vue';

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';

import App from './App.vue'

Vue.config.productionTip = false;

// Register plugins
import './database';

// Register components
Vue.component('icon', Icon);

// Mount app
// noinspection JSUnusedGlobalSymbols
new Vue({
    render: h => h(App)
}).$mount('#app');
