<script lang="ts" setup>
function toTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

const { y: scroll } = useWindowScroll()
</script>

<template>
    <button
        title="Scroll to top" fixed right-3 bottom-3 w-10 h-10 hover:op100 rounded-full hover-bg-hex-8883
        transition duration-300 z-100 print:hidden :class="scroll > 300 ? 'op60' : 'op0! pointer-events-none'"
        @click="toTop()"
    >
        <div i-ri-arrow-up-line />
    </button>
</template>

<style  scoped>
</style>
