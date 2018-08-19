import Vue from 'vue';
import { RouteConfig } from 'vue-router';
import Vuex, { Store } from 'vuex';

import { database } from '@/globals';
import { ILink, IMovie, IMovieBranch, IMovieData, IMovies, IRootState } from '@/interfaces';

Vue.use(Vuex);

export const store: Store<IRootState> = new Vuex.Store<IRootState>({
    state: {
        routes: [],
        moviesMarvel: {
            branch: {
                title: 'Marvel Movies',
                accessor: 'moviesMarvel'
            },
            data: [],
            isUpdating: false
        },
        moviesDc: {
            branch: {
                title: 'DC Movies',
                accessor: 'moviesDc'
            },
            data: [],
            isUpdating: false
        }
    },
    mutations: {
        setRoutes(state: IRootState, routes: RouteConfig[]) {
            state.routes = routes.sort((a, b) => {
                if (a.name === null) return -1;
                if (b.name === null) return 1;

                if (a.name && b.name) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                }

                return 0;
            });
        },
        setMovies(state: IRootState, movies: IMovies) {
            const sortedData = movies.data.sort((a, b) => {
                // First by missing year
                if (a.year === null) return -1;
                if (b.year === null) return 1;

                // Then by newest year
                if (a.year < b.year) return 1;
                if (a.year > b.year) return -1;

                // Then by alphabetical universe
                if (a.universe < b.universe) return -1;
                if (a.universe > b.universe) return 1;

                // Finally by alphabetical title
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;

                return 0;
            });

            state[movies.branch.accessor].data = sortedData;
        },
        setMovie(state: IRootState, movie: IMovie) {
            let index = state[movie.branch.accessor].data.map((m: IMovieData) => m.id).indexOf(movie.data.id);
            state[movie.branch.accessor].data[index] = movie.data;
        }
    },
    actions: {
        fetchRoutes({ commit }): Promise<RouteConfig[]> {
            return new Promise((resolve, reject) => {
                database.collection('routes')
                    .get()
                    .then((querySnapshot) => {
                        let data: RouteConfig[] = [];
                        querySnapshot.forEach((doc) => {
                            data.push(doc.data() as RouteConfig);
                        });

                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        fetchMovies({ commit }, branch: IMovieBranch): Promise<IMovieData[]> {
            return new Promise((resolve, reject) => {
                database.collection(branch.accessor)
                    .get()
                    .then((querySnapshot) => {
                        let data: IMovieData[] = [];
                        querySnapshot.forEach((doc) => {
                            data.push({ id: doc.id, ...doc.data() } as IMovieData);
                        });

                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        updateMovie({ commit }, movie: IMovie): Promise<void> {
            return new Promise(((resolve, reject) => {
                database.collection(movie.branch.accessor)
                    .doc(movie.data.id)
                    .update(movie.data)
                    .then(() => {
                        commit('setMovie', movie);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            }));
        }
    }
});
