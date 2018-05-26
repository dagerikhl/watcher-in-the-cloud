<template>
    <div id="app">
        <Header title="Watcher in the Cloud" username="dagerikhl"/>
        <section class="content-container">
            <Loader :show="isUpdating()"/>
            <MovieTable :movies="moviesMarvel"/>
            <MovieTable :movies="moviesDc"/>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import { store } from './globals';
    import { IConnector, IMovies } from './interfaces';
    import { Header, Loader, MovieTable } from './components';

    @Component({
        components: {
            Header,
            Loader,
            MovieTable
        }
    })
    export default class App extends Vue implements IConnector {

        private moviesMarvel: IMovies = {
            branch: {
                title: 'Marvel Movies',
                accessor: 'moviesMarvel'
            },
            data: [],
            isUpdating: false
        };

        private moviesDc: IMovies = {
            branch: {
                title: 'DC Movies',
                accessor: 'moviesDc'
            },
            data: [],
            isUpdating: false
        };

        // noinspection JSUnusedGlobalSymbols
        created() {
            [this.moviesMarvel, this.moviesDc].forEach((movies) => {
                movies.isUpdating = true;
                store.dispatch('fetchMovies', movies.branch)
                    .then((data) => {
                        movies.data = data;
                        movies.isUpdating = false;
                    });
            });
        }

        isUpdating(): boolean {
            return this.moviesMarvel.isUpdating || this.moviesDc.isUpdating;
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
