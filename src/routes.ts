import { RouteConfig } from 'vue-router';

import { Home, MovieTable, Series } from '@/components';

const routes: RouteConfig[] = [
    { path: '/', component: Home },
    { path: '/movies', component: MovieTable },
    { path: '/series', component: Series }
];

export default routes;
