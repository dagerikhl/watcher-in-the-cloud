<template>
    <div id="app">
        <Header title="Watcher in the Cloud" username="dagerikhl"/>
        <section class="content-container">
            <Loader :show="moviesMarvel.length === 0"/>
            <MovieTable :data="moviesMarvel"/>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import Header from './components/Header.vue';
    import Loader from './components/Loader.vue';
    import MovieTable from './components/MovieTable.vue';

    import IMovieData from './interfaces/IMovieData';

    @Component({
        components: {
            Header,
            Loader,
            MovieTable
        }
    })
    export default class App extends Vue {

        private moviesMarvel: IMovieData[];

        created() {
            this.$store.dispatch('fetchMoviesMarvel')
                .then((movies) => {
                    this.moviesMarvel = movies;
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
