<template>
    <div class="loader">
        <div class="loader-text">
            Loading{{dots}}
        </div>
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
        position: absolute;

        height: 100%;
        width: 100%;

        z-index: 100;

        background-color: $bkg-color-overlay;

        .loader-text {
            position: absolute;

            top: 50%;
            left: 50%;

            transform: translate(-50%, -50%);

            width: 145px;

            font-size: 200%;
            font-weight: bold;
        }
    }
</style>
