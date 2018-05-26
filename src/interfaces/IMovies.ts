import { IMovieBranch, IMovieData } from './';

export interface IMovies {

    branch: IMovieBranch,
    data: IMovieData[],
    isUpdating: boolean

}
