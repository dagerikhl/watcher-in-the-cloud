export interface IMovieData {

    id?: string;
    category: string,
    studios: string,
    universe: string,
    title: string,
    year: number | null,
    downloaded: boolean,
    seen: boolean,
    updating?: boolean

}
