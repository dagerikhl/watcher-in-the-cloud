<template>
    <section class="home">
        <section class="info">
            <h1>Welcome to Watcher in the Cloud!</h1>
            <q>The number one place to keep track of what you have seen, what you have left to see, and in many other
                ways keep your OCD in check.</q>
        </section>

        <div v-if="isAuthenticated()">Welcome back {{username}}!</div>
        <router-link v-if="!isAuthenticated()" to="/login" class="btn">Login</router-link>
    </section>
</template>

<script lang="ts">
    import { Component } from 'vue-property-decorator';

    import { UserContext } from '../mixins';

    @Component({
        mixins: [UserContext]
    })
    export default class Home extends UserContext {
    }
</script>

<style scoped lang="scss">
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        min-height: 256px;

        padding: 10rem 0;

        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            height: 10rem;

            h1 {
                text-align: center;
                font-size: 200%;
                font-weight: bold;
            }
        }
    }
</style>
