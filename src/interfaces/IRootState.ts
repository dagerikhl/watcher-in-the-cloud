import { RouteConfig } from 'vue-router';
import { IMovies } from './';

export interface IRootState {

    routes: RouteConfig[],

    moviesMarvel: IMovies,
    moviesDc: IMovies,

    [key: string]: any

}
