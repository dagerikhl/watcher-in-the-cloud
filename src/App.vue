<template>
<div id="app">
    <Header/>
    <MarvelMovies msg="Welcome to Your Vue.js + TypeScript App"/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import MarvelMovies from './components/MarvelMovies.vue';

@Component({
    components: {
        Header,
        MarvelMovies,
    },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "styles/variables";

body {
    margin: 0;

    #app {
        min-width: 640px;
        min-height: 480px;

        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $color-pri;
    }
}
</style>
