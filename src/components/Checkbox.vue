<template>
    <label class="clickable checkbox" :class="{ disabled: disabled }" :title="tooltip">
        <input type="checkbox" ref="input" :checked="value" :disabled="disabled" @input="updateValue">
        <icon name="regular/check-square" v-if="value"></icon>
        <icon name="regular/square" v-if="!value"></icon>
    </label>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        props: ['value', 'disabled', 'tooltip']
    })
    export default class Checkbox extends Vue {

        @Prop() private value!: boolean;
        @Prop() private disabled!: boolean;

        @Prop() private tooltip!: string;

        updateValue() {
            this.$emit('input', (this.$refs.input as HTMLInputElement).checked);
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
</style>
