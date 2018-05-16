<template>
    <section class="movie-table-container">
        <section class="table-header">
            <div class="clickable branch" @click="toggleShow">
                <div class="icon">
                    <icon name="caret-down" v-if="show"></icon>
                    <icon name="caret-right" v-if="!show"></icon>
                </div>
                {{branch.title}}
            </div>
        </section>

        <table class="movie-table" :class="{ show: show, hide: !show }">
            <colgroup>
                <col v-for="_ in 7" span="1"/>
            </colgroup>

            <thead>
            <tr>
                <th v-for="textColumn in textColumns">{{textColumn}}</th>
                <th class="btn-column" title="Downloaded?">
                    <icon name="download"></icon>
                </th>
                <th class="btn-column" title="Seen?">
                    <icon name="eye"></icon>
                </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(movie, i) in data">
                <td>{{movie.category}}</td>
                <td>{{movie.studios}}</td>
                <td>{{movie.universe}}</td>
                <td class="movie-title">{{movie.title}}</td>
                <td class="centered">{{movie.year}}</td>
                <td class="btn-column">
                    <Checkbox v-model="data[i].downloaded" :disabled="isUpdating()"/>
                </td>
                <td class="btn-column">
                    <Checkbox v-model="data[i].seen" :disabled="isUpdating()"/>
                </td>
            </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    import { database } from '../globals';
    import { IConnector, IMovieBranch, IMovieData } from '../interfaces';
    import { Checkbox } from '.';

    @Component({
        components: { Checkbox },
        props: ['branch', 'data']
    })
    export default class MovieTable extends Vue implements IConnector {

        private readonly textColumns = ['Category', 'Studio(s)', 'Universe', 'Title', 'Year'];

        @Prop() private branch!: IMovieBranch;
        @Prop() private data!: IMovieData[];

        private show: boolean = true;

        private isUpdatingMovie: boolean = false;

        toggleShow() {
            this.show = !this.show;
        }

        isUpdating(): boolean {
            return this.isUpdatingMovie;
        }

        // TODO Remove and make generic
        // updateDownloaded(movie: IMovieData) {
        //     movie.updating = true;
        //
        //     database.collection('movies-marvel')
        //         .doc(movie.id)
        //         .update({ downloaded: movie.downloaded })
        //         .then(() => {
        //             movie.updating = false;
        //             console.log('Movie field "downloaded" updated.');
        //         })
        //         .catch((error) => {
        //             movie.updating = false;
        //             console.error(error);
        //         });
        // }

    }
</script>

<style scoped lang="scss">
    .movie-table-container {
        margin: $standard-margin;

        .branch {
            display: flex;
            align-items: center;

            width: fit-content;

            margin: 1em 0;

            font-size: 150%;

            .icon {
                width: 1em;
            }
        }

        .movie-table {
            display: block;

            width: 100%;

            overflow: hidden;

            border-collapse: collapse;

            colgroup {
                :nth-child(1) {
                    width: 9%;
                }
                :nth-child(2) {
                    width: 15%;
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
                * {
                    height: 16px;
                    width: 16px;

                    display: block;
                    margin: 0 auto;
                }
            }
        }

        .show {
            max-height: 200vh;
        }

        .hide {
            max-height: 0;
        }
    }
</style>
