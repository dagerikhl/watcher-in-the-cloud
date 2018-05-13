import Vue from 'vue';
import Vuex from 'vuex';

import { database } from '@/globals';
import { IMovieBranch, IMovieData } from '@/interfaces';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        moviesMarvel: [],
        moviesDc: []
    },
    mutations: {
        setMovies(state: any, payload: { branch: IMovieBranch, data: IMovieData[] }) {
            state[payload.branch.accessor] = payload.data;
        }
    },
    actions: {
        fetchMovies({ commit }, branch: IMovieBranch) {
            return new Promise((resolve, reject) => {
                database.collection(branch.accessor)
                    .orderBy('year')
                    .get()
                    .then((querySnapshot) => {
                        let movies: IMovieData[] = [];
                        querySnapshot.forEach((doc) => {
                            movies.push({ id: doc.id, ...doc.data() } as IMovieData);
                        });

                        commit('setMovies', { branch, data: movies });
                        resolve(movies);
                    })
                    .catch((error) => {
                        console.error(error);
                        reject();
                    });
            });
        }
    }
});
