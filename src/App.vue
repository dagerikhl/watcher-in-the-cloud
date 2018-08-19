<template>
    <div id="app">
        <Header title="Watcher in the Cloud" username="dagerikhl"/>
        <NavigationMenu :routes="store.state.routes"/>
        <section class="content-container">
            <router-view></router-view>
            <Footer :copyright="copyright" :links="footerLinks"/>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Store } from 'vuex';

    import { store } from './globals';
    import { ICopyright, ILink, IRootState } from './interfaces';
    import { Footer, Header, NavigationMenu } from './components';

    @Component({
        components: {
            Footer,
            Header,
            NavigationMenu
        }
    })
    export default class App extends Vue {

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
            display: flex;
            flex-direction: column;

            overflow-y: scroll;

            > :first-child {
                flex-grow: 1;
            }
        }
    }
</style>
