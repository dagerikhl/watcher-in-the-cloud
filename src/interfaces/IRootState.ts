import { IMovies } from './';

export interface IRootState {

    moviesMarvel: IMovies,
    moviesDc: IMovies,

    [key: string]: IMovies

}
