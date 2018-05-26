<template>
    <section class="movie-table-container">
        <section class="movie-table-header">
            <div class="clickable branch" @click="toggleShow">
                <div class="icon">
                    <icon name="caret-down" class="rotatable" :class="{ 'rotate-90': !show }"></icon>
                </div>
                {{movies.branch.title}}
            </div>

            <div class="table-header-btns" :class="{ show: show, hide: !show }">
                <input class="btn clickable" type="button" value="Save Changes" onclick="this.blur()"
                       @click="saveChanges"/>

                <input class="btn clickable" type="button" value="Reset Changes" onclick="this.blur()"
                       @click="resetData"/>
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
            <tr v-for="(movie, i) in dynamicData" :class="{ 'dirty-row': areAnyFieldsDirty(i) }">
                <td>{{movie.category}}</td>
                <td>{{movie.studios}}</td>
                <td>{{movie.universe}}</td>
                <td class="movie-title">{{movie.title}}</td>
                <td class="centered">{{movie.year}}</td>
                <td class="btn-column" :class="{ 'dirty-field': isDownloadedFieldDirty(i) }">
                    <Checkbox v-model="dynamicData[i].downloaded" :disabled="isUpdating()"/>
                </td>
                <td class="btn-column" :class="{ 'dirty-field': isSeenFieldDirty(i) }">
                    <Checkbox v-model="dynamicData[i].seen" :disabled="isUpdating()"/>
                </td>
            </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import { store } from '../globals';

    import { IConnector, IMovieData, IMovies } from '../interfaces';
    import { Checkbox } from './';

    @Component({
        components: { Checkbox },
        props: ['movies']
    })
    export default class MovieTable extends Vue implements IConnector {

        // noinspection JSUnusedLocalSymbols
        private readonly textColumns = ['Category', 'Studio(s)', 'Universe', 'Title', 'Year'];

        @Prop() private movies!: IMovies;

        // noinspection JSMismatchedCollectionQueryUpdate
        private dynamicData: IMovieData[] = [];

        private show: boolean = true;

        private isUpdatingMovies: boolean = false;

        // noinspection JSUnusedGlobalSymbols
        created() {
            this.initializeDynamicData();
        }

        @Watch('movies.data')
        onDataChange() {
            this.initializeDynamicData();
        }

        isUpdating(): boolean {
            return this.isUpdatingMovies;
        }

        toggleShow() {
            this.show = !this.show;
        }

        areAnyFieldsDirty(i: number): boolean {
            return this.isDownloadedFieldDirty(i) || this.isSeenFieldDirty(i);
        }

        isDownloadedFieldDirty(i: number): boolean {
            return this.movies.data[i].downloaded !== this.dynamicData[i].downloaded;
        }

        isSeenFieldDirty(i: number): boolean {
            return this.movies.data[i].seen !== this.dynamicData[i].seen;
        }

        saveChanges() {
            this.isUpdatingMovies = true;
            this.dynamicData.forEach((m, i) => {
                if (this.areAnyFieldsDirty(i)) {
                    store.dispatch('updateMovie', { branch: this.movies.branch, data: m })
                        .then(() => {
                            this.isUpdatingMovies = false;
                        });
                }
            });
        }

        resetData() {
            this.dynamicData = JSON.parse(JSON.stringify(this.movies.data));
        }

        private initializeDynamicData() {
            if (this.dynamicData.length === 0 && this.movies.data.length > 0) {
                this.resetData();
            }
        }

    }
</script>

<style scoped lang="scss">
    .movie-table-container {
        margin: $standard-margin;

        .movie-table-header {
            display: flex;
            justify-content: space-between;

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

            .table-header-btns {
                display: flex;
                align-items: center;

                :not(:first-child) {
                    margin-left: 1em;
                }
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
