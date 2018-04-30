<template>
    <table class="movieTable">
        <colgroup>
            <col v-for="_ in 7" span="1"/>
        </colgroup>

        <thead>
        <tr>
            <th v-for="textColumn in textColumns">{{textColumn}}</th>
            <th class="btn-column">
                <icon name="download"></icon>
            </th>
            <th class="btn-column">
                <icon name="eye"></icon>
            </th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="movie in data">
            <td>{{movie.category}}</td>
            <td>{{movie.studios}}</td>
            <td>{{movie.universe}}</td>
            <td class="movie-title">{{movie.title}}</td>
            <td class="centered">{{movie.year}}</td>
            <td class="btn-column">
                <Checkbox v-model="movie.downloaded" :checked="movie.downloaded"/>
            </td>
            <td class="btn-column">
                <Checkbox v-model="movie.seen" :checked="movie.seen"/>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    import IMovieData from '../interfaces/IMovieData';
    import Checkbox from './Checkbox.vue';

    @Component({
        components: { Checkbox },
        props: ['data']
    })
    export default class MovieTable extends Vue {

        private readonly textColumns = ['Category', 'Studio(s)', 'Universe', 'Title', 'Year'];

        @Prop() private data!: IMovieData[];

    }
</script>

<style scoped lang="scss">
    @import "../../styles/variables";

    .movieTable {
        width: 100%;

        border-collapse: collapse;

        colgroup {
            :nth-child(1) {
                width: 10%;
            }
            :nth-child(2) {
                width: 10%;
            }
            :nth-child(3) {
                width: 15%;
            }
            :nth-child(4) {
                width: 45%;
            }
            :nth-child(5) {
                width: 10%;
            }
            :nth-child(6) {
                width: 5%;
            }
            :nth-child(7) {
                width: 5%;
            }
        }

        thead {
            tr {
                th {
                    border-bottom: $border-tab;
                }
            }
        }

        .movie-title {
            font-style: italic;
        }

        .centered {
            text-align: center;
        }

        .btn-column {
            > * {
                height: 16px;
                width: 16px;

                display: block;
                margin: 0 auto;
            }
        }
    }
</style>
