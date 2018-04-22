<template>
<table class="movieTable">
    <thead>
    <tr>
        <th v-for="textColumn in textColumns">{{textColumn}}</th>
        <th class="simple-column">
            <icon name="download"></icon>
        </th>
        <th class="simple-column">
            <icon name="eye"></icon>
        </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="movie in data">
        <td>{{movie.category}}</td>
        <td>{{movie.studios}}</td>
        <td>{{movie.universe}}</td>
        <td>{{movie.title}}</td>
        <td>{{movie.year}}</td>
        <td class="simple-column">
            <label>
                <input type="checkbox" id="downloaded" v-model="movie.downloaded">
                <icon class="checkmark" name="check"></icon>
            </label>
        </td>
        <td class="simple-column">
            <!-- TODO Create a new component for checkboxes -->
            <label>
                <input type="checkbox" id="seen" v-model="movie.seen">
                <icon class="checkmark" name="check"></icon>
            </label>
        </td>
    </tr>
    </tbody>
</table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import IMovieData from '../interfaces/IMovieData';

@Component({
    props: ['data']
})
export default class MovieTable extends Vue {

    private textColumns = ['Category', 'Studio(s)', 'Universe', 'Title', 'Year'];
    @Prop() private data!: IMovieData;

}
</script>

<style scoped lang="scss">
@import "../styles/variables";

.movieTable {
    width: 100%;

    border-collapse: collapse;

    thead {
        tr {
            th {
                text-align: left;

                border-bottom: $border-pri;
            }
        }
    }
}

.simple-column {
    * {
        display: block;
        margin: 0 auto;
    }
}
</style>
