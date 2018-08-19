<template>
    <nav>
        <div v-for="link in links" class="nav-button" :href="link.route">
            <div class="nav-background"></div>
            {{link.title}}
        </div>
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
        flex-shrink: 0;
        display: flex;
        align-items: center;

        background-color: $bkg-color-sub-header;
        border-bottom: $border-sub-header;

        font-weight: bold;

        .nav-button {
            position: relative;
            display: flex;
            align-items: center;

            height: 2rem;

            padding: 0 1rem;

            &:hover:not(.active-nav) {
                background-color: $bkg-color-sub-header-hover;

                cursor: pointer;
            }

            .nav-background {
                position: absolute;

                height: 100%;
                width: 100%;
            }

            .link {
                z-index: 10;
            }
        }
    }

    .active-nav {
        background-color: $bkg-color-sub-sub-header;
    }
</style>
