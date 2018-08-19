<template>
    <footer>
        <h1 class="copyright">&copy; {{copyright.year + ' - ' + copyright.name}}</h1>
        <section class="links">
            <h2 v-for="(link, i) in links">
                <a class="link" :href="link.url" target="_blank">{{link.title}}</a>
                <Separator v-if="i < links.length - 1"/>
            </h2>
        </section>
    </footer>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    import { ICopyright, ILink } from '../interfaces';
    import Separator from './Separator.vue';

    @Component({
        components: { Separator },
        props: ['copyright', 'links']
    })
    export default class Footer extends Vue {

        @Prop() private copyright!: ICopyright;
        @Prop() private links!: ILink[];

    }
</script>

<style scoped lang="scss">
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        min-height: 6rem;

        padding: $standard-padding;

        background-color: $bkg-color-header;

        border-top: $border-header;

        .copyright {
            display: flex;
            align-items: center;
        }

        .links {
            display: flex;

            h2 {
                display: flex;
                align-items: center;
            }
        }
    }
</style>
