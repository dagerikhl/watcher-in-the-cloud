<template>
    <form class="login" @submit="onSubmit">
        <label for="username">E-mail address</label>
        <input class="text-input" type="email" id="username" name="username" v-model="username" ref="email" required
               placeholder="Your e-mail..."/>

        <label for="password">Password</label>
        <input class="text-input" type="password" id="password" name="password" v-model="password" required
               placeholder="Your password..."/>

        <button class="btn" type="submit">Login</button>
    </form>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { signIn } from '../globals';

    @Component({})
    export default class Login extends Vue {

        private username: string = '';
        private password: string = '';

        // noinspection JSUnusedGlobalSymbols
        mounted() {
            (this.$refs.email as HTMLInputElement).focus();
        }

        onSubmit(e: Event) {
            e.preventDefault();

            // TODO Use username and password to authenticate
            signIn(this.username, this.password)
                .then((user) => {
                    console.log(user);

                    // Navigate to Home
                    this.$router.push('/home');
                })
                .catch((error) => {
                    alert('Login failed.\n' + error);
                });
        }

    }
</script>

<style scoped lang="scss">
    .login {
        align-self: center;
        display: flex;
        flex-direction: column;

        min-height: 256px;
        width: 20rem;

        padding: 10rem 0;

        label {
            margin: 1rem 0 0.25rem 0;

            font-weight: bold;
        }

        button {
            margin-top: 2.25rem;
        }
    }
</style>
