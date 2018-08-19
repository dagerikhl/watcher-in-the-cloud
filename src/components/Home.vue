<template>
    <section class="home">
        <h1>Welcome to Watcher in the Cloud!</h1>
        <q>The number one place to keep track of what you have seen, what you have left to see, and in many other ways
            keep your OCD in check.</q>

        <section class="login">DUMMY LOGIN</section>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class Home extends Vue {
    }
</script>

<style scoped lang="scss">
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 10rem 0;

        h1 {
            margin-bottom: 2rem;

            font-size: 200%;
            font-weight: bold;
        }

        .login {
            margin-top: 10rem;
        }
    }
</style>
