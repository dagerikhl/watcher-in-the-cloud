<template>
    <section class="login">
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class Login extends Vue {
    }
</script>

<style scoped lang="scss">
    .login {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 10rem 0;
    }
</style>
