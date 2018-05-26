<template>
    <div id="app">
        <Header title="Watcher in the Cloud" username="dagerikhl"/>
        <section class="content-container">
            <Loader :show="isUpdating()"/>
            <MovieTable :movies="store.state.moviesMarvel"/>
            <MovieTable :movies="store.state.moviesDc"/>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Store } from 'vuex';

    import { store } from './globals';
    import { IConnector, IMovies, IRootState } from './interfaces';
    import { Header, Loader, MovieTable } from './components';

    @Component({
        components: {
            Header,
            Loader,
            MovieTable
        }
    })
    export default class App extends Vue implements IConnector {

        private store!: Store<IRootState>;

        // noinspection JSUnusedGlobalSymbols
        created() {
            this.store = store;

            [store.state.moviesMarvel, store.state.moviesDc].forEach((movies: IMovies) => {
                movies.isUpdating = true;
                store.dispatch('fetchMovies', movies.branch)
                    .then((data) => {
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
    //noinspection CssUnknownTarget
    @import "~styles/common.scss";

    #app {
        display: flex;
        flex-direction: column;

        height: 100%;

        .content-container {
            flex-grow: 1;
            position: relative;

            overflow-y: scroll;
        }
    }
</style>
