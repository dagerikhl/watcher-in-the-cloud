<template>
    <section class="home">
        <h1>Welcome to Watcher in the Cloud!</h1>
        <q>The number one place to keep track of what you have seen, what you have left to see, and in many other ways
            keep your OCD in check.</q>

        <section class="login">
            <router-link v-if="!isAuthenticated()" to="/login" class="btn">Login</router-link>
            <div v-if="isAuthenticated()">Welcome back {{username}}!</div>
        </section>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import * as firebase from 'firebase';

    @Component({})
    export default class Home extends Vue {

        private username?: string;

        // noinspection JSUnusedGlobalSymbols
        created() {
            this.username = Home.getCurrentUserUsername();
        }

        isAuthenticated() {
            return Boolean(this.username);
        }

        private static getCurrentUserUsername(): string | undefined {
            let currentUser = firebase.auth().currentUser;

            return (currentUser && currentUser.displayName) || undefined;
        }

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
