import Vue from 'vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';
import App from './App.vue';
Vue.config.productionTip = false;
// Register components
Vue.component('icon', Icon);
// Mount app
new Vue({
    render: h => h(App)
}).$mount('#app');
//# sourceMappingURL=main.js.map