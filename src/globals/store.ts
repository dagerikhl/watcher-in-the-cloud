import Vue from 'vue';
import Vuex from 'vuex';

import { database } from '@/globals';
import { IMovieBranch, IMovieData, IMovies } from '@/interfaces';

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
        }
    },
    actions: {
        fetchMovies({ commit }, branch: IMovieBranch) {
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
        }
    }
});
