import Vue from 'vue';
import VueRouter from 'vue-router';

import { getCurrentUser } from '@/globals';

import routes from '@/routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    let currentUser = getCurrentUser();
    let requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) {
        next('login');
    } else {
        next();
    }
});

export default router;
