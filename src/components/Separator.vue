<template>
    <div class="separator"></div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class Separator extends Vue {
    }
</script>

<style scoped lang="scss">
    .separator {
        display: inline-block;

        height: 100%;
        width: 2px;

        margin: 0 1em;

        background-color: $color-separator;
    }
</style>
