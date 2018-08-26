import { RouteConfig } from 'vue-router';

import { Home, Login, Movies, Series } from '@/containers';

const routes: RouteConfig[] = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/movies', component: Movies, meta: { requiresAuth: true } },
    { path: '/series', component: Series, meta: { requiresAuth: true } },
    { path: '*', redirect: '/' }
];

export default routes;
