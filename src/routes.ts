import { RouteConfig } from 'vue-router';

import { Home, Login, Movies, Series } from '@/containers';

const routes: RouteConfig[] = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/movies', component: Movies },
    { path: '/series', component: Series },
    { path: '*', redirect: '/' }
];

export default routes;
