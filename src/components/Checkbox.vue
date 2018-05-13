<template>
    <label class="clickable checkbox" :class="{ disabled: disabled }" :title="tooltip">
        <input type="checkbox" id="checkbox" v-model="checked" :disabled="disabled">
        <icon name="regular/check-square" v-if="checked"></icon>
        <icon name="regular/square" v-if="!checked"></icon>
    </label>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    import ElementEvent from '../utilities/ElementEvent';

    @Component({
        props: ['id', 'disabled', 'tooltip']
    })
    export default class Checkbox extends Vue {

        @Prop() private id!: boolean;
        @Prop() private disabled!: boolean;
        @Prop() private tooltip!: string;

        updateChecked(event: ElementEvent<HTMLInputElement>): void {
            this.$emit('input', event.target.checked);
        }

    }
</script>

<style scoped lang="scss">
    input[type=checkbox] {
        display: none;
    }

    .checkbox {
        height: 16px;
        width: 16px;
    }

    .disabled {
        color: $color-dis;
    }
</style>
