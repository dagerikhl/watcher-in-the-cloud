<template>
    <div class="loader">
        Loading{{dots}}
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Loader extends Vue {

        private numberOfDots = 0;
        private dots: string = '';

        created() {
            setInterval(() => {
                this.numberOfDots = (this.numberOfDots + 1)%4;
                this.dots = ' .'.repeat(this.numberOfDots);
            }, 500)
        }
    }
</script>

<style scoped lang="scss">
    .loader {
        width: 200px;

        margin: 0 auto;

        font-size: 200%;
    }
</style>
