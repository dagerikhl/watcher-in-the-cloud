<template>
<header>
    <div class="title-container">
        <div class="logo"><img src="../assets/logo.png"></div>
        <h1 class="title"><a href="/">Watcher in the Cloud</a></h1>
    </div>
    <h2 class="subtitle">by Dag Erik Homdrum Løvgren (<a href="https://gitlab.com/dagerikhl">dagerikhl</a>)</h2>
</header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
}
</script>

<style scoped lang="scss">
@import "../styles/variables";

h1, h2 {
    margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem;

    .title-container {
        display: flex;
        align-items: center;

        .logo {
            margin-right: 1rem;

            > img {
                height: 32px;
                width: 32px;
            }
        }

        .title {
            font-size: 150%;
            font-weight: bold;
        }
    }

    .subtitle {
        font-size: 105%;
        font-weight: normal;
        color: $color-sec;
    }
}
</style>
