<template>
    <header>
        <a class="link title-container" href="/">
            <div class="logo"><img src="../../assets/logo.png"></div>
            <h1 class="title">{{title}}</h1>
        </a>
        <h2 class="author">
            by {{username}}
            (<a class="link" :href="`https://github.com/${username}`" target="_blank">GitHub</a>
            | <a class="link" :href="`https://gitlab.com/${username}`" target="_blank">GitLab</a>)
        </h2>
    </header>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        props: ['title', 'username']
    })
    export default class Header extends Vue {

        @Prop() private title!: string;
        @Prop() private username!: string;

    }
</script>

<style scoped lang="scss">
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: $standard-padding;

        background-color: $bkg-color-header;

        border-bottom: $border-header;

        .title-container {
            display: flex;
            align-items: center;

            .logo {
                margin-right: 1rem;

                > img {
                    height: 32px;
                    width: 32px;
                }
            }

            .title {
                font-size: 200%;
                font-weight: bold;
            }
        }

        .author {
            font-size: 100%;
        }
    }
</style>
