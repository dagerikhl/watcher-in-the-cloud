<template>
    <div id="app">
        <Header title="Watcher in the Cloud" username="dagerikhl"/>
        <section class="content-container">
            <MovieTable :data="temporaryData"/>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import Header from './components/Header.vue';
    import MovieTable from './components/MovieTable';

    import IMovieData from './interfaces/IMovieData';

    @Component({
        components: {
            Header,
            MovieTable
        },
    })
    export default class App extends Vue {

        private temporaryData: IMovieData[] = [
            {
                category: 'Live-action films',
                studios: 'Republic Pictures',
                universe: 'Republic',
                title: 'Captain America',
                year: 1944,
                downloaded: true,
                seen: false
            }
        ]

    }
</script>

<style lang="scss">
    @import "styles/common";

    #app {
        .content-container {
            padding: $standard-padding;
        }
    }
</style>
