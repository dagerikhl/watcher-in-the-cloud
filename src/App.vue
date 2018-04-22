<template>
<div id="app">
    <Header/>
    <MarvelMovies/>
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
@import "styles/common";

#app {
}
</style>
