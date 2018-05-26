<template>
    <div id="app">
        <Header title="Watcher in the Cloud" username="dagerikhl"/>
        <section class="content-container">
            <Loader :show="isUpdating()"/>
            <MovieTable :branch="moviesMarvelBranch" :data="moviesMarvelData"/>
            <MovieTable :branch="moviesDcBranch" :data="moviesDcData"/>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import { store } from './globals';
    import { IConnector, IMovieBranch, IMovieData } from './interfaces';
    import { Header, Loader, MovieTable } from './components';

    @Component({
        components: {
            Header,
            Loader,
            MovieTable
        }
    })
    export default class App extends Vue implements IConnector {

        private moviesMarvelBranch: IMovieBranch = { title: 'Marvel Movies', accessor: 'moviesMarvel' };
        // noinspection JSMismatchedCollectionQueryUpdate
        private moviesMarvelData: IMovieData[] = [];
        private moviesMarvelIsUpdating: boolean = true;

        private moviesDcBranch: IMovieBranch = { title: 'DC Movies', accessor: 'moviesDc' };
        // noinspection JSMismatchedCollectionQueryUpdate
        private moviesDcData: IMovieData[] = [];
        private moviesDcIsUpdating: boolean = true;

        // noinspection JSUnusedGlobalSymbols
        created() {
            store.dispatch('fetchMovies', this.moviesMarvelBranch)
                .then((movies) => {
                    this.moviesMarvelData = movies;
                    this.moviesMarvelIsUpdating = false;
                });

            store.dispatch('fetchMovies', this.moviesDcBranch)
                .then((movies) => {
                    this.moviesDcData = movies;
                    this.moviesDcIsUpdating = false;
                });
        }

        isUpdating(): boolean {
            return this.moviesMarvelIsUpdating || this.moviesDcIsUpdating;
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
