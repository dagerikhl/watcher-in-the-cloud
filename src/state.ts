import Vue from 'vue';
import Vuex from 'vuex';

import { database } from './database';
import IMovieData from './interfaces/IMovieData';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        moviesMarvel: null
    },
    mutations: {
        setMoviesMarvel(state, payload) {
            state.moviesMarvel = payload;
        }
    },
    actions: {
        fetchMoviesMarvel({ commit }) {
            return new Promise((resolve, reject) => {
                database.collection('movies-marvel')
                    .orderBy('year')
                    .get()
                    .then((querySnapshot) => {
                        let moviesMarvel: IMovieData[] = [];
                        querySnapshot.forEach((doc) => {
                            moviesMarvel.push({ id: doc.id, ...doc.data() } as IMovieData);
                        });

                        commit('setMoviesMarvel', moviesMarvel);
                        resolve(moviesMarvel);
                    })
                    .catch((error) => {
                        console.error(error);
                        reject();
                    });
            });
        }
    }
});