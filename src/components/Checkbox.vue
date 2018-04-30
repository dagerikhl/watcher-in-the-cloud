<template>
    <label class="clickable checkbox" :title="tooltip">
        <input type="checkbox" id="checkbox" :checked="checked" @change="updateChecked">
        <icon class="checkmark" name="check" v-if="checked"></icon>
    </label>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        props: {
            checked: Boolean,
            tooltip: String
        }
    })
    export default class Checkbox extends Vue {

        @Prop() private checked!: boolean;
        @Prop() private tooltip: string;

        updateChecked(event: Event): void {
            this.$emit('input', event.target.checked);
        }

    }
</script>

<style scoped lang="scss">
    @import "../styles/variables";

    input[type=checkbox] {
        display: none;
    }

    .checkbox {
        height: 16px;
        width: 16px;
    }
</style>
