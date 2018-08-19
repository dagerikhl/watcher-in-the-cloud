import { ILink, IMovies } from './';

export interface IRootState {

    links: ILink[],

    moviesMarvel: IMovies,
    moviesDc: IMovies,

    [key: string]: any

}
