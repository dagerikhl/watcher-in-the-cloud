<template>
    <nav>
        <router-link v-if="isAuthenticated()" v-for="route in routes" :key="route.path" class="nav-btn"
                     :class="route.path === $route.path ? 'active-nav' : ''" :to="route.path">
            <div class="nav-background"></div>
            {{route.name}}
        </router-link>
    </nav>
</template>

<script lang="ts">
    import { Component, Prop } from 'vue-property-decorator';

    import { ILink } from '../interfaces';
    import { UserContext } from '../mixins';

    @Component({
        props: ['routes'],
        mixins: [UserContext]
    })
    export default class NavigationMenu extends UserContext {

        @Prop() private routes!: ILink[];

    }
</script>

<style scoped lang="scss">
    nav {
        flex-shrink: 0;
        display: flex;
        align-items: center;

        height: 2rem;

        background-color: $bkg-color-sub-header;
        border-bottom: $border-sub-header;

        font-weight: bold;

        .nav-btn {
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
