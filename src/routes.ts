import { RouteConfig } from 'vue-router';

import { Home, Movies, Series } from '@/containers';

const routes: RouteConfig[] = [
    { path: '/', component: Home },
    { path: '/movies', component: Movies },
    { path: '/series', component: Series }
];

export default routes;
