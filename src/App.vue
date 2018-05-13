<template>
    <div id="app">
        <Header title="Watcher in the Cloud" username="dagerikhl"/>
        <section class="content-container">
            <Loader :show="isUpdating"/>
            <MovieTable :branch="moviesMarvelBranch" :data="moviesMarvelData"/>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import { store } from './globals';
    import { IMovieBranch, IMovieData } from './interfaces';
    import { Header, Loader, MovieTable } from './components';

    @Component({
        components: {
            Header,
            Loader,
            MovieTable
        }
    })
    export default class App extends Vue {

        private isUpdating: boolean = false;

        private moviesMarvelBranch: IMovieBranch = { title: 'Marvel Movies', accessor: 'moviesMarvel' };
        private moviesMarvelData: IMovieData[] = [];

        created() {
            this.isUpdating = true;
            store.dispatch('fetchMovies', this.moviesMarvelBranch)
                .then((movies) => {
                    this.moviesMarvelData = movies;
                    this.isUpdating = false;
                });
        }

    }
</script>

<style lang="scss">
    @import "~styles/common.scss";

    #app {
        display: flex;
        flex-direction: column;

        height: 100%;

        .content-container {
            flex-grow: 1;
            position: relative;
            margin: $standard-margin;
        }
    }
</style>
