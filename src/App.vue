<template>
    <div id="app">
        <Header title="Watcher in the Cloud" username="dagerikhl"/>
        <section class="content-container">
            <Loader v-if="moviesMarvel.length === 0"/>
            <MovieTable :data="moviesMarvel"/>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import { db } from './main';

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

        private moviesMarvel: IMovieData[] = [];

        created() {
            db.collection('movies-marvel').orderBy('year').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.moviesMarvel.push({ id: doc.id, ...doc.data() } as IMovieData);
                })
            });
        }

    }
</script>

<style lang="scss">
    @import "~styles/common.scss";

    #app {
        .content-container {
            position: relative;
            margin: $standard-margin;
        }
    }
</style>
