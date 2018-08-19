<template>
    <section>
        <Loader :show="isUpdating()"/>
        <MovieTable :movies="store.state.moviesMarvel"/>
        <MovieTable :movies="store.state.moviesDc"/>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Store } from 'vuex';

    import { store } from '../globals';
    import { IConnector, IMovies, IRootState } from '../interfaces';
    import { Loader } from '../components';
    import MovieTable from './MovieTable.vue';

    @Component({
        components: {
            Loader,
            MovieTable
        }
    })
    export default class Movies extends Vue implements IConnector {

        private store!: Store<IRootState>;

        // noinspection JSUnusedGlobalSymbols
        created() {
            this.store = store;

            // Load movies
            [store.state.moviesMarvel, store.state.moviesDc].forEach((movies: IMovies) => {
                movies.isUpdating = true;
                store.dispatch('fetchMovies', movies.branch)
                    .then((data) => {
                        store.commit('setMovies', { branch: movies.branch, data });

                        movies.data = data;
                        movies.isUpdating = false;
                    });
            });
        }

        isUpdating(): boolean {
            return store.state.moviesMarvel.isUpdating || store.state.moviesDc.isUpdating;
        }

    }
</script>

<style lang="scss">
</style>
