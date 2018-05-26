import Vue from 'vue';
import Vuex from 'vuex';

import { database } from '@/globals';
import { IMovie, IMovieBranch, IMovieData, IMovies } from '@/interfaces';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        moviesMarvel: [],
        moviesDc: []
    },
    mutations: {
        setMovies(state: any, movies: IMovies) {
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

            state[movies.branch.accessor] = sortedData;
        },
        updateMovie(state: any, movie: IMovie) {
            let index = state[movie.branch.accessor].map((m: IMovieData) => m.id).indexOf(movie.data.id);
            state[movie.branch.accessor][index] = movie;
        }
    },
    actions: {
        fetchMovies({ commit }, branch: IMovieBranch): Promise<IMovieData[]> {
            return new Promise((resolve, reject) => {
                database.collection(branch.accessor)
                    .get()
                    .then((querySnapshot) => {
                        let data: IMovieData[] = [];
                        querySnapshot.forEach((doc) => {
                            data.push({ id: doc.id, ...doc.data() } as IMovieData);
                        });

                        commit('setMovies', { branch, data: data });
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
                        commit('updateMovie', movie);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            }));
        }
    }
});
