<script lang="ts" setup>
const logo = new URL('../../public/nobita_logo.png', import.meta.url).href
</script>

<template>
    <div class="nobita_logo">
        <img class="logo_img" :src="logo" alt="" srcset="">
    </div>
</template>

<style scoped>
.nobita_logo {
    .logo_img {
        width: 40px;
        border-radius: 4px;
    }
}
</style>
