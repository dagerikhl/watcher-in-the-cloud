<template>
    <nav>
        <a v-for="link in links" class="link" :href="link.url">{{link.title}}</a>
    </nav>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    import { ILink } from '../interfaces';

    @Component({
        props: ['links']
    })
    export default class NavigationMenu extends Vue {

        @Prop() private links!: ILink[];

    }
</script>

<style scoped lang="scss">
    nav {
        display: flex;
    }
</style>
