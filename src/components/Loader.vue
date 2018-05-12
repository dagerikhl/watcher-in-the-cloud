<template>
    <div class="loader" :class="{ show: show }">
        <div class="loader-text">
            Loading{{dots}}
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        props: ['show']
    })
    export default class Loader extends Vue {

        @Prop() private show!: boolean;

        private numberOfDots = 0;
        private dots: string = '';

        created() {
            setInterval(() => {
                if (this.show) {
                    this.numberOfDots = (this.numberOfDots + 1)%4;
                    this.dots = ' .'.repeat(this.numberOfDots);
                }
            }, 500)
        }

    }
</script>

<style scoped lang="scss">
    .loader {
        position: absolute;

        height: 100%;
        width: 100%;

        opacity: 0;

        background-color: $bkg-color-overlay;

        transition: all 0.2s ease-out;

        pointer-events: none;

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

    .show {
        opacity: 1;
    }
</style>
