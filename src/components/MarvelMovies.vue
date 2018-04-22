<template>
<section class="movies">
    <MovieTable :data="data"/>
</section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import IMovieData from '../interfaces/IMovieData';

import MovieTable from './MovieTable.vue';

@Component({
    components: {
        MovieTable
    }
})
export default class MarvelMovies extends Vue {

    private data: IMovieData[] = [
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

<style scoped lang="scss">
.movies {
    margin: 1em;
}
</style>
