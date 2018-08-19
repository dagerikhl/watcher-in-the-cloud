<template>
    <div id="app">
        <Header title="Watcher in the Cloud" username="dagerikhl"/>
        <NavigationMenu :routes="store.state.routes"/>
        <section class="content-container">
            <Loader :show="isUpdating()"/>
            <MovieTable :movies="store.state.moviesMarvel"/>
            <MovieTable :movies="store.state.moviesDc"/>
            <Footer :copyright="copyright" :links="footerLinks"/>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Store } from 'vuex';

    import { store } from './globals';
    import { IConnector, ICopyright, ILink, IMovies, IRootState } from './interfaces';
    import { Footer, Header, Loader, MovieTable, NavigationMenu } from './components';

    @Component({
        components: {
            Footer,
            Header,
            Loader,
            MovieTable,
            NavigationMenu
        }
    })
    export default class App extends Vue implements IConnector {

        private store!: Store<IRootState>;

        // Static display data
        private copyright: ICopyright = {
            name: 'Dag Erik Homdrum Løvgren',
            year: 2018
        };
        private footerLinks: ILink[] = [
            {
                title: 'My GitHub page',
                url: 'https://github.com/dagerikhl'
            },
            {
                title: 'My LinkedIn profile',
                url: 'https://www.linkedin.com/in/dagerikhl'
            }
        ];

        // noinspection JSUnusedGlobalSymbols
        created() {
            this.store = store;

            // Load routes
            store.dispatch('fetchRoutes')
                .then((data) => store.commit('setRoutes', data));

            // Load movies
            [store.state.moviesMarvel, store.state.moviesDc].forEach((movies: IMovies) => {
                movies.isUpdating = true;
                store.dispatch('fetchMovies', movies.branch)
                    .then((data) => {
                        store.commit('setMovies', { branch: movies.branch, data });

                        movies.data = data;
                        movies.isUpdating = false;
                    });
            });
        }

        isUpdating(): boolean {
            return store.state.moviesMarvel.isUpdating || store.state.moviesDc.isUpdating;
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
